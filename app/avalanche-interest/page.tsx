'use client'

import React from 'react'
import Image from 'next/image'

export default function AvalancheInterest() {
  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-20 pb-16 text-center">
        <h1 className="font-display font-bold text-5xl md:text-6xl text-slate-900 mb-4 animate-fade-in">
          AVALANCHE ROBOTICS
        </h1>
        <p className="text-xl text-accent-blue font-medium animate-slide-up">
          FRC TEAM 2724 | JOIN THE LEGACY
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Info Card */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden animate-fade-in mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px]"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-6">About Our Team</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Avalanche Robotics (FRC Team 2724) is a community-based robotics team located in Charlotte, NC.
                We are dedicated to inspiring students in STEM through the FIRST Robotics Competition.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our team builds competitive robots, fosters leadership skills, and creates a supportive family environment
                where every member can thrive.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">Membership Status</h3>
                <p className="text-green-600 font-medium">
                  We are always looking for new sponsors and mentors! Student applications typically open in the Spring.
                </p>
              </div>
            </div>

            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <Image
                src="/images/frosbyte-robot.jpg"
                alt="Frosbyte - Avalanche Robotics Competition Robot"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-bold text-xl">Frosbyte - 2025 Competition Robot</p>
                <p className="text-white/80 text-sm mt-1">FIRST Reefscape Season</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery / More Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-6 text-accent-blue">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Build</h3>
            <p className="text-slate-600">Design and manufacture industrial-grade robots using CAD and machining tools.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-accent-purple/10 rounded-xl flex items-center justify-center mb-6 text-accent-purple">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Code</h3>
            <p className="text-slate-600">Program complex autonomous routines and control systems using Java.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-accent-cyan/10 rounded-xl flex items-center justify-center mb-6 text-accent-cyan">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">Connect</h3>
            <p className="text-slate-600">Present to judges, manage team brand, and impact the community.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
