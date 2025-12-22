'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Create Supabase admin client with service role key for server-side operations
// This bypasses RLS and avoids schema cache issues
const supabaseAdmin = supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
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
    : null

export async function submitSponsorForm(formData: {
    company_name: string
    contact_person_name: string
    email: string
    phone?: string
    sponsorship_level?: string
    message?: string
}) {
    try {
        if (!supabaseAdmin) {
            return { success: false, error: 'Database configuration missing' }
        }

        // Use service role key to bypass RLS and avoid schema cache issues
        const { data, error } = await supabaseAdmin
            .from('sponsor_submissions')
            .insert([formData])
            .select()

        if (error) {
            console.error('Supabase error in submitSponsorForm:', error)
            return { success: false, error: error.message || 'Database error' }
        }

        return { success: true, data }
    } catch (err: any) {
        console.error('Error in submitSponsorForm:', err)
        return { success: false, error: err.message || 'Database error' }
    }
}

