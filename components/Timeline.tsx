'use client'

import Image from 'next/image'

interface TimelineItem {
  date: string
  title: string
  description?: string
  image?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative py-10">
      {/* Center Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-accent-blue/50 to-transparent"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-slide-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >

            {/* Content Side */}
            <div className={`flex-1 w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-24 md:pr-12' : 'md:px-12'}`}>
              <div
                className={`bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-700 shadow-md hover:border-accent-blue/50 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`relative z-10 text-accent-blue font-display font-bold text-lg mb-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {item.date}
                </div>
                <h3 className={`relative z-10 text-white font-bold text-xl mb-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {item.title}
                </h3>
                {item.image && (
                  <div className="mb-4 relative h-64 w-full rounded-lg overflow-hidden bg-slate-800">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain transform hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                {item.description && (
                  <p className={`relative z-10 text-slate-300 text-sm leading-relaxed group-hover:text-slate-100 transition-colors ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-accent-blue rounded-full z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-shadow duration-300">
              <div className="absolute inset-0 bg-accent-blue rounded-full animate-ping opacity-20"></div>
            </div>

            {/* Empty Side */}
            <div className="hidden md:block flex-1"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

