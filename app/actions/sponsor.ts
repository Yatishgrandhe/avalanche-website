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

        // Insert data - try insert first without select to avoid schema cache issues
        const insertResult = await supabase
            .from('sponsor_submissions')
            .insert([insertData])

        console.log('Sponsor form: Insert result (without select):', {
            hasError: !!insertResult.error,
            errorCode: insertResult.error?.code,
            errorMessage: insertResult.error?.message
        })

        // If insert failed, handle the error
        if (insertResult.error) {
            const errorCode = String(insertResult.error.code || '')
            const errorMessage = String(insertResult.error.message || '')
            
            console.error('Sponsor form insert error:', {
                code: errorCode,
                message: errorMessage,
                details: insertResult.error.details || '',
                hint: insertResult.error.hint || ''
            })
            
            // Handle specific PostgreSQL error codes
            if (errorCode === '23505') {
                return { success: false, error: 'This email has already been submitted. Please use a different email.' }
            }
            
            if (errorCode === '23502') {
                return { success: false, error: 'Please fill in all required fields' }
            }
            
            return { success: false, error: errorMessage || 'Database error occurred. Please try again.' }
        }

        // Insert succeeded! Now try to get the data back
        // If select fails, we still consider it a success since insert worked
        const { data, error: selectError } = await supabase
            .from('sponsor_submissions')
            .select()
            .eq('email', insertData.email)
            .order('created_at', { ascending: false })
            .limit(1)

        console.log('Sponsor form: Select result:', {
            hasData: !!data,
            dataLength: data?.length || 0,
            hasError: !!selectError,
            errorCode: selectError?.code,
            errorMessage: selectError?.message
        })

        // If we have data, return it
        if (data && Array.isArray(data) && data.length > 0) {
            console.log('Sponsor form: SUCCESS - data returned:', data[0])
            return { success: true, data: data[0] }
        }

        // Insert succeeded but select failed - still return success since insert worked
        // This handles schema cache errors gracefully
        if (selectError) {
            const selectErrorCode = String(selectError.code || '')
            console.warn('Sponsor form: Insert succeeded but select failed:', selectErrorCode, selectError.message)
        }
        
        // Return success even if select failed - the insert succeeded
        console.log('Sponsor form: SUCCESS - insert succeeded (select may have failed due to schema cache)')
        return { success: true, data: { ...insertData, id: 'pending', created_at: new Date().toISOString() } }

    } catch (err: any) {
        // Catch any unexpected errors
        console.error('Sponsor form unexpected error:', err)
        return { success: false, error: 'An unexpected error occurred. Please try again.' }
    }
}

