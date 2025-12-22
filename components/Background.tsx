'use client'

export default function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950">
            {/* Base Gradient - Deep Space Feel */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>

            {/* Nebula Effects - Using CSS Gradients to mimic images */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-accent-blue/20 via-transparent to-transparent rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-tl from-accent-purple/20 via-transparent to-transparent rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-accent-cyan/10 rounded-full blur-[100px] animate-float"></div>

            {/* 3D Floating Triangles */}
            <div className="absolute top-[20%] left-[10%] w-32 h-32 perspective-1000 opacity-10 animate-float">
                <div className="tetrahedron" style={{ animationDuration: '30s' }}>
                    <div className="tetrahedron-face tetrahedron-face-1"></div>
                    <div className="tetrahedron-face tetrahedron-face-2"></div>
                    <div className="tetrahedron-face tetrahedron-face-3"></div>
                    <div className="tetrahedron-face tetrahedron-face-4"></div>
                </div>
            </div>
            <div className="absolute bottom-[20%] right-[15%] w-24 h-24 perspective-1000 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
                <div className="tetrahedron" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
                    <div className="tetrahedron-face tetrahedron-face-1"></div>
                    <div className="tetrahedron-face tetrahedron-face-2"></div>
                    <div className="tetrahedron-face tetrahedron-face-3"></div>
                    <div className="tetrahedron-face tetrahedron-face-4"></div>
                </div>
            </div>

            {/* Wireframe Mountain Landscape */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh] opacity-20 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `
              linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.1) 100%),
              repeating-linear-gradient(
                90deg,
                transparent 0,
                transparent 49px,
                rgba(59, 130, 246, 0.3) 50px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent 0,
                transparent 49px,
                rgba(139, 92, 246, 0.3) 50px
              )
            `,
                        maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
                        transform: 'perspective(1000px) rotateX(60deg) translateY(100px) scale(2)',
                        transformOrigin: 'bottom center',
                    }}
                ></div>
                {/* Mountain Silhouette */}
                <div
                    className="absolute bottom-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: 'linear-gradient(to bottom, transparent, #020617), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%230f172a\' fill-opacity=\'0.5\' d=\'M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
                    }}
                ></div>
            </div>

            {/* Digital Snow / Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white/10 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5 + 0.1,
                        }}
                    ></div>
                ))}
            </div>

            {/* Grid Pattern with Perspective */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
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
