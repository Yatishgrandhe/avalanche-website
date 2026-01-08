'use client'

import React from 'react'
import Image from 'next/image'

export default function EverestInterest() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-900 mb-4 animate-fade-in">
          EVEREST ROBOTICS
        </h1>
        <p className="text-xl text-accent-purple font-medium animate-slide-up">
          FTC TEAM 31643 | CLIMB HIGHER
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Info Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden animate-fade-in mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-6">About Everest</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Everest Robotics (FTC Team 31643) is our sister team, expanding our continuum of programs.
                Focusing on the FIRST Tech Challenge, Everest members develop rigorous engineering skills in a compact, strategic platform.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Just as every climber starts somewhere, Everest provides a foundation for students to iterate quickly,
                experiment with custom designs, and master the fundamentals of robotics competition.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Membership Status</h3>
                <p className="text-green-600 font-medium">
                  Student applications are currently closed. Check back next season!
                </p>
              </div>
            </div>

            <div className="relative h-80 md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-100">
              <Image
                src="/images/everest-robot.png"
                alt="Everest Robotics FTC Robot"
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-bold text-xl">Everest FTC Robot</p>
                <p className="text-white/80 text-sm mt-1">2025-2026 Season</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery / More Info - Updated with purple accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-6 text-accent-purple">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Design</h3>
            <p className="text-slate-600">Create custom mechanisms and 3D printed parts for the 18-inch cube limit.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-6 text-accent-purple">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Java</h3>
            <p className="text-slate-600">Utilize the same Java SDK as FRC, learning real-world object-oriented programming.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-6 text-accent-purple">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Community</h3>
            <p className="text-slate-600">Engage with other teams and professionals in the vibrant NC FTC community.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
