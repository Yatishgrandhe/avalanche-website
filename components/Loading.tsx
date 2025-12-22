'use client'

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin"></div>
                <div className="mt-4 text-accent-blue font-display font-bold text-xl animate-pulse">
                    LOADING...
                </div>
            </div>
        </div>
    )
}
