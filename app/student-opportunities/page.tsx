'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function StudentOpportunities() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4 animate-fade-in">
          STUDENT OPPORTUNITIES
        </h1>
        <p className="text-xl text-accent-cyan font-medium animate-slide-up">
          RETAIN | SERVICE, SCHOLARSHIP & EMPLOYMENT
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-fade-in">
          {/* Service Card */}
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-blue/30 transition-colors">
              <svg className="w-6 h-6 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-4">SERVICE</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Opportunities for community service hours</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Learn directly from industry professionals</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Connect with and serve local communities</span>
              </li>
            </ul>
          </div>

          {/* Scholarship Card */}
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-accent-purple/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-purple/30 transition-colors">
              <svg className="w-6 h-6 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-4">SCHOLARSHIP</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Access to exclusive FIRST scholarships</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Personalized letters of recommendation</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Networking access to top colleges and universities</span>
              </li>
            </ul>
          </div>

          {/* Employment Card */}
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-12 h-12 bg-accent-cyan/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-cyan/30 transition-colors">
              <svg className="w-6 h-6 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-4">EMPLOYMENT</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Direct access to companies through sponsorships</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Exclusive networking activities and career fairs</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Demo opportunities at major corporations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action / FIRST Logo */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-slate-900/80 backdrop-blur-md p-12 rounded-3xl border border-slate-700 shadow-xl max-w-4xl w-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] group-hover:bg-accent-blue/20 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="w-48 h-48 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src="/images/first-logo.png"
                  alt="FIRST Robotics"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left max-w-lg">
                <h3 className="font-display font-bold text-3xl text-white mb-4">Join the Movement</h3>
                <p className="text-slate-300 mb-6">
                  Be part of a global community of innovators, leaders, and changemakers. Your journey starts here.
                </p>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-yellow-600 text-sm font-medium">
                    ⚠️ Interest form submissions are currently closed. Please check back later for future opportunities.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-block px-6 py-3 bg-accent-blue hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:-translate-y-1"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

