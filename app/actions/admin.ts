'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Create Supabase admin client with service role key for server-side operations
const supabaseAdmin = supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })
    : null

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

        if (!supabaseAdmin) {
            return { success: false, error: 'Database configuration missing' }
        }

        const { data, error } = await supabaseAdmin
            .from(tableName)
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Supabase error in getAdminData:', error)
            return { success: false, error: error.message || 'Database error' }
        }

        return { success: true, data: data || [] }
    } catch (err: any) {
        console.error('Error in getAdminData:', err)
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

        if (!supabaseAdmin) {
            return { success: false, error: 'Database configuration missing' }
        }

        const { error } = await supabaseAdmin
            .from(tableName)
            .update({ [columnKey]: value })
            .eq('id', rowId)

        if (error) {
            console.error('Supabase error in updateAdminData:', error)
            return { success: false, error: error.message || 'Database error' }
        }

        return { success: true }
    } catch (err: any) {
        console.error('Error in updateAdminData:', err)
        return { success: false, error: err.message || 'Database error' }
    }
}
