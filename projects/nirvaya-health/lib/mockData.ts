export interface Doctor {
  id: string;
  name_en: string;
  name_bn: string;
  specialty_en: string;
  specialty_bn: string;
  qualification: string;
  bio_en: string;
  bio_bn: string;
  photo_url: string;
  years_experience: number;
  rating: number;
  consultation_fee: number;
}

export interface Service {
  id: string;
  name_en: string;
  name_bn: string;
  slug: string;
  description_en: string;
  description_bn: string;
  icon: string;
  department: string;
}

export interface AppointmentSlot {
  id: string;
  doctor_id: string;
  date: string;
  time: string;
  is_available: boolean;
}

export interface Testimonial {
  id: string;
  patient_name: string;
  rating: number;
  comment_en: string;
  comment_bn: string;
  doctor_name?: string;
}

export interface BlogPost {
  slug: string;
  title_en: string;
  title_bn: string;
  summary_en: string;
  summary_bn: string;
  content_en: string;
  content_bn: string;
  author: string;
  date: string;
  category: string;
  read_time: string;
}

export const MOCK_DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name_en: 'Dr. Tariq Rahman',
    name_bn: 'ড. তারিক রহমান',
    specialty_en: 'Cardiology',
    specialty_bn: 'কার্ডিওলজি (হৃদরোগ)',
    qualification: 'MBBS, FCPS (Cardiology), MD (USA)',
    bio_en: 'Senior Interventional Cardiologist with over 16 years of clinical excellence in complex coronary angioplasty and heart care.',
    bio_bn: '১৬ বছরের অভিজ্ঞতাসম্পন্ন চিফ ইন্টারভেনশনাল কার্ডিওগ্রাফার এবং হৃদরোগ বিশেষজ্ঞ।',
    photo_url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
    years_experience: 16,
    rating: 4.9,
    consultation_fee: 1500
  },
  {
    id: 'doc-2',
    name_en: 'Dr. Nusrat Jahan',
    name_bn: 'ড. নুসরাত জাহান',
    specialty_en: 'Dermatology',
    specialty_bn: 'ডার্মাটোলজি (চর্ম ও যৌনরোগ)',
    qualification: 'MBBS, DDV (London), FCPS (Skin & Sex)',
    bio_en: 'Specialized in laser dermatology, aesthetic skin restoration, and complex pediatric skin care.',
    bio_bn: 'লেজার ডার্মাটোলজি এবং নান্দনিক ত্বক পরিচর্যায় অভিজ্ঞ চর্মরোগ বিশেষজ্ঞ।',
    photo_url: 'https://images.unsplash.com/photo-1594824813566-78a1ed67053e?w=600&auto=format&fit=crop&q=80',
    years_experience: 12,
    rating: 4.8,
    consultation_fee: 1200
  },
  {
    id: 'doc-3',
    name_en: 'Dr. Mahmudul Hasan',
    name_bn: 'ড. মাহমুদুল হাসান',
    specialty_en: 'Pediatrics',
    specialty_bn: 'পিডিয়াট্রিক্স (শিশু রোগ)',
    qualification: 'MBBS, DCH, MD (Pediatrics), Member RCPCH (UK)',
    bio_en: 'Dedicated Pediatrician specializing in newborn care, child nutrition, and pediatric emergency medicine.',
    bio_bn: 'নবজাতক যত্ন এবং শিশু পুষ্টি চিকিৎসায় বিশেষ অভিজ্ঞ শিশু বিশেষজ্ঞ।',
    photo_url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80',
    years_experience: 14,
    rating: 4.9,
    consultation_fee: 1200
  },
  {
    id: 'doc-4',
    name_en: 'Dr. Sharmin Akter',
    name_bn: 'ড. শারমিন আক্তার',
    specialty_en: 'Gynecology',
    specialty_bn: 'গাইনোকোলজি (স্ত্রী রোগ ও প্রসূতি)',
    qualification: 'MBBS, FCPS (OBGYN), MS (Gynecology)',
    bio_en: 'Consultant Obstetrician and Gynecologist specializing in high-risk pregnancy care and laparoscopic surgeries.',
    bio_bn: 'উচ্চঝুঁকিপূর্ণ গর্ভাবস্থা এবং ল্যাপারোস্কোপিক সার্জারিতে বিশেষজ্ঞ।',
    photo_url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80',
    years_experience: 15,
    rating: 5.0,
    consultation_fee: 1400
  },
  {
    id: 'doc-5',
    name_en: 'Dr. Kamal Hossain',
    name_bn: 'ড. কামাল হোসেন',
    specialty_en: 'Orthopedics',
    specialty_bn: 'অরথোপেডিক্স (হাড় ও জোড়া রোগ)',
    qualification: 'MBBS, MS (Orthopedics), Joint Replacement Fellow (Singapore)',
    bio_en: 'Expert Orthopedic Surgeon specializing in joint replacements, sports injuries, and spine management.',
    bio_bn: 'হাড়ের জোড়া প্রতিস্থাপন এবং স্পোর্টস ইনজুরিতে অভিজ্ঞ অর্থোপেডিক সার্জন।',
    photo_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80',
    years_experience: 18,
    rating: 4.9,
    consultation_fee: 1600
  },
  {
    id: 'doc-6',
    name_en: 'Dr. Farhana Ahmed',
    name_bn: 'ড. ফারহানা আহমেদ',
    specialty_en: 'Dental',
    specialty_bn: 'ডেন্টাল (দন্ত চিকিৎসা)',
    qualification: 'BDS, FCPS (Dental Surgery), MPH',
    bio_en: 'Cosmetic Dentist specializing in root canal therapy, smile design, and painless laser dentistry.',
    bio_bn: 'রুট ক্যানাল এবং স্মাইল ডিজাইনে অভিজ্ঞ কসমোটোলজি ডেন্টাল সার্জন।',
    photo_url: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&auto=format&fit=crop&q=80',
    years_experience: 10,
    rating: 4.8,
    consultation_fee: 1000
  }
];

