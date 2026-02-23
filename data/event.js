export const EVENT = {
  name: "TechSummit2026",
  tagline: "Where Innovation Meets Impact",
  dates: "March 15 – 17, 2026",
  venue: "Pragati Maidan, New Delhi",
  wifi: { ssid: "TechSummit-Guest", password: "TS2026@Connect" },
  emergencyContact: "+91 98765 43210",
  logo: "🚀",
};

export const AGENDA = [
  {
    day: "Day 1 — March 15",
    sessions: [
      { id: "s1", time: "09:00 AM", title: "Opening Keynote: Future of AI", speaker: "Dr. Priya Sharma", hall: "Main Auditorium", track: "AI" },
      { id: "s2", time: "10:30 AM", title: "Building Scalable Cloud Systems", speaker: "Arjun Mehta", hall: "Hall A", track: "Cloud" },
      { id: "s3", time: "12:00 PM", title: "Panel: Ethics in Technology", speaker: "Multiple Speakers", hall: "Main Auditorium", track: "General" },
      { id: "s4", time: "02:00 PM", title: "Workshop: LLM Fine-Tuning", speaker: "Neha Gupta", hall: "Workshop Room 1", track: "AI" },
      { id: "s5", time: "04:00 PM", title: "Startup Pitch Competition", speaker: "Various", hall: "Hall B", track: "Startups" },
    ],
  },
  {
    day: "Day 2 — March 16",
    sessions: [
      { id: "s6", time: "09:00 AM", title: "Keynote: Web3 & Decentralization", speaker: "Vikram Patel", hall: "Main Auditorium", track: "Web3" },
      { id: "s7", time: "10:30 AM", title: "DevOps Best Practices 2026", speaker: "Rahul Verma", hall: "Hall A", track: "DevOps" },
      { id: "s8", time: "12:00 PM", title: "Security in the AI Era", speaker: "Dr. Anjali Rao", hall: "Hall B", track: "Security" },
      { id: "s9", time: "02:00 PM", title: "Hands-on: Building WhatsApp Bots", speaker: "Kabir Singh", hall: "Workshop Room 1", track: "Dev" },
      { id: "s10", time: "04:00 PM", title: "Fireside Chat: Women in Tech", speaker: "Panel", hall: "Main Auditorium", track: "General" },
    ],
  },
  {
    day: "Day 3 — March 17",
    sessions: [
      { id: "s11", time: "09:00 AM", title: "Quantum Computing: What's Next?", speaker: "Prof. Rajesh Kumar", hall: "Main Auditorium", track: "Emerging" },
      { id: "s12", time: "10:30 AM", title: "Mobile-First Product Design", speaker: "Sneha Iyer", hall: "Hall A", track: "Design" },
      { id: "s13", time: "12:00 PM", title: "Green Tech & Sustainability", speaker: "Arun Nair", hall: "Hall B", track: "General" },
      { id: "s14", time: "02:00 PM", title: "Closing Keynote: Next Decade in Tech", speaker: "Dr. Priya Sharma", hall: "Main Auditorium", track: "General" },
      { id: "s15", time: "03:30 PM", title: "Networking Mixer & Awards", speaker: "All", hall: "Grand Lobby", track: "Social" },
    ],
  },
];

export const SPEAKERS = [
  { id: "sp1", name: "Dr. Priya Sharma", role: "Chief AI Officer, InnovateTech", bio: "Leading AI researcher with 15+ years of experience in NLP and computer vision. TEDx speaker and author of 'AI for Everyone'.", sessions: ["s1", "s14"] },
  { id: "sp2", name: "Arjun Mehta", role: "VP Engineering, CloudScale", bio: "Architected systems serving 500M+ users. Passionate about distributed systems and cloud-native architecture.", sessions: ["s2"] },
  { id: "sp3", name: "Neha Gupta", role: "ML Lead, DeepMinds India", bio: "Specializes in LLM training and fine-tuning. Published 20+ papers in top-tier conferences.", sessions: ["s4"] },
  { id: "sp4", name: "Vikram Patel", role: "Founder, BlockChain Labs", bio: "Serial entrepreneur building decentralized infrastructure. Forbes 30 Under 30.", sessions: ["s6"] },
  { id: "sp5", name: "Rahul Verma", role: "DevOps Director, TechGiant", bio: "Manages CI/CD pipelines handling 10K+ deployments daily. AWS Community Hero.", sessions: ["s7"] },
  { id: "sp6", name: "Dr. Anjali Rao", role: "CISO, SecureNet", bio: "Cybersecurity expert specializing in AI-driven threat detection. Built security frameworks for Fortune 500 companies.", sessions: ["s8"] },
  { id: "sp7", name: "Kabir Singh", role: "Developer Advocate, MetaAPI", bio: "WhatsApp API specialist. Has built chatbots serving 10M+ users across 50+ countries.", sessions: ["s9"] },
  { id: "sp8", name: "Sneha Iyer", role: "Design Director, PixelCraft", bio: "Award-winning product designer. Believes in mobile-first, accessibility-driven design.", sessions: ["s12"] },
];

export const FAQS = [
  { q: "What is the WiFi password?", a: `📶 *WiFi Network:* TechSummit-Guest\n🔑 *Password:* TS2026@Connect` },
  { q: "Where is the registration desk?", a: "📍 The registration desk is located at the *Main Entrance, Ground Floor*. It's open from 8:00 AM to 6:00 PM all three days." },
  { q: "Is parking available?", a: "🅿️ Yes! Free parking is available at *Pragati Maidan Parking Zone P3*. Follow the signs from Gate 4." },
  { q: "What about food?", a: "🍽️ Lunch and refreshments are *included* with your pass.\n\n☕ *Coffee Stations:* All floors\n🥗 *Lunch:* Grand Dining Hall (12:30 – 2:00 PM)\n🍪 *Snacks:* Session breaks" },
  { q: "Is there a dress code?", a: "👔 *Smart Casual* is recommended. The venue is air-conditioned, so bring a light jacket!" },
  { q: "Can I get a certificate?", a: "🎓 Yes! Digital certificates of attendance will be shared via WhatsApp *within 48 hours* after the event." },
  { q: "How do I contact support?", a: "📞 *Event Helpdesk:* +91 98765 43210\n📧 *Email:* help@techsummit2026.com\n📍 *On-Site:* Information Desk at Main Lobby" },
  { q: "Are sessions recorded?", a: "🎥 Yes, all keynotes and panel discussions will be recorded. Recordings will be shared *post-event* via WhatsApp." },
];
