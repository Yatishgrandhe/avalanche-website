'use client'

import SponsorForm from '@/components/SponsorForm'
import Image from 'next/image'
import { useState } from 'react'

interface Sponsor {
  name: string
  logo?: string
  website?: string
}

const sponsors2024_2025: Sponsor[] = [
  { name: 'Avalanche Robotics', logo: '/images/avalanche-logo.png' },
  { name: 'Bobcat', logo: '/images/sponsors/bobcat-logo.png', website: 'https://www.bobcat.com' },
  { name: 'Argosy Foundation', logo: '/images/sponsors/argosy-foundation-logo.png', website: 'https://www.argosyfoundation.org' },
  { name: 'AFI Systems', logo: '/images/sponsors/afi-systems-logo.png' },
  { name: 'Salant Family Foundation', logo: '/images/sponsors/salant-foundation-logo.png' },
  { name: 'Gene Haas Foundation', logo: '/images/sponsors/gene-haas-foundation-logo.png', website: 'https://ghaasfoundation.org' },
  { name: 'John Deere', logo: '/images/sponsors/john-deere-logo.png', website: 'https://www.deere.com' },
  { name: 'RTX', logo: '/images/sponsors/rtx-logo.png', website: 'https://www.rtx.com' },
  { name: 'NASA', logo: '/images/sponsors/nasa-logo.png', website: 'https://www.nasa.gov' },
  { name: 'Synchrony', logo: '/images/sponsors/synchrony-logo.png', website: 'https://www.synchrony.com' },
]

const sponsors2025_2026: Sponsor[] = [
  { name: 'Avalanche Robotics', logo: '/images/avalanche-logo.png' },
  { name: 'Bobcat', logo: '/images/sponsors/bobcat-logo.png', website: 'https://www.bobcat.com' },
  { name: 'Salant Family Foundation', logo: '/images/sponsors/salant-foundation-logo.png' },
  { name: 'Gene Haas Foundation', logo: '/images/sponsors/gene-haas-foundation-logo.png', website: 'https://ghaasfoundation.org' },
  { name: 'NASA', logo: '/images/sponsors/nasa-logo.png', website: 'https://www.nasa.gov' },
  { name: 'Kimley-Horn', logo: '/images/sponsors/kimley-horn-logo.png', website: 'https://www.kimley-horn.com' },
  { name: 'AFI Systems', logo: '/images/sponsors/afi-systems-logo.png' },
]

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const content = (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md flex items-center justify-center text-center min-h-[120px] hover:bg-slate-50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
      {sponsor.logo && !imageError ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            width={150}
            height={80}
            className={`object-contain max-h-20 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onError={() => setImageError(true)}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <span className="absolute font-semibold text-slate-400 text-sm">Loading...</span>
          )}
        </div>
      ) : (
        <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{sponsor.name}</span>
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
        <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-900 mb-4 animate-fade-in">
          SPONSORS
        </h1>
        <p className="text-xl text-accent-yellow font-medium animate-slide-up">
          REPEAT | SUSTAINING OUR FUTURE
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <p className="text-xl text-slate-600 leading-relaxed">
            Our sponsors are the backbone of our team, enabling us to inspire the next generation of innovators.
            <span className="text-slate-900 font-semibold block mt-2">Thank you for your support!</span>
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

