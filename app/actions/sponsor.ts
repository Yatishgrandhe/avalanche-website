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
            console.error('Database configuration missing')
            return { success: false, error: 'Database configuration missing' }
        }

        // Create Supabase admin client with service role key for server-side operations
        // Initialize inside function to ensure fresh instance and avoid module-level state issues
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

        // Retry logic for robustness
        let attempts = 0
        const maxAttempts = 3
        let lastError: any

        while (attempts < maxAttempts) {
            try {
                // Use service role key to bypass RLS
                const { data, error } = await supabase
                    .from('sponsor_submissions')
                    .insert([formData])
                    .select()

                if (error) {
                    throw error
                }

                return { success: true, data }
            } catch (err: any) {
                lastError = err
                attempts++
                console.warn(`Attempt ${attempts} failed:`, err.message)

                // If it's not a schema cache or connection error, mostly likely a validation error, so don't retry
                const isRetryable =
                    err.message?.includes('schema cache') ||
                    err.message?.includes('fetch') ||
                    err.message?.includes('network') ||
                    err.code === 'PGRST002' // Schema cache error code

                if (!isRetryable) {
                    break
                }

                // Wait briefly before retrying
                if (attempts < maxAttempts) {
                    await new Promise(resolve => setTimeout(resolve, 500 * attempts))
                }
            }
        }

        console.error('All attempts failed in submitSponsorForm:', lastError)
        return { success: false, error: lastError?.message || 'Database error after retries' }

    } catch (err: any) {
        console.error('Critical error in submitSponsorForm:', err)
        return { success: false, error: err.message || 'Database error' }
    }
}

