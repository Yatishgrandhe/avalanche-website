import { Client } from 'pg'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const originalUrl = process.env.POSTGRES_URL || ''

async function testConstruct() {
    console.log('Testing broken-down config...')
    // Manually parse the URL to avoid connectionString parsing issues invalidating the ssl config
    // URL: postgres://user:pass@host:port/db?...
    
    // We will just use the parts we know
    // Host: aws-1-us-east-1.pooler.supabase.com
    // Port: 6543
    // User: postgres.hqajspawkjdotbwsidsa
    // Pass: 9GwTAx8nkoaGtrxM
    // DB: postgres

    const client = new Client({
        host: 'aws-1-us-east-1.pooler.supabase.com',
        port: 6543,
        user: 'postgres.hqajspawkjdotbwsidsa',
        password: '9GwTAx8nkoaGtrxM',
        database: 'postgres',
        ssl: {
            rejectUnauthorized: false
        }
    })

    try {
        await client.connect()
        console.log('SUCCESS: Broken-down config')
        await client.end()
    } catch (err: any) {
        console.log('FAILED: Broken-down config', err.message)
    }
}

testConstruct()