export const MOCK_SERVICES: Service[] = [
  {
    id: 'srv-1',
    name_en: 'Cardiology',
    name_bn: 'কার্ডিওলজি',
    slug: 'cardiology',
    description_en: 'Comprehensive heart health evaluations, ECG, Echocardiogram, and preventative cardiac care.',
    description_bn: 'সম্পূর্ণ হৃদরোগ পরীক্ষা, ইসিজি, ইকোকার্ডিওগ্রাম এবং হার্টের নিবিড় যত্ন।',
    icon: 'HeartPulse',
    department: 'Cardiovascular Medicine'
  },
  {
    id: 'srv-2',
    name_en: 'Dermatology',
    name_bn: 'ডার্মাটোলজি',
    slug: 'dermatology',
    description_en: 'Advanced clinical & laser skin care, acne treatments, hair loss therapy, and cosmetic dermatology.',
    description_bn: 'ত্বকের জটিল চিকিৎসা, ব্রণ দূরীকরণ, লেজার থেরাপি এবং চুল পড়া রোধের যত্ন।',
    icon: 'Sparkles',
    department: 'Skin & Laser Center'
  },
  {
    id: 'srv-3',
    name_en: 'Pediatrics',
    name_bn: 'পিডিয়াট্রিক্স',
    slug: 'pediatrics',
    description_en: 'Compassionate medical care for infants, children, and teens including vaccination schedules.',
    description_bn: 'শিশু ও কিশোরদের সুস্বাস্থ্য রক্ষা, টিকাদান এবং সার্বিক রোগ নিরাময়।',
    icon: 'Baby',
    department: 'Child Health Center'
  },
  {
    id: 'srv-4',
    name_en: 'Orthopedics',
    name_bn: 'অরথোপেডিক্স',
    slug: 'orthopedics',
    description_en: 'Bone, joint, and spinal treatment, fracture care, joint replacement, and physical rehabilitation.',
    description_bn: 'হাড়ের জোড়া প্রতিস্থাপন, ফ্র্যাকচার চিকিৎসা এবং ফিজিওথেরাপি সার্ভিস।',
    icon: 'Activity',
    department: 'Bone & Joint Center'
  },
  {
    id: 'srv-5',
    name_en: 'Dental Care',
    name_bn: 'ডেন্টাল কেয়ার',
    slug: 'dental',
    description_en: 'Complete oral hygiene, root canals, teeth whitening, crowns, and painless dental surgery.',
    description_bn: 'ব্যথামুক্ত দাঁত তোলা, রুট ক্যানাল, স্কেলিং এবং আধুনিক ডেন্টাল ইমপ্ল্যান্ট।',
    icon: 'Smile',
    department: 'Dental Surgery'
  },
  {
    id: 'srv-6',
    name_en: 'Gynecology & Obstetrics',
    name_bn: 'গাইনোকোলজি ও অবস্টেট্রিক্স',
    slug: 'gynecology',
    description_en: 'Maternal health, antenatal care, normal & C-section deliveries, and female wellness checks.',
    description_bn: 'মাতৃত্বকালীন সেবাসমূহ, নরমাল ডেলিভারি এবং নারীদের সার্বিক স্বাস্থ্যসেবা।',
    icon: 'UserCheck',
    department: 'Women Health Center'
  },
  {
    id: 'srv-7',
    name_en: 'General Medicine',
    name_bn: 'জেনারেল মেডিসিন',
    slug: 'general-medicine',
    description_en: 'Primary health consultations, diabetes management, hypertension, and annual health checkups.',
    description_bn: 'ডায়াবেটিস, প্রেশার, জ্বর-কাশি সহ সাধারণ সকল শারীরিক সমস্যার বিশেষজ্ঞ পরামর্।',
    icon: 'Stethoscope',
    department: 'Internal Medicine'
  }
];

