'use client'

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

          <div className="relative z-10 text-center">
            <div className="mb-10">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                Submission Closed
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Thank you for your interest in joining Everest Robotics. Submissions are currently closed. 
                Please check back later for future opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

