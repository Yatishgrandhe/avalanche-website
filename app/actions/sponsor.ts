'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export async function submitSponsorForm(formData: {
    company_name: string
    contact_person_name: string
    email: string
    phone?: string
    sponsorship_level?: string
    message?: string
}) {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        console.error('Sponsor form: Missing database configuration')
        return { success: false, error: 'Database configuration missing' }
    }

    // Validate required fields first
    if (!formData.company_name?.trim() || !formData.contact_person_name?.trim() || !formData.email?.trim()) {
        return { success: false, error: 'Please fill in all required fields' }
    }

    // Create Supabase client with service role key for server-side operations
    // Service role key bypasses RLS policies
    // Following the pattern from Avavanchescoutingwebsite/lib/supabase.ts
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        },
        global: {
            headers: {
                'X-Client-Info': 'avalanche-sponsor-form'
            }
        }
    })

    try {
        // Prepare insert data - matching the pattern from Avavanchescoutingwebsite
        const insertData = {
            company_name: formData.company_name.trim(),
            contact_person_name: formData.contact_person_name.trim(),
            email: formData.email.trim(),
            phone: formData.phone?.trim() || null,
            sponsorship_level: formData.sponsorship_level?.trim() || null,
            message: formData.message?.trim() || null
        }

        // Insert data using the exact pattern from Avavanchescoutingwebsite/lib/supabase.ts
        // Using .single() to get a single object back instead of an array
        const { data, error } = await supabase
            .from('sponsor_submissions')
            .insert([insertData])
            .select()
            .single()

        // If error, handle it
        if (error) {
            const errorCode = String(error.code || '')
            const errorMessage = String(error.message || '')
            
            // Log full error details for debugging
            console.error('Sponsor form insert error:', {
                code: errorCode,
                message: errorMessage,
                details: error.details || '',
                hint: error.hint || ''
            })
            
            // Handle specific PostgreSQL error codes
            if (errorCode === '23505') {
                return { success: false, error: 'This email has already been submitted. Please use a different email.' }
            }
            
            if (errorCode === '23502') {
                return { success: false, error: 'Please fill in all required fields' }
            }
            
            // Schema cache errors - return user-friendly message
            if (errorCode === 'PGRST002' || errorMessage.toLowerCase().includes('schema cache')) {
                return { success: false, error: 'Unable to submit form at this time. Please try again.' }
            }
            
            // Return the error message
            return { success: false, error: errorMessage || 'Database error occurred. Please try again.' }
        }

        // Success - data is returned as a single object (not array) because of .single()
        if (data) {
            return { success: true, data }
        }

        // No data returned - shouldn't happen
        console.error('Sponsor form: No data returned')
        return { success: false, error: 'No data returned from database. Please try again.' }

    } catch (err: any) {
        // Catch any unexpected errors
        console.error('Sponsor form unexpected error:', err)
        return { success: false, error: 'An unexpected error occurred. Please try again.' }
    }
}

