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
    try {
        if (!supabaseUrl || !supabaseServiceRoleKey) {
            return { success: false, error: 'Database configuration missing' }
        }

        // Create Supabase admin client with service role key for server-side operations
        // Initialize inside function to ensure fresh instance
        const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            },
            db: {
                schema: 'public'
            },
            global: {
                headers: {
                    'x-client-info': 'avalanche-sponsor-form'
                }
            }
        })

        // Direct insert - schema cache errors are non-critical and won't affect this operation
        const { data, error } = await supabase
            .from('sponsor_submissions')
            .insert([{
                company_name: formData.company_name,
                contact_person_name: formData.contact_person_name,
                email: formData.email,
                phone: formData.phone || null,
                sponsorship_level: formData.sponsorship_level || null,
                message: formData.message || null
            }])
            .select()

        if (error) {
            // Only return error if it's a real database error, not schema cache issues
            const errorMessage = error.message || String(error)
            if (errorMessage.includes('schema cache') || error.code === 'PGRST002') {
                // Schema cache errors are non-critical - check if data was actually inserted
                // If we got here, the insert likely failed, so return a user-friendly message
                return { success: false, error: 'Unable to submit form at this time. Please try again.' }
            }
            return { success: false, error: error.message || 'Database error' }
        }

        if (!data || data.length === 0) {
            return { success: false, error: 'No data returned from database' }
        }

        return { success: true, data: data[0] }

    } catch (err: any) {
        // Ignore schema cache errors - they're non-critical
        const errorMessage = err?.message || String(err || '')
        if (errorMessage.includes('schema cache') || err?.code === 'PGRST002') {
            return { success: false, error: 'Unable to submit form at this time. Please try again.' }
        }
        return { success: false, error: err?.message || 'An error occurred while submitting the form' }
    }
}

