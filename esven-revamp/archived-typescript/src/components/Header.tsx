import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <h2 className="text-xl font-semibold">Esalen Ventures</h2>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/design4/landing" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/design4/team" className="hover:text-blue-200 transition-colors">
              Team
            </Link>
            <Link href="/design4/portfolio" className="hover:text-blue-200 transition-colors">
              Portfolio
            </Link>
            <Link href="/design4/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden mt-4 space-y-2 pb-2">
          <Link href="/design4/landing" className="block py-2 hover:bg-blue-800 px-2 rounded">Home</Link>
          <Link href="/design4/team" className="block py-2 hover:bg-blue-800 px-2 rounded">Team</Link>
          <Link href="/design4/portfolio" className="block py-2 hover:bg-blue-800 px-2 rounded">Portfolio</Link>
          <Link href="/design4/contact" className="block py-2 hover:bg-blue-800 px-2 rounded">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
