'use server'

import { Pool } from 'pg'

const connectionString = process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
})

// Whitelist allowed tables to prevent SQL injection
const ALLOWED_TABLES = [
    'sponsor_submissions',
    'avalanche_interest_submissions',
    'everest_interest_submissions'
]

function validateTable(tableName: string) {
    if (!ALLOWED_TABLES.includes(tableName)) {
        throw new Error(`Invalid table name: ${tableName}`)
    }
}

export async function getAdminData(tableName: string) {
    try {
        validateTable(tableName)

        if (!connectionString) {
            return { success: false, error: 'Database configuration missing' }
        }

        const client = await pool.connect()
        try {
            const query = `SELECT * FROM "${tableName}" ORDER BY created_at DESC`
            const result = await client.query(query)
            return { success: true, data: result.rows }
        } finally {
            client.release()
        }
    } catch (err: any) {
        console.error('Database error in getAdminData:', err)
        return { success: false, error: err.message || 'Database error' }
    }
}

export async function updateAdminData(tableName: string, rowId: string, columnKey: string, value: any) {
    try {
        validateTable(tableName)

        // Basic hygiene check for column key (alphanumeric + underscore)
        if (!/^[a-zA-Z0-9_]+$/.test(columnKey)) {
            return { success: false, error: 'Invalid column name' }
        }

        if (!connectionString) {
            return { success: false, error: 'Database configuration missing' }
        }

        const client = await pool.connect()
        try {
            const query = `UPDATE "${tableName}" SET "${columnKey}" = $1 WHERE id = $2`
            await client.query(query, [value, rowId])
            return { success: true }
        } finally {
            client.release()
        }
    } catch (err: any) {
        console.error('Database error in updateAdminData:', err)
        return { success: false, error: err.message || 'Database error' }
    }
}
