# 🏥 Nirvaya Health ("Care You Can Trust")
**Production-Ready Healthcare & Clinic Web Application**  
**Developed by:** Jyoti Prakash Chakma (Zend Certified PHP & Web Engineer)  
**Live Application Demo:** [https://jyotidev26.github.io/Portfolio/projects/nirvaya-health/index.html](https://jyotidev26.github.io/Portfolio/projects/nirvaya-health/index.html)

---

## 📌 Project Overview
**Nirvaya Health** is a modern multi-specialty medical center web application for Dhaka, Bangladesh, offering dual-language support (English & Bengali), doctor browsing, online appointment booking, and ready-to-wire bKash & Nagad MFS payment gateway stubs.

---

## 🔥 Key Specifications & Features
- **Framework:** Next.js 14 (App Router, TypeScript, React 18).
- **Styling:** Tailwind CSS (Deep Teal `#0F766E`, Sky Blue `#38BDF8`, Off-white `#FAFAF9`, Emergency Red `#DC2626`).
- **Database & Auth:** Supabase PostgreSQL Schema (`doctors`, `services`, `appointment_slots`, `appointments`, `testimonials`) with Row Level Security (RLS) policies.
- **Dual-Language i18n:** Live `EN` / `বাং` toggle in sticky header across all 10 pages.
- **5-Step Booking Engine:** Multi-step wizard with Zod validation, +880 Bangladesh phone format validation, slot locking, and bKash / Nagad / Pay at Clinic payment selection.
- **10 Interactive Pages:**
  1. Home Page (`/`)
  2. Doctors Listing Page (`/doctors`)
  3. Doctor Profile Page (`/doctors/[id]`)
  4. Services Listing Page (`/services`)
  5. Service Detail Page (`/services/[slug]`)
  6. Appointment Booking Page (`/book-appointment`)
  7. Patient Dashboard (`/dashboard`)
  8. About Us Page (`/about`)
  9. Contact Page (`/contact`)
  10. Health Journal Blog (`/blog` & `/blog/[slug]`)

---

## ⚙️ Setup & Installation
```bash
# 1. Install Dependencies
npm install

# 2. Run Development Server
npm run dev

# 3. Build Production Bundle
npm run build
```
