'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Custom fetch that intercepts schema cache requests and handles them silently
const customFetch = (url: string, options?: RequestInit) => {
  // Check if this is a schema introspection request
  const isSchemaRequest = url.includes('/rest/v1/') && !url.match(/\/rest\/v1\/[^/]+/) && !url.includes('?')
  
  return fetch(url, options).catch((error) => {
    // Silently handle schema cache errors
    if (isSchemaRequest || error.message?.includes('schema cache')) {
      // Return a mock response for schema requests that fail
      if (isSchemaRequest) {
        return new Response(JSON.stringify({}), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      }
    }
    throw error
  })
}

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
        // Use custom fetch to handle schema cache errors silently
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
                },
                fetch: customFetch
            },
            realtime: {
                params: {
                    eventsPerSecond: 10
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
                
                // Check if error is retryable
                const isRetryable =
                    err.message?.includes('schema cache') ||
                    err.message?.includes('fetch') ||
                    err.message?.includes('network') ||
                    err.message?.includes('ECONNRESET') ||
                    err.message?.includes('ETIMEDOUT') ||
                    err.code === 'PGRST002' || // Schema cache error code
                    err.code === 'ECONNRESET' ||
                    err.code === 'ETIMEDOUT'

                // If it's not a retryable error, return immediately
                if (!isRetryable) {
                    console.error('Non-retryable error in submitSponsorForm:', err)
                    return { success: false, error: err.message || 'Database error' }
                }

                // Log retry attempt
                if (attempts < maxAttempts) {
                    console.warn(`Attempt ${attempts} failed, retrying...`, err.message)
                    // Wait before retrying with exponential backoff
                    await new Promise(resolve => setTimeout(resolve, 500 * attempts))
                } else {
                    console.error(`All ${maxAttempts} attempts failed in submitSponsorForm:`, err)
                }
            }
        }

        return { success: false, error: lastError?.message || 'Database error after retries' }

    } catch (err: any) {
        console.error('Critical error in submitSponsorForm:', err)
        return { success: false, error: err.message || 'Database error' }
    }
}

