-- ============================================================================
-- NIRVAYA HEALTH MEDICAL CENTER - SUPABASE POSTGRESQL DATABASE SCHEMA
-- ============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. DOCTORS TABLE
CREATE TABLE IF NOT EXISTS public.doctors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_en TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  specialty_en TEXT NOT NULL,
  specialty_bn TEXT NOT NULL,
  qualification TEXT NOT NULL,
  bio_en TEXT NOT NULL,
  bio_bn TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  years_experience INT NOT NULL DEFAULT 5,
  rating NUMERIC(2, 1) NOT NULL DEFAULT 4.9,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_en TEXT NOT NULL,
  name_bn TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description_en TEXT NOT NULL,
  description_bn TEXT NOT NULL,
  icon TEXT NOT NULL,
  department TEXT NOT NULL
);

-- 4. APPOINTMENT SLOTS TABLE
CREATE TABLE IF NOT EXISTS public.appointment_slots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  doctor_id UUID REFERENCES public.doctors(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  time TIME NOT NULL,
  is_available BOOLEAN DEFAULT true NOT NULL
);

-- 5. APPOINTMENTS TABLE
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_name TEXT NOT NULL,
  patient_phone TEXT NOT NULL,
  patient_email TEXT NOT NULL,
  patient_age INT NOT NULL,
  doctor_id UUID REFERENCES public.doctors(id) ON DELETE RESTRICT,
  slot_id UUID REFERENCES public.appointment_slots(id) ON DELETE RESTRICT,
  reason TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')) DEFAULT 'pending' NOT NULL,
  payment_status TEXT CHECK (payment_status IN ('unpaid', 'paid', 'pay_at_clinic')) DEFAULT 'pay_at_clinic' NOT NULL,
  payment_method TEXT CHECK (payment_method IN ('bkash', 'nagad', 'pay_at_clinic')) DEFAULT 'pay_at_clinic' NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  patient_name TEXT NOT NULL,
  doctor_id UUID REFERENCES public.doctors(id) ON DELETE SET NULL,
  rating INT CHECK (rating BETWEEN 1 AND 5) NOT NULL DEFAULT 5,
  comment_en TEXT NOT NULL,
  comment_bn TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointment_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Public Read Access Policies
CREATE POLICY "Public Read Doctors" ON public.doctors FOR SELECT USING (true);
CREATE POLICY "Public Read Services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public Read Appointment Slots" ON public.appointment_slots FOR SELECT USING (true);
CREATE POLICY "Public Read Testimonials" ON public.testimonials FOR SELECT USING (true);

-- Appointments RLS: Users can insert guest/auth bookings, view their own appointments
CREATE POLICY "Public Insert Appointments" ON public.appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Users View Own Appointments" ON public.appointments FOR SELECT 
  USING (auth.uid() = user_id OR auth.uid() IS NULL);
