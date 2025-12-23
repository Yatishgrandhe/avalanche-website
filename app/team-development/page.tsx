'use client'

import Timeline from '@/components/Timeline'
import Typewriter from '@/components/Typewriter'

const robots = [
  { date: '2024', title: 'Zelda', description: 'FIRST Crescendo Off Season Bot', image: '/images/robot-placeholder.png' },
  { date: '2024-2025', title: 'Frosbyte', description: 'FIRST Reefscape Bot', image: '/images/robot-placeholder.png' },
  { date: '2025-2026', title: '?', description: 'FIRST Age Bot', image: '/images/robot-placeholder.png' },
]

export default function TeamDevelopment() {
  return (
    <div className="relative min-h-screen pb-20 overflow-hidden">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-900 mb-4 overflow-hidden h-20 flex items-center justify-center">
          <Typewriter text="TEAM DEVELOPMENT" speed={100} loop={false} cursor={true} className="text-slate-900" />
        </h1>
        <p className="text-xl text-accent-purple font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
          REFINE | TRAINING & OUTREACH
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in">
          {/* Training Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-accent-yellow/30 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-accent-yellow/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-yellow/30 transition-colors relative z-10">
              <svg className="w-6 h-6 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4 relative z-10">TRAINING</h3>
            <ul className="space-y-3 text-slate-600 relative z-10">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-3"></span>
                Electrical Engineering
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-3"></span>
                Mechanical Design
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-3"></span>
                Programming
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full mr-3"></span>
                Team Building & Fun
              </li>
            </ul>
          </div>

          {/* Outreach Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="w-12 h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-cyan/30 transition-colors relative z-10">
              <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4 relative z-10">OUTREACH</h3>
            <ul className="space-y-3 text-slate-600 relative z-10">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-3"></span>
                FLL Afterschool Programs
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-3"></span>
                Summer Camps
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-3"></span>
                Community Demos
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mr-3"></span>
                Mentoring
              </li>
            </ul>
          </div>

          {/* Stats Card */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-accent-purple/30 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-accent-purple/5 group-hover:bg-accent-purple/10 transition-colors"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-[50px] animate-pulse-slow"></div>
            <div className="relative z-10">
              <h3 className="font-display font-bold text-xl text-slate-500 mb-2">2025-2026 SEASON</h3>
              <div className="text-6xl font-bold text-slate-900 mb-2 tracking-tight">950+</div>
              <p className="text-accent-purple font-medium tracking-wider">HOURS LOGGED</p>
            </div>
          </div>
        </div>

        {/* Robots Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-slate-900 mb-4">OUR ROBOTS</h2>
            <p className="text-slate-600">Engineering excellence through the years</p>
          </div>
          <Timeline items={robots} />
        </div>
      </div>
    </div>
  )
}

