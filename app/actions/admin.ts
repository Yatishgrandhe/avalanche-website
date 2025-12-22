'use server'

import { supabaseAdmin } from '@/lib/supabase'

export async function getAdminData(tableName: string) {
    if (!supabaseAdmin) {
        throw new Error('Supabase admin client not initialized')
    }

    const { data, error } = await supabaseAdmin
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error(`Error fetching ${tableName}:`, error)
        throw new Error(error.message)
    }

    return data
}

export async function updateAdminData(tableName: string, rowId: string, columnKey: string, value: any) {
    if (!supabaseAdmin) {
        throw new Error('Supabase admin client not initialized')
    }

    const { error } = await supabaseAdmin
        .from(tableName)
        .update({ [columnKey]: value })
        .eq('id', rowId)

    if (error) {
        console.error(`Error updating ${tableName}:`, error)
        throw new Error(error.message)
    }

    return { success: true }
}
