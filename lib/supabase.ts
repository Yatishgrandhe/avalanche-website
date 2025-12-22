import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Suppress schema cache errors in console (non-critical Supabase introspection errors)
if (typeof window !== 'undefined') {
  const originalError = console.error
  const originalWarn = console.warn
  
  console.error = (...args: any[]) => {
    const message = String(args[0] || '')
    const fullMessage = args.map(arg => String(arg)).join(' ')
    // Suppress schema cache errors - these are non-critical retry attempts from Supabase
    if (message.includes('Could not query the database for the schema cache') || 
        message.includes('schema cache') ||
        fullMessage.includes('Could not query the database for the schema cache') ||
        fullMessage.includes('schema cache') ||
        fullMessage.includes('PGRST002')) {
      return // Don't log this non-critical error
    }
    originalError.apply(console, args)
  }
  
  console.warn = (...args: any[]) => {
    const message = String(args[0] || '')
    const fullMessage = args.map(arg => String(arg)).join(' ')
    // Suppress schema cache warnings as well
    if (message.includes('Could not query the database for the schema cache') || 
        message.includes('schema cache') ||
        fullMessage.includes('Could not query the database for the schema cache') ||
        fullMessage.includes('schema cache') ||
        fullMessage.includes('PGRST002')) {
      return // Don't log this non-critical warning
    }
    originalWarn.apply(console, args)
  }
}

// Client-side Supabase client
export const supabase = typeof window !== 'undefined' 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      db: {
        schema: 'public'
      },
      global: {
        headers: {
          'x-client-info': 'avalanche-client'
        }
      },
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
    })
  : null

// Server-side client with service role key (only available on server)
export const supabaseAdmin = typeof window === 'undefined' && supabaseServiceRoleKey
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
          'x-client-info': 'avalanche-admin'
        }
      }
    })
  : null

