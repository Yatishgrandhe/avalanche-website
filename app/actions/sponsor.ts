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
        return { success: false, error: 'Database configuration missing' }
    }

    // Create Supabase client with service role key for server-side operations
    // Based on Supabase documentation: https://supabase.com/docs/reference/javascript/insert
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })

    // Insert data following Supabase best practices
    // Pattern from: https://supabase.com/docs/reference/javascript/insert
    const { data, error } = await supabase
        .from('sponsor_submissions')
        .insert([{
            company_name: formData.company_name.trim(),
            contact_person_name: formData.contact_person_name.trim(),
            email: formData.email.trim(),
            phone: formData.phone?.trim() || null,
            sponsorship_level: formData.sponsorship_level?.trim() || null,
            message: formData.message?.trim() || null
        }])
        .select()

    // If we have data, the insert succeeded regardless of any warnings
    if (data && data.length > 0) {
        return { success: true, data: data[0] }
    }

    // Only return error if there's no data AND there's a real error
    // Schema cache errors (PGRST002) are warnings and don't prevent inserts
    if (error) {
        const errorCode = error.code || ''
        const errorMessage = error.message || ''
        
        // Schema cache errors are non-critical - if we have data, ignore the error
        if (errorCode === 'PGRST002' || errorMessage.toLowerCase().includes('schema cache')) {
            // Schema cache warnings shouldn't prevent inserts
            // If we got here without data, it's likely a real issue
            return { success: false, error: 'Unable to submit form at this time. Please try again.' }
        }
        
        // Real database error
        return { success: false, error: errorMessage || 'Database error occurred' }
    }

    // No data and no error - shouldn't happen, but handle it
    return { success: false, error: 'No data returned from database' }
}

