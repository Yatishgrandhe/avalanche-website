# Avalanche Robotics Website

A modern Next.js website for Avalanche Robotics (FRC 2724) and Everest Robotics (FTC 31643).

## Features

- **Homepage** - Mission statement and RECRUIT/REFINE/RETAIN/REPEAT cycle
- **About Us** - Team information, demographics, and achievements timeline
- **Team Development** - Training, outreach, and robots timeline
- **Student Opportunities** - Service, Scholarship, and Employment information
- **Sponsors** - Sponsor listings and sponsor form
- **Interest Forms** - Separate forms for Avalanche and Everest teams
- **Admin Dashboard** - Password-protected dashboard for managing form submissions

## Technology Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Supabase (Database)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_ADMIN_PASSWORD=your_admin_password
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Access

Access the admin dashboard at `/admin` with the password set in `NEXT_PUBLIC_ADMIN_PASSWORD`.

## Project Structure

```
app/
  ├── page.tsx                 # Homepage
  ├── about/                   # About Us page
  ├── team-development/        # Team Development page
  ├── student-opportunities/   # Student Opportunities page
  ├── sponsors/                # Sponsors page
  ├── scouting/                # Scouting page
  ├── avalanche-interest/      # Avalanche interest form
  ├── everest-interest/        # Everest interest form
  └── admin/                   # Admin dashboard
components/
  ├── Navigation.tsx           # Navigation component
  ├── Footer.tsx              # Footer component
  ├── Timeline.tsx            # Timeline component
  ├── SponsorForm.tsx         # Sponsor form
  ├── InterestForm.tsx       # Interest form
  └── AdminTable.tsx          # Admin table component
lib/
  ├── supabase.ts             # Supabase client
  └── types.ts                # TypeScript types
```

# avalanche-website
