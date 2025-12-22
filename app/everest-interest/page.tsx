'use client'

import InterestForm from '@/components/InterestForm'

export default function EverestInterest() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-4 animate-fade-in">
          EVEREST ROBOTICS
        </h1>
        <p className="text-xl text-accent-purple font-medium animate-slide-up">
          FTC TEAM #31643 | CLIMB HIGHER
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden animate-fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <div className="mb-10 text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                Interested in joining a First Tech Challenge Robotics Team?
                <span className="block mt-2 text-white font-medium">Fill in the form below and we will send you more details.</span>
              </p>
            </div>

            <InterestForm teamName="Everest" tableName="everest_interest_submissions" />
          </div>
        </div>
      </div>
    </div>
  )
}

