const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

async function scrapeEsvenSite() {
  try {
    console.log('Scraping Esven.us website...');
    
    // Fetch the main page
    const response = await axios.get('https://www.esven.us');
    const $ = cheerio.load(response.data);
    
    // Extract basic structure and content
    const scrapedData = {
      title: $('title').text(),
      
      // Extract navigation links
      navigation: [],
      
      // Extract main content sections
      content: {
        hero: '',
        sections: []
      },
      
      // Extract any images
      images: [],
      
      // Extract CSS (inline styles)
      styles: [],
      
      // Extract JavaScript
      scripts: []
    };
    
    // Get navigation links
    $('a').each((i, el) => {
      const href = $(el).attr('href');
      const text = $(el).text().trim();
      if (href && text && href.includes('esven.us')) {
        scrapedData.navigation.push({ text, href });
      }
    });
    
    // Get main text content
    $('body').find('*').each((i, el) => {
      const text = $(el).text().trim();
      if (text.length > 20 && !text.includes('http')) {
        scrapedData.content.sections.push(text);
      }
    });
    
    // Get images
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      const alt = $(el).attr('alt');
      if (src) {
        scrapedData.images.push({ src, alt });
      }
    });
    
    // Save scraped data
    fs.writeFileSync(
      path.join(__dirname, 'data/scraped-content.json'), 
      JSON.stringify(scrapedData, null, 2)
    );
    
    console.log('Scraping completed! Data saved to data/scraped-content.json');
    console.log(`Found ${scrapedData.navigation.length} navigation items`);
    console.log(`Found ${scrapedData.content.sections.length} content sections`);
    console.log(`Found ${scrapedData.images.length} images`);
    
    return scrapedData;
    
  } catch (error) {
    console.error('Error scraping site:', error.message);
    return null;
  }
}

// Run scraper if called directly
if (require.main === module) {
  scrapeEsvenSite();
}

module.exports = { scrapeEsvenSite };
