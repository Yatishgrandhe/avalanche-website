'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team-development' },
  { name: 'Opportunities', href: '/student-opportunities' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Scouting', href: '/scouting' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 transition-transform duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <Image
                src="/images/avalanche-logo.png"
                alt="Avalanche"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-wide text-white group-hover:text-accent-blue transition-colors duration-300">AVALANCHE</span>
              <span className="text-xs text-gray-400 tracking-wider group-hover:text-gray-300 transition-colors duration-300">ROBOTICS 2724</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== '/' && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${isActive
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-accent-blue/20 border border-accent-blue/50 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
                  )}
                  <div className={`absolute inset-0 bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full ${isActive ? 'hidden' : ''}`}></div>
                  <span className="relative z-10">{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== '/' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${isActive
                    ? 'bg-accent-blue/20 text-accent-blue border border-accent-blue/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

