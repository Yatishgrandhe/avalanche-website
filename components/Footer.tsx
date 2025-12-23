'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-50"></div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-accent-blue/50 blur-[100px] rounded-full pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/avalanche-logo.png"
                  alt="Avalanche"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none tracking-wide text-slate-900 group-hover:text-accent-blue transition-colors duration-300">AVALANCHE</span>
                <span className="text-sm text-slate-500 tracking-wider">ROBOTICS 2724</span>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Inspiring the next generation of innovators through STEM education and robotics competition.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://www.youtube.com/@Avalanche2724" icon="youtube" color="hover:bg-red-600" />
              <SocialLink href="https://www.instagram.com/avalanche2724/" icon="instagram" color="hover:bg-pink-600" />
              <SocialLink href="https://www.facebook.com/people/Avalanche-Robotics/61560940240183/" icon="facebook" color="hover:bg-blue-600" />
              <SocialLink href="https://www.tiktok.com/@avalanche2724" icon="tiktok" color="hover:bg-black hover:border-white/20" />
              <SocialLink href="https://x.com/Avalanche2724" icon="twitter" color="hover:bg-blue-400" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-900 font-display font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent-blue rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team-development">Team Development</FooterLink>
              <FooterLink href="/student-opportunities">Student Opportunities</FooterLink>
              <FooterLink href="/sponsors">Sponsors</FooterLink>
              <FooterLink href="/scouting">Scouting</FooterLink>
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="text-slate-900 font-display font-semibold mb-6 relative inline-block">
              Join Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent-purple rounded-full"></span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Interest form submissions are currently closed. Please check back later for future opportunities.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-900 font-display font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-accent-cyan rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:avalanche2724@gmail.com" className="text-slate-600 hover:text-accent-blue transition-colors text-sm flex items-center group">
                  <span className="w-2 h-2 bg-accent-blue rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  avalanche2724@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Avalanche Robotics. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="/admin" className="text-slate-500 hover:text-slate-900 text-sm transition-colors hover:underline">
              Admin Access
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-slate-600 hover:text-slate-900 transition-all duration-200 text-sm block hover:translate-x-1 hover:text-shadow-glow">
        {children}
      </Link>
    </li>
  )
}

function SocialLink({ href, icon, color }: { href: string, icon: string, color: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:shadow-lg ${color}`}
    >
      <span className="sr-only">{icon}</span>
      {/* Simple SVG icons based on the type */}
      {icon === 'youtube' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
      )}
      {icon === 'instagram' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
      )}
      {icon === 'facebook' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
      )}
      {icon === 'tiktok' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
      )}
      {icon === 'twitter' && (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      )}
    </a>
  )
}
