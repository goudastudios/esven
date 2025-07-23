import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="footer-brand mb-6 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-semibold mb-2">Esalen Ventures</h4>
            <p className="text-blue-200">We know people. We invest in winners.</p>
          </div>
          <div className="footer-contact text-center md:text-right">
            <h5 className="text-lg font-medium mb-3">Ready to Partner?</h5>
            <Link 
              href="/design4/contact" 
              className="bg-white text-blue-900 hover:bg-blue-100 px-6 py-2 rounded-md font-medium transition-colors inline-block"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          <p>© {currentYear} by Esalen Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
