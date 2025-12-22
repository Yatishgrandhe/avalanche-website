'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

function getAdminClient() {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        console.error('Missing Supabase environment variables for admin client')
        return null
    }
    return createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        }
    })
}

export async function getAdminData(tableName: string) {
    try {
        const supabase = getAdminClient()
        if (!supabase) {
            return { success: false, error: 'Server configuration error: Missing environment variables' }
        }

        const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error(`Error fetching ${tableName}:`, error)
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (err) {
        console.error('Unexpected error in getAdminData:', err)
        return { success: false, error: 'An unexpected error occurred' }
    }
}

export async function updateAdminData(tableName: string, rowId: string, columnKey: string, value: any) {
    try {
        const supabase = getAdminClient()
        if (!supabase) {
            return { success: false, error: 'Server configuration error: Missing environment variables' }
        }

        const { error } = await supabase
            .from(tableName)
            .update({ [columnKey]: value })
            .eq('id', rowId)

        if (error) {
            console.error(`Error updating ${tableName}:`, error)
            return { success: false, error: error.message }
        }

        return { success: true }
    } catch (err) {
        console.error('Unexpected error in updateAdminData:', err)
        return { success: false, error: 'An unexpected error occurred' }
    }
}
