'use client'

export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
            {/* Base Gradient - Deep Space Feel */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

            {/* Nebula Effects - Using CSS Gradients to mimic images - Optimized blur */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-accent-blue/20 via-transparent to-transparent rounded-full blur-[80px] animate-pulse-slow" style={{ willChange: 'opacity' }}></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-accent-purple/20 via-transparent to-transparent rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s', willChange: 'opacity' }}></div>
            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-accent-cyan/10 rounded-full blur-[70px] animate-float" style={{ willChange: 'transform' }}></div>

            {/* 3D Floating Triangles - Optimized with will-change */}
            <div className="absolute top-[20%] left-[10%] w-32 h-32 perspective-1000 opacity-10 animate-float" style={{ willChange: 'transform' }}>
                <div className="tetrahedron" style={{ animationDuration: '30s', willChange: 'transform' }}>
                    <div className="tetrahedron-face tetrahedron-face-1"></div>
                    <div className="tetrahedron-face tetrahedron-face-2"></div>
                    <div className="tetrahedron-face tetrahedron-face-3"></div>
                    <div className="tetrahedron-face tetrahedron-face-4"></div>
                </div>
            </div>
            <div className="absolute bottom-[20%] right-[15%] w-24 h-24 perspective-1000 opacity-10 animate-float" style={{ animationDelay: '3s', willChange: 'transform' }}>
                <div className="tetrahedron" style={{ animationDuration: '25s', animationDirection: 'reverse', willChange: 'transform' }}>
                    <div className="tetrahedron-face tetrahedron-face-1"></div>
                    <div className="tetrahedron-face tetrahedron-face-2"></div>
                    <div className="tetrahedron-face tetrahedron-face-3"></div>
                    <div className="tetrahedron-face tetrahedron-face-4"></div>
                </div>
            </div>

            {/* Wireframe Mountain Landscape - Simplified for performance */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh] opacity-15 pointer-events-none" style={{ willChange: 'opacity' }}>
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.08) 100%)`,
                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                        transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2)',
                        transformOrigin: 'bottom center',
                        willChange: 'transform',
                    }}
                ></div>
                {/* Mountain Silhouette - Simplified */}
                <div
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, transparent, #020617)',
                        willChange: 'opacity',
                    }}
                ></div>
            </div>

            {/* Digital Snow / Particles - Reduced for performance */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/10 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            animationDuration: `${Math.random() * 10 + 15}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.3 + 0.1,
                            willChange: 'transform, opacity',
                        }}
                    ></div>
                ))}
            </div>

            {/* Grid Pattern with Perspective - Optimized */}
            <div
                className="absolute inset-0 opacity-15"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)',
                    willChange: 'transform',
                }}
            ></div>

            {/* Stars Pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                opacity: 0.1
            }}></div>
            <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                backgroundSize: '100px 100px',
                backgroundPosition: '25px 25px',
                opacity: 0.05
            }}></div>

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
        </div>
    )
}
