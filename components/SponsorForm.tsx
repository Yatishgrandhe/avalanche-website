'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { SponsorSubmission } from '@/lib/types'

export default function SponsorForm() {
  const [formData, setFormData] = useState<SponsorSubmission>({
    company_name: '',
    contact_person_name: '',
    email: '',
    phone: '',
    sponsorship_level: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }
      const { error } = await supabase
        .from('sponsor_submissions')
        .insert([formData])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        company_name: '',
        contact_person_name: '',
        email: '',
        phone: '',
        sponsorship_level: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company_name" className="block text-sm font-medium text-gray-300 mb-2">
            Company/Organization Name <span className="text-accent-yellow">*</span>
          </label>
          <input
            type="text"
            id="company_name"
            required
            value={formData.company_name}
            onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-transparent transition-all duration-300"
            placeholder="Enter company name"
          />
        </div>

        <div>
          <label htmlFor="contact_person_name" className="block text-sm font-medium text-gray-300 mb-2">
            Contact Person Name <span className="text-accent-yellow">*</span>
          </label>
          <input
            type="text"
            id="contact_person_name"
            required
            value={formData.contact_person_name}
            onChange={(e) => setFormData({ ...formData, contact_person_name: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-transparent transition-all duration-300"
            placeholder="Enter contact name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email <span className="text-accent-yellow">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-transparent transition-all duration-300"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-transparent transition-all duration-300"
            placeholder="(123) 456-7890"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sponsorship_level" className="block text-sm font-medium text-gray-300 mb-2">
          Interested Sponsorship Level
        </label>
        <select
          id="sponsorship_level"
          value={formData.sponsorship_level}
          onChange={(e) => setFormData({ ...formData, sponsorship_level: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-transparent transition-all duration-300 appearance-none"
        >
          <option value="" className="bg-primary-dark">Select a level...</option>
          <option value="Title" className="bg-primary-dark">Title Sponsor ($5,000+)</option>
          <option value="Platinum" className="bg-primary-dark">Platinum ($2,500+)</option>
          <option value="Gold" className="bg-primary-dark">Gold ($1,000+)</option>
          <option value="Silver" className="bg-primary-dark">Silver ($500+)</option>
          <option value="Bronze" className="bg-primary-dark">Bronze ($250+)</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message/Comments
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-yellow/50 focus:border-transparent transition-all duration-300 resize-none"
          placeholder="How would you like to support us?"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-6 py-4 rounded-xl animate-fade-in flex items-center">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Thank you! Your submission has been received. We&apos;ll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-6 py-4 rounded-xl animate-fade-in flex items-center">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          There was an error submitting your form. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-yellow hover:bg-yellow-400 text-primary-dark font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : 'Submit Sponsorship Inquiry'}
      </button>
    </form>
  )
}

