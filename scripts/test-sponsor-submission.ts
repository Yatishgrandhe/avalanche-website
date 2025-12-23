/**
 * Test script to verify sponsor form submission works
 * Run with: npx tsx scripts/test-sponsor-submission.ts
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

async function testSponsorSubmission() {
    console.log('🧪 Testing Sponsor Form Submission...\n')

    // Check environment variables
    if (!supabaseUrl || !supabaseServiceRoleKey) {
        console.error('❌ Missing environment variables:')
        console.error('  NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅' : '❌')
        console.error('  SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✅' : '❌')
        process.exit(1)
    }

    console.log('✅ Environment variables loaded')
    console.log('  Supabase URL:', supabaseUrl)
    console.log('  Service Role Key:', supabaseServiceRoleKey.substring(0, 20) + '...\n')

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        }
    })

    // Test data
    const testData = {
        company_name: 'TypeScript Test Company',
        contact_person_name: 'Test Person',
        email: `test-${Date.now()}@example.com`,
        phone: '555-999-8888',
        sponsorship_level: 'Platinum',
        message: 'This is a TypeScript test submission'
    }

    console.log('📝 Test Data:')
    console.log(JSON.stringify(testData, null, 2))
    console.log('')

    try {
        console.log('🔄 Attempting insert...')
        
        // Insert data using the same pattern as the server action
        const { data, error } = await supabase
            .from('sponsor_submissions')
            .insert([{
                company_name: testData.company_name.trim(),
                contact_person_name: testData.contact_person_name.trim(),
                email: testData.email.trim(),
                phone: testData.phone?.trim() || null,
                sponsorship_level: testData.sponsorship_level?.trim() || null,
                message: testData.message?.trim() || null
            }])
            .select()

        console.log('📊 Insert Result:')
        console.log('  Has Data:', !!data)
        console.log('  Data Length:', data?.length || 0)
        console.log('  Has Error:', !!error)
        
        if (error) {
            console.log('  Error Code:', error.code)
            console.log('  Error Message:', error.message)
            console.log('  Error Details:', error.details)
            console.log('  Error Hint:', error.hint)
        }

        // Check for data first - if data exists, insert succeeded
        if (data && Array.isArray(data) && data.length > 0) {
            console.log('\n✅ SUCCESS! Insert completed successfully')
            console.log('📦 Returned Data:')
            console.log(JSON.stringify(data[0], null, 2))
            return { success: true, data: data[0] }
        }

        // Handle errors
        if (error) {
            const errorCode = String(error.code || '')
            const errorMessage = String(error.message || '')
            
            console.log('\n❌ ERROR: Insert failed')
            
            if (errorCode === '23505') {
                console.log('  → Duplicate email (expected if running multiple times)')
                return { success: false, error: 'Duplicate email' }
            }
            
            if (errorCode === 'PGRST002' || errorMessage.toLowerCase().includes('schema cache')) {
                console.log('  → Schema cache error detected')
                console.log('  → Verifying insert...')
                
                // Wait and verify
                await new Promise(resolve => setTimeout(resolve, 1000))
                
                const { data: verifyData } = await supabase
                    .from('sponsor_submissions')
                    .select()
                    .eq('email', testData.email)
                    .order('created_at', { ascending: false })
                    .limit(1)
                
                if (verifyData && verifyData.length > 0) {
                    console.log('  ✅ Insert verified - record exists in database')
                    console.log('📦 Verified Data:')
                    console.log(JSON.stringify(verifyData[0], null, 2))
                    return { success: true, data: verifyData[0] }
                }
                
                console.log('  ❌ Insert verification failed - record not found')
                return { success: false, error: 'Schema cache error and verification failed' }
            }
            
            return { success: false, error: errorMessage }
        }

        console.log('\n⚠️  No data and no error - unexpected state')
        return { success: false, error: 'No data returned' }

    } catch (err: any) {
        console.error('\n❌ Unexpected error:', err)
        return { success: false, error: err.message }
    }
}

// Run the test
testSponsorSubmission()
    .then(result => {
        console.log('\n' + '='.repeat(50))
        if (result.success) {
            console.log('✅ TEST PASSED')
        } else {
            console.log('❌ TEST FAILED')
            console.log('Error:', result.error)
        }
        console.log('='.repeat(50))
        process.exit(result.success ? 0 : 1)
    })
    .catch(err => {
        console.error('\n💥 Test crashed:', err)
        process.exit(1)
    })

