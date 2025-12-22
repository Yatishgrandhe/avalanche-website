import { Client } from 'pg'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

async function testDirect() {
    console.log('Testing direct connection (port 5432)...')
    const directUrl = process.env.POSTGRES_URL_NON_POOLING
    
    if (!directUrl) {
        console.log('No direct URL found')
        return
    }

    const client = new Client({
        connectionString: directUrl,
        ssl: {
            rejectUnauthorized: false
        }
    })

    try {
        await client.connect()
        console.log('SUCCESS: Direct connection')
        await client.end()
    } catch (err: any) {
        console.log('FAILED: Direct connection', err.message)
    }
}

testDirect()
