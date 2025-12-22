# Setup Instructions

## Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   The `.env.local` file has been created with the Supabase credentials. Make sure it contains:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Access the Website**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Admin Access

- URL: `/admin`
- Password: `avalanche2724admin`

## Database Tables

The following tables have been created in Supabase:
- `sponsor_submissions` - Sponsor form submissions
- `avalanche_interest_submissions` - Avalanche FRC interest form submissions
- `everest_interest_submissions` - Everest FTC interest form submissions

## Pages

- `/` - Homepage
- `/about` - About Us
- `/team-development` - Team Development
- `/student-opportunities` - Student Opportunities
- `/sponsors` - Sponsors page with form
- `/scouting` - Scouting page
- `/avalanche-interest` - Avalanche interest form
- `/everest-interest` - Everest interest form
- `/admin` - Admin dashboard (password protected)

## Features

✅ All three logos integrated (FIRST, Avalanche, Everest)
✅ All social media links (YouTube, Instagram, Facebook, TikTok, X)
✅ Contact emails displayed
✅ Interest form links in footer
✅ Sponsor form with Supabase integration
✅ Avalanche interest form with Supabase integration
✅ Everest interest form with Supabase integration
✅ Admin dashboard with password protection
✅ Inline editing in admin tables
✅ Auto-save to Supabase
✅ Responsive design
✅ Professional styling with Tailwind CSS

