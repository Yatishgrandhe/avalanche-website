export interface SponsorSubmission {
  id?: string
  company_name: string
  contact_person_name: string
  email: string
  phone?: string
  sponsorship_level?: string
  message?: string
  created_at?: string
}

export interface InterestSubmission {
  id?: string
  student_first_name: string
  student_last_name: string
  age: number
  school_2025_2026: string
  student_email: string
  grade_level_2025_2026: string
  student_phone?: string
  parent_name: string
  parent_email: string
  parent_phone: string
  positions_interested: string[]
  how_did_you_know: string
  questions?: string
  created_at?: string
}

