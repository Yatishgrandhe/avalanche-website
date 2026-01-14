'use client'

import SponsorForm from '@/components/SponsorForm'
import Image from 'next/image'
import { useState } from 'react'

interface Sponsor {
  name: string
  logo?: string
  website?: string
  large?: boolean // For logos that should be displayed larger
}

const sponsors2024_2025: Sponsor[] = [
  { name: 'Bobcat', logo: '/images/sponsors/bobcat.png', website: 'https://www.bobcat.com' },
  { name: 'Argosy Foundation', logo: '/images/sponsors/argosy.png', website: 'https://www.argosyfoundation.org' },
  { name: 'AFI Systems', logo: '/images/sponsors/afi.png' },
  { name: 'Salant Family Foundation', logo: '/images/sponsors/salant.png' },
  { name: 'Gene Haas Foundation', logo: '/images/sponsors/gene-haas-foundation-logo.png', website: 'https://ghaasfoundation.org', large: true },
  { name: 'John Deere', logo: '/images/sponsors/Johndeere.png', website: 'https://www.deere.com' },
  { name: 'RTX', logo: '/images/sponsors/RTX.png', website: 'https://www.rtx.com' },
  { name: 'NASA', logo: '/images/sponsors/nasa.png', website: 'https://www.nasa.gov', large: true },
  { name: 'Synchrony', logo: '/images/sponsors/synchrony.png', website: 'https://www.synchrony.com' },
  { name: 'Robotics', logo: '/images/sponsors/robotics-logo.png' },
]

const sponsors2025_2026: Sponsor[] = [
  { name: 'Bobcat', logo: '/images/sponsors/bobcat.png', website: 'https://www.bobcat.com' },
  { name: 'Salant Family Foundation', logo: '/images/sponsors/salant.png' },
  { name: 'Gene Haas Foundation', logo: '/images/sponsors/gene-haas-foundation-logo.png', website: 'https://ghaasfoundation.org', large: true },
  { name: 'NASA', logo: '/images/sponsors/nasa.png', website: 'https://www.nasa.gov', large: true },
  { name: 'Kimley-Horn', logo: '/images/sponsors/Kimleyhorn.png', website: 'https://www.kimley-horn.com' },
  { name: 'AFI Systems', logo: '/images/sponsors/afi.png' },
  { name: 'Robotics', logo: '/images/sponsors/robotics-logo.png' },
]

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const isLarge = sponsor.large || false
  const maxHeight = isLarge ? 'max-h-48 md:max-h-56' : 'max-h-32 md:max-h-40'
  const minHeight = isLarge ? 'min-h-[200px] md:min-h-[240px]' : 'min-h-[160px]'
  const isSalant = sponsor.name === 'Salant Family Foundation'

  const content = (
    <div className={`bg-slate-900/80 backdrop-blur-md p-8 rounded-xl border border-slate-700 shadow-md flex items-center justify-center text-center ${minHeight} hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}>
      {sponsor.logo && !imageError ? (
        <div className={`relative w-full h-full flex items-center justify-center ${isSalant ? 'bg-slate-700 rounded-lg p-4' : ''}`}>
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            width={isLarge ? 350 : 250}
            height={isLarge ? 180 : 120}
            className={`object-contain ${maxHeight} w-auto transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <span className="absolute font-semibold text-slate-400 text-sm">Loading...</span>
          )}
        </div>
      ) : (
        <span className="font-semibold text-slate-300 group-hover:text-white transition-colors text-lg">{sponsor.name}</span>
      )}
    </div>
  )

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    )
  }

  return content
}

export default function Sponsors() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4 animate-fade-in">
          SPONSORS
        </h1>
        <p className="text-xl text-accent-yellow font-medium animate-slide-up">
          REPEAT | SUSTAINING OUR FUTURE
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <p className="text-xl text-slate-300 leading-relaxed">
            Our sponsors are the backbone of our team, enabling us to inspire the next generation of innovators.
            <span className="text-white font-semibold block mt-2">Thank you for your support!</span>
          </p>
        </div>

        {/* 2024-2025 Sponsors */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-xs"></div>
            <h2 className="font-display font-bold text-3xl text-slate-900 mx-8">2024-2025 SPONSORS</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent w-full max-w-xs"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sponsors2024_2025.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>

        {/* 2025-2026 Sponsors */}
        <div className="mb-20 animate-fade-in">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gradient-to-r from-transparent via-accent-yellow/50 to-transparent w-full max-w-xs"></div>
            <h2 className="font-display font-bold text-3xl text-accent-yellow mx-8">2025-2026 SPONSORS</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-accent-yellow/50 to-transparent w-full max-w-xs"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sponsors2025_2026.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-[80px]"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">Become a Sponsor</h2>
                <p className="text-slate-600">Join us in shaping the future of STEM education.</p>
              </div>
              <SponsorForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

