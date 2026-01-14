'use client'

import { memo } from 'react'

const Background = memo(function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950" style={{ contain: 'layout style paint' }}>
            {/* Base Gradient - Deep Space Feel */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

            {/* Nebula Effects - Enhanced for dark mode */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-accent-blue/20 via-transparent to-transparent rounded-full blur-[60px] animate-pulse-slow" style={{ willChange: 'opacity', contain: 'layout style paint' }}></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-accent-purple/20 via-transparent to-transparent rounded-full blur-[60px] animate-pulse-slow" style={{ animationDelay: '2s', willChange: 'opacity', contain: 'layout style paint' }}></div>


            {/* Simplified Mountain Landscape */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh] opacity-10 pointer-events-none" style={{ contain: 'layout style paint' }}>
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.05) 100%)`,
                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                    }}
                ></div>
            </div>

            {/* Reduced Particles - White for dark mode */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: 'layout style paint' }}>
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="absolute bg-white/20 rounded-full animate-float"
                        style={{
                            top: `${20 + i * 25}%`,
                            left: `${15 + i * 20}%`,
                            width: '4px',
                            height: '4px',
                            animationDuration: `${15 + i * 5}s`,
                            animationDelay: `${i * 2}s`,
                            willChange: 'transform',
                        }}
                    ></div>
                ))}
            </div>

            {/* Simplified Grid Pattern - Light lines for dark mode */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                    contain: 'layout style paint',
                }}
            ></div>

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
        </div>
    )
})

export default Background
