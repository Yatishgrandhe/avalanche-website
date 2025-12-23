'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Scouting() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-900 mb-4 animate-fade-in">
          SCOUTING
        </h1>
        <p className="text-xl text-accent-blue font-medium animate-slide-up">
          DATA DRIVEN DECISIONS
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center animate-fade-in">

          {/* Main Card */}
          <div className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl max-w-4xl w-full text-center relative overflow-hidden group mb-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] group-hover:bg-accent-blue/10 transition-all duration-500"></div>

            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-6">Access Our Scouting System</h2>
              <p className="text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Leverage real-time data and analytics to make informed strategic decisions during competitions. Our custom scouting system provides comprehensive match insights.
              </p>

              <Link
                href="#"
                className="inline-flex items-center px-8 py-4 bg-accent-blue hover:bg-blue-600 text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:-translate-y-1 group"
              >
                <span>Launch Scouting App</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <Image
              src="/images/first-logo.png"
              alt="FIRST Robotics"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

