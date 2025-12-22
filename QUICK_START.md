# Quick Start Guide

## ✅ Setup Complete!

Your Avalanche Robotics website is now fully configured with:

- **Next.js 15.5.6** (Latest version)
- **React 19** (Latest version)
- **TypeScript 5.7.2**
- **Tailwind CSS 3.4.17**
- **Supabase Integration**

## 🚀 Running the Website

### Development Mode
```bash
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 📋 Environment Variables

Make sure your `.env.local` file contains:
```
NEXT_PUBLIC_SUPABASE_URL=https://hqajspawkjdotbwsidsa.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🔐 Admin Access

- **URL**: `/admin`
- **Password**: `avalanche2724admin`

## 📁 Project Structure

```
app/
  ├── page.tsx                    # Homepage
  ├── about/                      # About Us
  ├── team-development/           # Team Development
  ├── student-opportunities/     # Student Opportunities
  ├── sponsors/                  # Sponsors + Form
  ├── scouting/                  # Scouting
  ├── avalanche-interest/        # Avalanche Interest Form
  ├── everest-interest/          # Everest Interest Form
  └── admin/                     # Admin Dashboard

components/
  ├── Navigation.tsx
  ├── Footer.tsx
  ├── Timeline.tsx
  ├── SponsorForm.tsx
  ├── InterestForm.tsx
  └── AdminTable.tsx

lib/
  ├── supabase.ts               # Supabase client
  └── types.ts                  # TypeScript types
```

## ✨ Features

- ✅ All pages implemented
- ✅ Three forms integrated with Supabase
- ✅ Admin dashboard with inline editing
- ✅ Responsive design
- ✅ Social media links
- ✅ All logos integrated
- ✅ Production-ready build

## 🎨 Styling

- Professional business design
- Purple/blue color scheme
- Inter font family
- Smooth animations
- Mobile-responsive

## 📝 Next Steps

1. **Test the forms**: Submit test data through each form
2. **Check admin dashboard**: Login and verify you can see/edit submissions
3. **Customize content**: Update any text or images as needed
4. **Deploy**: Ready for deployment to Vercel, Netlify, or your preferred platform

## 🐛 Troubleshooting

If you encounter issues:

1. **Build errors**: Make sure `.env.local` has all required variables
2. **Supabase connection**: Verify your credentials are correct
3. **Admin access**: Password is hardcoded as `avalanche2724admin`

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

