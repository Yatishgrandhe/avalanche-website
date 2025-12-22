'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { InterestSubmission } from '@/lib/types'

interface InterestFormProps {
  teamName: 'Avalanche' | 'Everest'
  tableName: 'avalanche_interest_submissions' | 'everest_interest_submissions'
}

export default function InterestForm({ teamName, tableName }: InterestFormProps) {
  const [formData, setFormData] = useState<InterestSubmission>({
    student_first_name: '',
    student_last_name: '',
    age: 0,
    school_2025_2026: '',
    student_email: '',
    grade_level_2025_2026: '',
    student_phone: '',
    parent_name: '',
    parent_email: '',
    parent_phone: '',
    positions_interested: [],
    how_did_you_know: '',
    questions: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const positions = ['Mechanical', 'Programming', 'CAD', 'Marketing/Business']

  const handlePositionChange = (position: string) => {
    setFormData((prev) => ({
      ...prev,
      positions_interested: prev.positions_interested.includes(position)
        ? prev.positions_interested.filter((p) => p !== position)
        : [...prev.positions_interested, position],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      if (!supabase) {
        throw new Error('Supabase client not initialized')
      }
      const { error } = await supabase.from(tableName).insert([formData])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        student_first_name: '',
        student_last_name: '',
        age: 0,
        school_2025_2026: '',
        student_email: '',
        grade_level_2025_2026: '',
        student_phone: '',
        parent_name: '',
        parent_email: '',
        parent_phone: '',
        positions_interested: [],
        how_did_you_know: '',
        questions: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Student Information Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-accent-blue border-b border-white/10 pb-2">Student Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="student_first_name" className="block text-sm font-medium text-gray-300 mb-2">
              First Name <span className="text-accent-blue">*</span>
            </label>
            <input
              type="text"
              id="student_first_name"
              required
              value={formData.student_first_name}
              onChange={(e) => setFormData({ ...formData, student_first_name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="student_last_name" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name <span className="text-accent-blue">*</span>
            </label>
            <input
              type="text"
              id="student_last_name"
              required
              value={formData.student_last_name}
              onChange={(e) => setFormData({ ...formData, student_last_name: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-2">
              Age <span className="text-accent-blue">*</span>
            </label>
            <input
              type="number"
              id="age"
              required
              min="1"
              value={formData.age || ''}
              onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="grade_level_2025_2026" className="block text-sm font-medium text-gray-300 mb-2">
              2025-2026 Grade Level <span className="text-accent-blue">*</span>
            </label>
            <input
              type="text"
              id="grade_level_2025_2026"
              required
              value={formData.grade_level_2025_2026}
              onChange={(e) => setFormData({ ...formData, grade_level_2025_2026: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div>
          <label htmlFor="school_2025_2026" className="block text-sm font-medium text-gray-300 mb-2">
            School for 2025-2026 <span className="text-accent-blue">*</span>
          </label>
          <input
            type="text"
            id="school_2025_2026"
            required
            value={formData.school_2025_2026}
            onChange={(e) => setFormData({ ...formData, school_2025_2026: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="student_email" className="block text-sm font-medium text-gray-300 mb-2">
              Student Email (Personal) <span className="text-accent-blue">*</span>
            </label>
            <input
              type="email"
              id="student_email"
              required
              value={formData.student_email}
              onChange={(e) => setFormData({ ...formData, student_email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="student_phone" className="block text-sm font-medium text-gray-300 mb-2">
              Student Phone
            </label>
            <input
              type="tel"
              id="student_phone"
              value={formData.student_phone}
              onChange={(e) => setFormData({ ...formData, student_phone: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Parent Information Section */}
      <div className="space-y-6 pt-6">
        <h3 className="text-xl font-bold text-accent-purple border-b border-white/10 pb-2">Parent Information</h3>

        <div>
          <label htmlFor="parent_name" className="block text-sm font-medium text-gray-300 mb-2">
            Parent Name <span className="text-accent-purple">*</span>
          </label>
          <input
            type="text"
            id="parent_name"
            required
            value={formData.parent_name}
            onChange={(e) => setFormData({ ...formData, parent_name: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parent_email" className="block text-sm font-medium text-gray-300 mb-2">
              Parent Email <span className="text-accent-purple">*</span>
            </label>
            <input
              type="email"
              id="parent_email"
              required
              value={formData.parent_email}
              onChange={(e) => setFormData({ ...formData, parent_email: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div>
            <label htmlFor="parent_phone" className="block text-sm font-medium text-gray-300 mb-2">
              Parent Phone <span className="text-accent-purple">*</span>
            </label>
            <input
              type="tel"
              id="parent_phone"
              required
              value={formData.parent_phone}
              onChange={(e) => setFormData({ ...formData, parent_phone: e.target.value })}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple/50 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="space-y-6 pt-6">
        <h3 className="text-xl font-bold text-accent-cyan border-b border-white/10 pb-2">Interests & Additional Info</h3>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-4">
            Which position(s) are you interested in?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {positions.map((position) => (
              <label key={position} className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 ${formData.positions_interested.includes(position)
                  ? 'bg-accent-cyan/20 border-accent-cyan text-white'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                }`}>
                <input
                  type="checkbox"
                  checked={formData.positions_interested.includes(position)}
                  onChange={() => handlePositionChange(position)}
                  className="hidden"
                />
                <span className="font-medium">{position}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="how_did_you_know" className="block text-sm font-medium text-gray-300 mb-2">
            How did you hear about us? <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="text"
            id="how_did_you_know"
            required
            value={formData.how_did_you_know}
            onChange={(e) => setFormData({ ...formData, how_did_you_know: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <label htmlFor="questions" className="block text-sm font-medium text-gray-300 mb-2">
            Do you have any questions for us?
          </label>
          <textarea
            id="questions"
            rows={4}
            value={formData.questions}
            onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-transparent transition-all duration-300 resize-none"
          />
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-6 py-4 rounded-xl animate-fade-in flex items-center">
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Thank you! Your submission has been received. We will contact you soon.
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
        className="w-full bg-accent-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : `Submit ${teamName} Interest Form`}
      </button>
    </form>
  )
}

