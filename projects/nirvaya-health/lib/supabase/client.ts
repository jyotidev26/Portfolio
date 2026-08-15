import { createClient } from '@supabase/supabase-js';
import { MOCK_DOCTORS, MOCK_SERVICES, MOCK_SLOTS, MOCK_TESTIMONIALS } from '../mockData';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock-nirvaya.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function fetchDoctors() {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { data, error } = await supabase.from('doctors').select('*');
      if (!error && data && data.length > 0) return data;
    }
  } catch (e) {
    console.warn('Using fallback mock doctors data');
  }
  return MOCK_DOCTORS;
}

export async function fetchServices() {
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { data, error } = await supabase.from('services').select('*');
      if (!error && data && data.length > 0) return data;
    }
  } catch (e) {
    console.warn('Using fallback mock services data');
  }
  return MOCK_SERVICES;
}

export async function fetchAvailableSlots(doctorId: string) {
  return MOCK_SLOTS.filter(s => s.doctor_id === doctorId && s.is_available);
}
