const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Create assets directory if it doesn't exist
const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Function to download a file
async function downloadFile(url, filename) {
    try {
        console.log(`Downloading: ${url}`);
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });
        
        const filePath = path.join(assetsDir, filename);
        const writer = fs.createWriteStream(filePath);
        
        response.data.pipe(writer);
        
        return new Promise((resolve, reject) => {
            writer.on('finish', () => {
                console.log(`✅ Downloaded: ${filename}`);
                resolve();
            });
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`❌ Failed to download ${url}:`, error.message);
    }
}

// Function to extract media URLs from the site
async function extractMediaUrls() {
    try {
        console.log('🔍 Scanning Esven.us for media assets...');
        
        const response = await axios.get('https://www.esven.us');
        const $ = cheerio.load(response.data);
        
        const mediaUrls = new Set();
        
        // Extract all image sources
        $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && src.startsWith('http')) {
                mediaUrls.add(src);
            }
        });
        
        // Extract background images from CSS
        $('*').each((i, el) => {
            const style = $(el).attr('style');
            if (style) {
                const bgImageMatch = style.match(/background-image:\s*url\(['"]?(.*?)['"]?\)/);
                if (bgImageMatch && bgImageMatch[1].startsWith('http')) {
                    mediaUrls.add(bgImageMatch[1]);
                }
            }
        });
        
        // Extract favicon and meta images
        $('link[rel*="icon"], meta[property="og:image"], meta[name="twitter:image"]').each((i, el) => {
            const href = $(el).attr('href') || $(el).attr('content');
            if (href && href.startsWith('http')) {
                mediaUrls.add(href);
            }
        });
        
        // Extract video sources
        $('video source, video').each((i, el) => {
            const src = $(el).attr('src');
            if (src && src.startsWith('http')) {
                mediaUrls.add(src);
            }
        });
        
        return Array.from(mediaUrls);
    } catch (error) {
        console.error('❌ Error extracting media URLs:', error.message);
        return [];
    }
}

// Function to get file extension from URL
function getFileExtension(url) {
    try {
        const urlObj = new URL(url);
        const pathname = urlObj.pathname;
        const ext = path.extname(pathname);
        return ext || '.jpg'; // Default to .jpg if no extension
    } catch {
        return '.jpg';
    }
}

// Function to generate safe filename
function generateSafeFilename(url, index) {
    try {
        const urlObj = new URL(url);
        let filename = path.basename(urlObj.pathname);
        
        // If no filename, generate one
        if (!filename || filename === '/') {
            const ext = getFileExtension(url);
            filename = `asset_${index}${ext}`;
        }
        
        // Clean filename
        filename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
        
        return filename;
    } catch {
        return `asset_${index}.jpg`;
    }
}

// Main function to download all assets
async function downloadAllAssets() {
    console.log('🚀 Starting Esven.us media asset download...\n');
    
    // Known important assets from DOM inspection
    const knownAssets = [
        // Favicon/Logo variations
        'https://static.wixstatic.com/media/75fbd5_41ff5ec1ca40408583f83f8dce5eaf02%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/75fbd5_41ff5ec1ca40408583f83f8dce5eaf02%7Emv2.jpg',
        'https://static.wixstatic.com/media/75fbd5_41ff5ec1ca40408583f83f8dce5eaf02%7Emv2.jpg/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/75fbd5_41ff5ec1ca40408583f83f8dce5eaf02%7Emv2.jpg',
        'https://static.wixstatic.com/media/75fbd5_41ff5ec1ca40408583f83f8dce5eaf02%7Emv2.jpg/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/75fbd5_41ff5ec1ca40408583f83f8dce5eaf02%7Emv2.jpg'
    ];
    
    // Extract additional assets from the site
    const extractedUrls = await extractMediaUrls();
    
    // Combine known and extracted assets
    const allUrls = [...new Set([...knownAssets, ...extractedUrls])];
    
    console.log(`📊 Found ${allUrls.length} media assets to download\n`);
    
    // Download each asset
    for (let i = 0; i < allUrls.length; i++) {
        const url = allUrls[i];
        const filename = generateSafeFilename(url, i);
        await downloadFile(url, filename);
    }
    
    console.log('\n✅ All media assets downloaded successfully!');
    console.log(`📁 Assets saved to: ${assetsDir}`);
    
    // Create an index file mapping URLs to local files
    const assetMap = {};
    allUrls.forEach((url, index) => {
        const filename = generateSafeFilename(url, index);
        assetMap[url] = `./assets/${filename}`;
    });
    
    fs.writeFileSync(
        path.join(__dirname, 'asset-map.json'), 
        JSON.stringify(assetMap, null, 2)
    );
    
    console.log('📋 Asset mapping saved to asset-map.json');
}

// Run the downloader
if (require.main === module) {
    downloadAllAssets().catch(console.error);
}

module.exports = { downloadAllAssets, extractMediaUrls };
