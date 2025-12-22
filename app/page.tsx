'use client'

import Image from 'next/image'
import Link from 'next/link'
import Typewriter from '@/components/Typewriter'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in">
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight mb-6 overflow-hidden">
              <span className="block text-white animate-slide-up">WE ARE</span>
              <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center">
                <Typewriter
                  text={['AVALANCHE', 'INNOVATORS', 'CHAMPIONS', 'FAMILY']}
                  speed={150}
                  delay={2000}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan pb-4"
                  cursor={false}
                />
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in" style={{ animationDelay: '1s' }}>
              FRC Team 2724 & FTC Team 31643. <br className="hidden md:block" />
              Inspiring the next generation of innovators through STEM excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Link
                href="/avalanche-interest"
                className="group relative px-8 py-4 bg-accent-blue text-white rounded-full font-semibold text-lg overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] hover:-translate-y-1"
              >
                <span className="relative z-10">Join the Team</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold text-lg backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section >

      {/* Mission Statement */}
      < section className="py-24 relative" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-accent-blue/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] group-hover:bg-accent-blue/20 transition-all duration-500 animate-pulse-slow"></div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 text-white">
                OUR MISSION
              </h2>
              <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light">
                &quot;A commitment to students, innovation, and sustainability.&quot;
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* The Cycle */}
      < section className="py-24 relative" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">THE CYCLE</h2>
            <p className="text-gray-400 text-lg">Our proven methodology for sustainable success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CycleCard
              title="RECRUIT"
              description="Building our team with passionate students ready to learn and grow."
              color="blue"
              delay={0}
            />
            <CycleCard
              title="REFINE"
              description="Continuous improvement through hands-on training and mentorship."
              color="purple"
              delay={100}
            />
            <CycleCard
              title="RETAIN"
              description="Fostering a supportive community that keeps members engaged."
              color="cyan"
              delay={200}
            />
            <CycleCard
              title="REPEAT"
              description="Building a sustainable legacy of excellence year after year."
              color="yellow"
              delay={300}
            />
          </div>
        </div>
      </section >

      {/* Logos Section */}
      < section className="py-24 border-t border-white/5 bg-white/5 backdrop-blur-sm" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <Image src="/images/first-logo.png" alt="FIRST Robotics" width={160} height={160} className="object-contain" />
            </div>
            <div className="w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <Image src="/images/avalanche-logo.png" alt="Avalanche Robotics" width={160} height={160} className="object-contain" />
            </div>
            <div className="w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
              <Image src="/images/everest-logo.png" alt="Everest 31643" width={160} height={160} className="object-contain" />
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

function CycleCard({ title, description, color, delay }: { title: string, description: string, color: string, delay: number }) {
  const colorClasses = {
    blue: "text-accent-blue group-hover:text-accent-blue",
    purple: "text-accent-purple group-hover:text-accent-purple",
    cyan: "text-accent-cyan group-hover:text-accent-cyan",
    yellow: "text-accent-yellow group-hover:text-accent-yellow",
  }

  const borderClasses = {
    blue: "group-hover:border-accent-blue/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    purple: "group-hover:border-accent-purple/50 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]",
    cyan: "group-hover:border-accent-cyan/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    yellow: "group-hover:border-accent-yellow/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
  }

  return (
    <div
      className={`glass p-8 rounded-2xl border border-white/10 transition-all duration-500 hover:-translate-y-2 group ${borderClasses[color as keyof typeof borderClasses]} relative overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-${color === 'blue' ? 'accent-blue' : color === 'purple' ? 'accent-purple' : color === 'cyan' ? 'accent-cyan' : 'accent-yellow'}`}></div>
      <h3 className={`font-display font-bold text-3xl mb-4 transition-colors duration-300 ${colorClasses[color as keyof typeof colorClasses]}`}>
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative z-10">
        {description}
      </p>
    </div>
  )
}

