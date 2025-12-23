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
        console.error('Sponsor form: Missing database configuration', {
            hasUrl: !!supabaseUrl,
            hasKey: !!supabaseServiceRoleKey
        })
        return { success: false, error: 'Database configuration missing' }
    }

    // Validate required fields first
    if (!formData.company_name?.trim() || !formData.contact_person_name?.trim() || !formData.email?.trim()) {
        return { success: false, error: 'Please fill in all required fields' }
    }

    // Create Supabase client with service role key for server-side operations
    // Service role key bypasses RLS policies
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })

    try {
        // Prepare insert data
        const insertData = {
            company_name: formData.company_name.trim(),
            contact_person_name: formData.contact_person_name.trim(),
            email: formData.email.trim(),
            phone: formData.phone?.trim() || null,
            sponsorship_level: formData.sponsorship_level?.trim() || null,
            message: formData.message?.trim() || null
        }

        console.log('Sponsor form: Starting insert to', supabaseUrl)
        console.log('Sponsor form: Insert data:', JSON.stringify(insertData, null, 2))

        // Insert data - simplest possible pattern
        const { data, error } = await supabase
            .from('sponsor_submissions')
            .insert([insertData])
            .select()

        console.log('Sponsor form: Insert response:', {
            hasData: !!data,
            dataLength: data?.length || 0,
            hasError: !!error,
            errorCode: error?.code,
            errorMessage: error?.message
        })

        // ALWAYS check data first - if we have data, insert succeeded
        if (data && Array.isArray(data) && data.length > 0) {
            console.log('Sponsor form: SUCCESS - data returned:', data[0])
            return { success: true, data: data[0] }
        }

        // Only handle errors if we don't have data
        if (error) {
            const errorCode = String(error.code || '')
            const errorMessage = String(error.message || '')
            
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
            
            // For schema cache errors, verify if insert actually succeeded
            if (errorCode === 'PGRST002' || errorMessage.toLowerCase().includes('schema cache')) {
                // Wait and verify
                await new Promise(resolve => setTimeout(resolve, 1000))
                
                const { data: verifyData } = await supabase
                    .from('sponsor_submissions')
                    .select()
                    .eq('email', insertData.email)
                    .order('created_at', { ascending: false })
                    .limit(1)
                
                if (verifyData && verifyData.length > 0) {
                    return { success: true, data: verifyData[0] }
                }
                
                return { success: false, error: 'Unable to submit form at this time. Please try again.' }
            }
            
            return { success: false, error: errorMessage || 'Database error occurred. Please try again.' }
        }

        // No data and no error
        return { success: false, error: 'No data returned from database. Please try again.' }

    } catch (err: any) {
        // Catch any unexpected errors
        console.error('Sponsor form unexpected error:', err)
        return { success: false, error: 'An unexpected error occurred. Please try again.' }
    }
}

