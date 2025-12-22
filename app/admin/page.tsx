'use client'

import { useState, useEffect } from 'react'
import AdminTable from '@/components/AdminTable'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Admin password - in production, this should be more secure
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'avalanche2724admin'

    if (password === correctPassword) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_authenticated', 'true')
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10"></div>
        </div>

        <div className="relative z-10 glass p-8 md:p-12 rounded-3xl border border-white/10 max-w-md w-full mx-4 shadow-2xl animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="font-display font-bold text-3xl text-white mb-2">Admin Portal</h1>
            <p className="text-gray-400">Please authenticate to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
                placeholder="Enter access key"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center animate-fade-in">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-accent-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen pb-20">
      {/* Header */}
      <div className="relative pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div>
              <h1 className="font-display font-bold text-4xl text-white mb-2">Admin Dashboard</h1>
              <p className="text-gray-400">Manage submissions and team data</p>
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem('admin_authenticated')
                setIsAuthenticated(false)
              }}
              className="px-6 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50 rounded-xl transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>

          <div className="space-y-12 animate-fade-in">
            {/* Sponsor Submissions */}
            <div className="glass rounded-3xl border border-white/10 overflow-hidden">
              <AdminTable
                title="Sponsor Submissions"
                tableName="sponsor_submissions"
                columns={[
                  { key: 'company_name', label: 'Company Name', editable: true },
                  { key: 'contact_person_name', label: 'Contact Person', editable: true },
                  { key: 'email', label: 'Email', editable: true, type: 'email' },
                  { key: 'phone', label: 'Phone', editable: true },
                  { key: 'sponsorship_level', label: 'Sponsorship Level', editable: true },
                  { key: 'message', label: 'Message', editable: true, type: 'textarea' },
                  { key: 'created_at', label: 'Created At', editable: false },
                ]}
              />
            </div>

            {/* Submission Closed Notice */}
            <div className="glass rounded-3xl border border-white/10 overflow-hidden p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="font-display font-bold text-3xl text-white mb-4">
                Submission Closed
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Interest form submissions for Avalanche and Everest teams are currently closed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
