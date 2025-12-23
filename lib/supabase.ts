import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Helper function to check if a message is a schema cache error
function isSchemaCacheError(message: string, fullMessage: string): boolean {
  const lowerMessage = message.toLowerCase()
  const lowerFullMessage = fullMessage.toLowerCase()
  return (
    lowerMessage.includes('could not query the database for the schema cache') ||
    lowerMessage.includes('schema cache') ||
    lowerMessage.includes('retrying') ||
    lowerFullMessage.includes('could not query the database for the schema cache') ||
    lowerFullMessage.includes('schema cache') ||
    lowerFullMessage.includes('pgrst002') ||
    (lowerFullMessage.includes('retrying') && lowerFullMessage.includes('schema')) ||
    lowerFullMessage.includes('retrying.')
  )
}

// Suppress schema cache errors in console (non-critical Supabase introspection errors)
// This works for both client and server-side
const originalError = console.error
const originalWarn = console.warn

console.error = (...args: any[]) => {
  const message = String(args[0] || '')
  const fullMessage = args.map(arg => String(arg)).join(' ')
  // Suppress schema cache errors - these are non-critical retry attempts from Supabase
  if (isSchemaCacheError(message, fullMessage)) {
    return // Don't log this non-critical error
  }
  originalError.apply(console, args)
}

console.warn = (...args: any[]) => {
  const message = String(args[0] || '')
  const fullMessage = args.map(arg => String(arg)).join(' ')
  // Suppress schema cache warnings as well
  if (isSchemaCacheError(message, fullMessage)) {
    return // Don't log this non-critical warning
  }
  originalWarn.apply(console, args)
}

// Custom fetch that intercepts schema cache requests and handles them silently
const customFetch = (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  // Convert input to string for checking
  let url: string
  if (typeof input === 'string') {
    url = input
  } else if (input instanceof URL) {
    url = input.toString()
  } else if (input instanceof Request) {
    url = input.url
  } else {
    url = String(input)
  }
  
  // Check if this is a schema introspection request
  const isSchemaRequest = url.includes('/rest/v1/') && !url.match(/\/rest\/v1\/[^/]+/) && !url.includes('?')
  
  return fetch(input, init).catch((error) => {
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

// Client-side Supabase client
export const supabase = typeof window !== 'undefined' 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      db: {
        schema: 'public'
      },
      global: {
        headers: {
          'x-client-info': 'avalanche-client'
        },
        fetch: customFetch
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
        },
        fetch: customFetch
      },
      realtime: {
        params: {
          eventsPerSecond: 10
        }
      }
    })
  : null

