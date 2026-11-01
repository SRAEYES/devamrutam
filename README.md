# DEVAMRUTAM (देवामृतम्)
### Timeless Wisdom. Devotional Living.

DEVAMRUTAM is a modern spiritual learning and cultural initiative dedicated to making India's timeless spiritual wisdom accessible to children, families, and the next generation.

---

## 🌟 Brand Architecture

DEVAMRUTAM is the parent umbrella brand comprising three distinct business divisions and one founder creator identity:

1. **DEVAMRUTAM GURUKULAM** — Structured online spiritual education for children (Sanskrit shlokas, Ashtakas, Stotras, Bhagavad Gita, and Bhagavatam stories).
2. **DEVAMRUTAM SANNIDHYAM** — Devotional community, festival celebrations (Karthika Deepam, Janmashtami), workshops, webinars, and cultural activities.
3. **DEVAMRUTAM BHĀṆḌĀRAM** — Curated devotional products, Bhakti Packs, Tulasi japa malas, sacred scripture books, and festival gifting.
4. **SOFTWARE PRABHUJI** — The founder's digital media and content creator identity on YouTube (offering explanations of the Bhagavad Gita and shlokas in Telugu, English, and Hindi).

---

## 🎨 Visual Identity & Design System

The brand adheres to a **Minimal Luxury + Modern Gurukulam** aesthetic:

- **Primary Forest Green**: `#173D32`
- **Deep Forest**: `#102D25`
- **Antique Gold**: `#B68A42`
- **Soft Gold**: `#D8BC83`
- **Warm Ivory**: `#F5EBD9`
- **Background Cream**: `#FAF8F2`
- **Pure White**: `#FFFFFF`
- **Temple Maroon**: `#722D32`
- **Body Text**: `#373A35`
- **Muted Text**: `#77756D`
- **Border Tone**: `#E7DFD0`

Typography leverages:
- Headings & Wordmark: **Cormorant Garamond**
- UI & Body Text: **Inter**
- Sanskrit Script: **Noto Serif Devanagari**
- Telugu Script: **Noto Sans Telugu**

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database (Optional/Plug-and-play)**: Supabase PostgreSQL (with Row Level Security)
- **Email Service (Optional/Plug-and-play)**: Resend transactional email API
- **Hosting**: Vercel ready

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ (tested on Node v24)
- npm 9+ (tested on npm v11)

### 2. Installation
```bash
git clone https://github.com/<your-username>/devamrutam.git
cd devamrutam
npm install
```

### 3. Environment Configuration
Copy the provided `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure your credentials as needed:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase (Optional for initial launch)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend Email (Optional for initial launch)
RESEND_API_KEY=re_your_api_key
ADMIN_EMAIL=admin@devamrutam.com
CONTACT_EMAIL=contact@devamrutam.com
```
*Note: If database or email credentials are not supplied, the platform runs in graceful development mode, logging submissions safely to the server console without crashing.*

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Architecture

```
devamrutam/
├── public/
│   ├── images/
│   │   ├── brand/
│   │   ├── founder/           # Place official founder photograph here
│   │   ├── certificates/      # Place original certificate document scans here
│   │   ├── courses/
│   │   ├── community/
│   │   └── products/
│   └── favicon/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout with font loaders and SEO metadata
│   │   ├── page.tsx           # Complete 10-section Homepage
│   │   ├── globals.css        # Tailwind v4 token system and brand styles
│   │   ├── not-found.tsx      # Branded custom 404 page
│   │   ├── sitemap.ts         # Automated dynamic XML sitemap
│   │   ├── robots.ts          # Automated robots.txt rules
│   │   ├── learn/
│   │   │   ├── page.tsx       # Gurukulam course catalogue
│   │   │   └── [slug]/page.tsx# Individual course curriculum & FAQ pages
│   │   ├── community/
│   │   │   ├── page.tsx       # Sannidhyam community landing page
│   │   │   ├── events/page.tsx# Festival and competition directory
│   │   │   └── workshops/page.tsx # Workshop & webinar listings
│   │   ├── store/
│   │   │   ├── page.tsx       # Bhāṇḍāram showcase catalogue
│   │   │   └── [slug]/page.tsx# Product detail showcase
│   │   ├── about/page.tsx     # Mission, vision, founder story & certificate modal
│   │   ├── contact/page.tsx   # Multi-category contact page
│   │   ├── parent-enquiry/page.tsx # Dedicated parent admissions form
│   │   ├── privacy-policy/page.tsx # Child privacy & data policy
│   │   ├── terms/page.tsx     # Terms of service
│   │   ├── refund-policy/page.tsx  # Refund framework placeholder
│   │   ├── shipping-policy/page.tsx# Shipping guidelines placeholder
│   │   └── api/
│   │       ├── enquiries/route.ts  # Server-side parent enquiry handler
│   │       └── contact/route.ts    # Server-side contact handler
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, Mobile Navigation
│   │   ├── forms/             # ParentEnquiryForm, ContactForm
│   │   └── founder/           # CertificateModal (Lightbox viewer)
│   ├── config/
│   │   ├── site.ts            # Centralised URLs, founder bio, contact email
│   │   ├── brand.ts           # Brand strings and color palette definitions
│   │   └── social.ts          # Social media handles and Software Prabhuji links
│   ├── data/
│   │   ├── courses.ts         # Centralised structured courses & statuses
│   │   ├── events.ts          # Centralised structured community events
│   │   ├── products.ts        # Centralised structured product offerings
│   │   ├── certificates.ts    # Founder learning milestones & credentials
│   │   └── navigation.ts      # Header and footer navigation links
│   ├── lib/
│   │   ├── email/             # Resend email templates & dispatch logic
│   │   ├── supabase/          # Server-side Supabase client
│   │   ├── validation/        # Zod schemas for enquiries & contact
│   │   └── utils/             # Helper utilities (cn, formatting, slugs)
│   └── types/                 # TypeScript interfaces for all data models
├── supabase/
│   └── migrations/            # SQL migration with RLS policies
├── .env.example
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Content Management Guide

All frequently updated content is decoupled into TypeScript data modules:

- **Add or edit courses**: Update `src/data/courses.ts`.
- **Change course status**: Toggle between `'enquiry-open'`, `'enrolling-soon'`, and `'coming-soon'`.
- **Add or schedule community events**: Update `src/data/events.ts`.
- **Update store products**: Update `src/data/products.ts`.
- **Update phone, email, or social URLs**: Update `src/config/site.ts`.

---

## 🔒 Security & Child Privacy Considerations

- Primary contact is strictly maintained with the parent/guardian.
- No child accounts or passwords are created in Version 1.
- No direct telephone numbers or email addresses of children are requested.
- Server-side route handlers enforce strict Zod schema validation and anti-spam measures.
- Database access uses Row Level Security (RLS) preventing anonymous public reading or manipulation of sensitive parent records.

---

## 🚀 Deployment to Vercel

1. Push the code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial DEVAMRUTAM website implementation"
   git push origin main
   ```
2. In the Vercel Dashboard, select **Add New Project** and import the `devamrutam` repository.
3. Next.js App Router defaults will be automatically detected:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
4. Add environment variables from `.env.example` in the Vercel project settings.
5. Deploy.
