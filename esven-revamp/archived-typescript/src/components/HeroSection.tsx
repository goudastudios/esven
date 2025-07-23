import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden min-h-[480px] flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/80 z-0" />
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8">
        {/* Left: Hero content */}
        <div className="flex-1 flex flex-col items-start md:items-start md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">We Know People</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">We Invest in People</h2>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-blue-100">
            Esalen Ventures partners with founders, co-investors, advisors, and top talent to build the next generation of category leaders.
          </p>
          <div className="flex gap-4 mb-6">
            <Link href="/design4/portfolio">
              <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-blue-100 transition-colors">
                Explore Portfolio
              </button>
            </Link>
            <Link href="/design4/contact">
              <button className="border border-white text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition-colors">
                Partner With Us
              </button>
            </Link>
          </div>
        </div>
        {/* Right: Network Visual */}
        <div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
          <div className="relative w-[320px] h-[320px]">
            {/* Central Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-blue-300 shadow-lg">EV</div>
              <div className="mt-2 text-sm font-medium text-blue-100">Esalen Ventures</div>
            </div>
            {/* Founders Node */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-xl">👤</div>
              <div className="mt-1 text-xs text-blue-100">Founders</div>
            </div>
            {/* Co-Investors Node */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-xl">💼</div>
              <div className="mt-1 text-xs text-blue-100">Co-Investors</div>
            </div>
            {/* Advisors Node */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-xl">🎯</div>
              <div className="mt-1 text-xs text-blue-100">Advisors</div>
            </div>
            {/* Talent Node */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-xl">⭐</div>
              <div className="mt-1 text-xs text-blue-100">Talent</div>
            </div>
            {/* Connection lines (visual only, not interactive) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
              <line x1="160" y1="160" x2="160" y2="32" stroke="#a7c7f7" strokeWidth="2" />
              <line x1="160" y1="160" x2="288" y2="160" stroke="#a7c7f7" strokeWidth="2" />
              <line x1="160" y1="160" x2="160" y2="288" stroke="#a7c7f7" strokeWidth="2" />
              <line x1="160" y1="160" x2="32" y2="160" stroke="#a7c7f7" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
