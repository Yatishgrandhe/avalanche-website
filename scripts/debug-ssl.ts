import { Client } from 'pg'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const originalUrl = process.env.POSTGRES_URL || ''
console.log('Original URL:', originalUrl)

// Try stripping sslmode
const strippedUrl = originalUrl.replace(/sslmode=require/g, '')
console.log('Stripped URL:', strippedUrl)

async function test(url: string, label: string) {
  console.log(`\nTesting ${label}...`)
  const client = new Client({
    connectionString: url,
    ssl: {
      rejectUnauthorized: false
    }
  })

  try {
    await client.connect()
    console.log(`SUCCESS: ${label}`)
    await client.end()
  } catch (err: any) {
    console.log(`FAILED: ${label}`, err.message)
  }
}

async function run() {
  await test(originalUrl, 'Original URL with rejectUnauthorized: false')
  await test(strippedUrl, 'Stripped URL with rejectUnauthorized: false')
}

run()
