import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Client-side Supabase client
export const supabase = typeof window !== 'undefined' 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Server-side client with service role key (only available on server)
export const supabaseAdmin = typeof window === 'undefined' && supabaseServiceRoleKey
  ? createClient(supabaseUrl, supabaseServiceRoleKey)
  : null

