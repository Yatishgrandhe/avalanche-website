'use client'

import Timeline from '@/components/Timeline'
import Typewriter from '@/components/Typewriter'
import Image from 'next/image'

const achievements = [
  { date: 'May 2024', title: 'Team Inception', description: 'Founded with a vision to inspire students in STEM.' },
  { date: 'July 2024', title: 'Built Offseason Robot', description: 'First robot construction and testing phase.' },
  { date: 'February 2025', title: 'Built First Season Bot', description: 'Constructed our first competition robot for the season.' },
  { date: 'March 2025', title: 'Won Rising Allstar Award', description: 'Recognized for potential and early success at our first event.' },
  { date: 'April 2025', title: 'District Championship', description: 'Won Rising Allstar Award at the district level.' },
  { date: 'May 2025', title: 'World Championship', description: 'Competed at the international level. Started offseason year 2.' },
  { date: 'May 2025', title: 'Added Outreach Requirement', description: 'Commitment to community service and engagement.' },
  { date: 'Aug 2025', title: 'Started Everest Robotics', description: 'Launched FTC Team 31643 to expand opportunities.' },
]

export default function About() {
  return (
    <div className="relative min-h-screen pb-20 overflow-hidden">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4 overflow-hidden h-20 flex items-center justify-center">
          <Typewriter text="ABOUT US" speed={150} loop={false} cursor={true} />
        </h1>
        <p className="text-xl text-accent-blue font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
          RECRUIT | REFINE | RETAIN | REPEAT
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 mb-20 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

          {/* 3D Floating Triangles Background */}
          <div className="absolute top-10 right-10 w-20 h-20 perspective-1000 opacity-30 animate-float">
            <div className="tetrahedron">
              <div className="tetrahedron-face tetrahedron-face-1"></div>
              <div className="tetrahedron-face tetrahedron-face-2"></div>
              <div className="tetrahedron-face tetrahedron-face-3"></div>
              <div className="tetrahedron-face tetrahedron-face-4"></div>
            </div>
          </div>
          <div className="absolute bottom-20 left-10 w-16 h-16 perspective-1000 opacity-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="tetrahedron" style={{ animationDuration: '25s' }}>
              <div className="tetrahedron-face tetrahedron-face-1"></div>
              <div className="tetrahedron-face tetrahedron-face-2"></div>
              <div className="tetrahedron-face tetrahedron-face-3"></div>
              <div className="tetrahedron-face tetrahedron-face-4"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">Who We Are</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We are <span className="text-accent-blue font-semibold">FRC Team 2724</span> and <span className="text-accent-purple font-semibold">FTC Team 31643</span> from the greater Charlotte, North Carolina area.
                  We operate out of the Queen City Robotics Alliance Zone in Southwest Charlotte, bringing together students from diverse backgrounds to collaborate and innovate.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors hover:border-accent-yellow/30 group">
                  <h3 className="text-xl font-bold text-accent-yellow mb-4 flex items-center group-hover:scale-105 transition-transform">
                    <span className="w-2 h-2 bg-accent-yellow rounded-full mr-3"></span>
                    Our Students
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center"><span className="text-white font-bold mr-2">2</span> States</li>
                    <li className="flex items-center"><span className="text-white font-bold mr-2">4</span> Counties</li>
                    <li className="flex items-center"><span className="text-white font-bold mr-2">10</span> Cities</li>
                    <li className="flex items-center"><span className="text-white font-bold mr-2">16</span> High Schools</li>
                    <li className="flex items-center"><span className="text-white font-bold mr-2">7</span> Middle Schools</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:bg-white/10 transition-colors hover:border-accent-cyan/30 group">
                  <h3 className="text-xl font-bold text-accent-cyan mb-4 flex items-center group-hover:scale-105 transition-transform">
                    <span className="w-2 h-2 bg-accent-cyan rounded-full mr-3"></span>
                    Our Mentors
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Industry professionals in:</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center">Electrical Engineering</li>
                    <li className="flex items-center">Computer Programming</li>
                    <li className="flex items-center">Cyber Security</li>
                    <li className="flex items-center">Civil Engineering</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl blur-2xl opacity-20 animate-pulse-slow group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-primary-dark/50 backdrop-blur-sm rounded-2xl p-2 border border-white/10 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-y-2">
                <div className="aspect-video rounded-xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/team-win.png"
                    alt="Avalanche Robotics Team Winning Moment"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-10">
                    <h3 className="font-display font-bold text-2xl text-white mb-1">FIRST ROBOTICS COMPETITION</h3>
                    <p className="text-accent-yellow font-bold tracking-wider text-sm">WINNER 2025 NC STATE CHAMPIONSHIP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl text-white mb-4">OUR JOURNEY</h2>
            <p className="text-gray-400">The milestones that define our legacy</p>
          </div>
          <Timeline items={achievements} />
        </div>
      </div>
    </div>
  )
}