export const MOCK_SLOTS: AppointmentSlot[] = [
  { id: 'slot-1', doctor_id: 'doc-1', date: '2026-08-16', time: '10:00 AM', is_available: true },
  { id: 'slot-2', doctor_id: 'doc-1', date: '2026-08-16', time: '11:30 AM', is_available: true },
  { id: 'slot-3', doctor_id: 'doc-1', date: '2026-08-16', time: '04:00 PM', is_available: true },
  { id: 'slot-4', doctor_id: 'doc-2', date: '2026-08-16', time: '02:00 PM', is_available: true },
  { id: 'slot-5', doctor_id: 'doc-2', date: '2026-08-16', time: '05:00 PM', is_available: true },
  { id: 'slot-6', doctor_id: 'doc-3', date: '2026-08-16', time: '09:30 AM', is_available: true },
  { id: 'slot-7', doctor_id: 'doc-3', date: '2026-08-16', time: '03:30 PM', is_available: true },
  { id: 'slot-8', doctor_id: 'doc-4', date: '2026-08-16', time: '11:00 AM', is_available: true },
  { id: 'slot-9', doctor_id: 'doc-5', date: '2026-08-16', time: '06:00 PM', is_available: true },
  { id: 'slot-10', doctor_id: 'doc-6', date: '2026-08-16', time: '10:30 AM', is_available: true }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patient_name: 'Rafiqul Islam',
    rating: 5,
    comment_en: 'Dr. Tariq Rahman’s quick diagnostic action saved my father during a cardiac scare. The clinic environment and staff are top notch!',
    comment_bn: 'ড. তারিক রহমানের সঠিক সিদ্ধান্ত আমার বাবাকে হৃদরোগের জরুরি মুহূর্তে বাঁচিয়েছে। ক্লিনিকের সার্বিক পরিবেশ চমৎকার।',
    doctor_name: 'Dr. Tariq Rahman'
  },
  {
    id: 't-2',
    patient_name: 'Sabrina Sultana',
    rating: 5,
    comment_en: 'Very clean facility, painless dental treatment by Dr. Farhana. Online appointment booking took less than 2 minutes!',
    comment_bn: 'খুবই পরিচ্ছন্ন ক্লিনিক। ড. ফারহানার হাতে ব্যথামুক্ত দাঁতের চিকিৎসা পেয়েছি। মাত্র ২ মিনিটে অনলাইন বুকিং করতে পেরেছি।',
    doctor_name: 'Dr. Farhana Ahmed'
  },
  {
    id: 't-3',
    patient_name: 'Tanvir Hossain',
    rating: 5,
    comment_en: 'Best pediatric care in Dhaka for my 4-year-old daughter. Dr. Mahmudul is extremely patient and gentle with kids.',
    comment_bn: 'আমার ৪ বছরের মেয়ের জন্য ঢাকার সেরা চাইল্ড কেয়ার। ডাক্তার সাহেবের আচরণ খুবই আন্তরিক।',
    doctor_name: 'Dr. Mahmudul Hasan'
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: '10-heart-healthy-habits',
    title_en: '10 Essential Daily Habits for a Healthy Heart',
    title_bn: 'সুস্থ হৃদযন্ত্রের জন্য ১০টি দৈনন্দিন জরুরি অভ্যাস',
    summary_en: 'Simple lifestyle changes, dietary tips, and exercise routines recommended by senior cardiologists to prevent heart disease.',
    summary_bn: 'হৃদরোগ প্রতিরোধে সিনিয়র হৃদরোগ বিশেষজ্ঞদের দেয়া খাদ্যাভ্যাস ও প্রয়োজনীয় পরামর্শ।',
    content_en: 'Heart health starts with small, consistent decisions. Eating balanced meals rich in omega-3, exercising 30 minutes daily, and managing stress levels dramatically lower your risk of cardiovascular complications.',
    content_bn: 'হৃদযন্ত্র সুস্থ রাখার প্রথম শর্ত হলো সঠিক খাদ্যাভ্যাস ও শারীরিক পরিশ্রম। প্রতিদিন অন্তত ৩০ মিনিট হাঁটা এবং চাপমুক্ত থাকা প্রয়োজন।',
    author: 'Dr. Tariq Rahman',
    date: 'August 12, 2026',
    category: 'Cardiology',
    read_time: '5 min read'
  },
  {
    slug: 'pediatric-monsoon-care-guide',
    title_en: 'Monsoon Child Care: Protecting Kids from Seasonal Flu',
    title_bn: 'বর্ষায় শিশুর যত্ন: ভাইরাস জ্বর ও সংক্রমণ থেকে বাঁচার উপায়',
    summary_en: 'How parents can protect infants and toddlers from viral fever, dengue, and gastrointestinal infections during the rainy season.',
    summary_bn: 'বর্ষা মৌসুমে শিশুদের ডেঙ্গু, জ্বর ও সর্দি-কাশি থেকে মুক্ত রাখার সহজ স্বাস্থ্য টিপস।',
    content_en: 'During monsoon, child immunity requires extra attention. Ensure purified drinking water, mosquito prevention around sleeping areas, and prompt hydration at early fever signs.',
    content_bn: 'বর্ষাকালে বিশুদ্ধ পানীয় জল নিশ্চিত করা এবং মশার কামড় থেকে শিশুকে সুরক্ষিত রাখা অত্যন্ত জরুরি।',
    author: 'Dr. Mahmudul Hasan',
    date: 'August 10, 2026',
    category: 'Pediatrics',
    read_time: '4 min read'
  }
];
