import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

console.log('Testing connection to:', supabaseUrl)
console.log('Using Service Role Key:', supabaseServiceRoleKey ? 'YES' : 'NO')

if (!supabaseUrl || !supabaseServiceRoleKey) {
  console.error('Missing env vars')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  }
})

async function test() {
  try {
    console.log('Attempting to fetch sponsor_submissions...')
    const { data, error } = await supabase
      .from('sponsor_submissions')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('Error:', error)
    } else {
      console.log('Success! Data:', data)
    }
  } catch (err) {
    console.error('Exception:', err)
  }
}

test()
