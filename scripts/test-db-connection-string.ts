import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import path from 'path'
import { Client } from 'pg'

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

// Try the Pooler URL (port 6543)
const pgUrl = process.env.POSTGRES_URL

console.log('Testing PG connection to:', pgUrl)

const client = new Client({
  connectionString: pgUrl,
  ssl: { rejectUnauthorized: false }
})

async function testPg() {
  try {
    await client.connect()
    console.log('Connected to Postgres via Pooler!')
    const res = await client.query('SELECT NOW()')
    console.log('Time:', res.rows[0])

    // Also try to query tables
    const tables = await client.query("SELECT * FROM sponsor_submissions LIMIT 1")
    console.log('Sponsor Submissions:', tables.rows)

    await client.end()
  } catch (err) {
    console.error('PG Connect Error:', err)
  }
}

testPg()
