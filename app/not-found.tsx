import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-slate-900/50"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-200 mb-8">Page Not Found</p>
        <Link
          href="/"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

