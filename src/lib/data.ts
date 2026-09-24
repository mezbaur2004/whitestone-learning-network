// Site content. Everything here is placeholder copy — replace with real
// Whitestone projects, figures and quotes before launch.

export const site = {
  name: "Whitestone",
  fullName: "Whitestone Learning Network",
  tagline: "Learning experiences built to last.",
  email: "hello@whitestone.network",
  phone: "+1 (555) 014-2290",
  address: "24 Quarry Lane, Suite 300",
  city: "Boston, MA",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const socials = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.youtube.com", label: "YouTube" },
  { href: "https://x.com", label: "X" },
];

export const stats = [
  { value: "120K+", label: "Learners reached across 14 countries" },
  { value: "340", label: "Programs and courses designed" },
  { value: "92%", label: "Average completion rate" },
  { value: "15 yrs", label: "Of building learning that works" },
];

export const partners = [
  "Northbridge",
  "Lumen",
  "Atlas Schools",
  "Kestrel U.",
  "Brightpath",
  "Meridian",
  "Oakridge",
  "Halcyon",
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: "Platform" | "Program" | "Product" | "Training";
  year: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  results: { value: string; label: string }[];
  services: string[];
  tones: [string, string];
  glyph: string;
};

export const projects: Project[] = [
  {
    slug: "northbridge-digital-campus",
    title: "A digital campus for 18,000 students",
    client: "Northbridge Academy",
    category: "Platform",
    year: "2025",
    summary:
      "One home for courses, cohorts and campus life — replacing six disconnected tools.",
    challenge:
      "Northbridge ran its courses across six different tools. Students lost assignments between them, and faculty spent hours each week on admin instead of teaching.",
    approach: [
      "Interviewed 60 students and faculty to map every step of a typical week.",
      "Designed a single dashboard around what's due next, not which tool it lives in.",
      "Rolled out department by department, with faculty champions leading each wave.",
    ],
    outcome:
      "The campus platform became the default starting point for every student's day, and support tickets fell sharply within the first term.",
    results: [
      { value: "−64%", label: "Support tickets" },
      { value: "4.8/5", label: "Student rating" },
      { value: "18K", label: "Active students" },
    ],
    services: ["Research", "Platform design", "Rollout"],
    tones: ["#dfe3e8", "#c7ced8"],
    glyph: "N",
  },
  {
    slug: "future-skills-bootcamp",
    title: "Twelve weeks from classroom to career",
    client: "Future Skills Initiative",
    category: "Program",
    year: "2025",
    summary:
      "A hybrid bootcamp that turns first-time job seekers into confident junior analysts.",
    challenge:
      "Graduates had the theory but lacked the practical confidence employers were hiring for. Existing courses were long, passive and expensive.",
    approach: [
      "Co-designed the curriculum with 12 hiring managers.",
      "Built every week around a real brief from a partner company.",
      "Paired each learner with a working mentor from week one.",
    ],
    outcome:
      "The program now runs four cohorts a year, with partner companies hiring directly from final showcases.",
    results: [
      { value: "81%", label: "Hired in 90 days" },
      { value: "4", label: "Cohorts a year" },
      { value: "40+", label: "Hiring partners" },
    ],
    services: ["Curriculum", "Program design", "Mentoring"],
    tones: ["#e6e2dc", "#d3ccc2"],
    glyph: "F",
  },
  {
    slug: "lumen-early-reading",
    title: "Early reading, one small win at a time",
    client: "Lumen Kids",
    category: "Product",
    year: "2024",
    summary:
      "A calm, ad-free reading app for ages 4–7, designed with teachers and parents.",
    challenge:
      "Most reading apps rewarded screen time instead of progress. Parents wanted something they could trust, and teachers wanted data they could act on.",
    approach: [
      "Ran play-testing sessions in eight classrooms.",
      "Designed short, five-minute sessions that end on a success.",
      "Gave teachers a weekly progress summary instead of a live dashboard.",
    ],
    outcome:
      "Lumen is now used in over 300 schools, and reading scores improved measurably in the pilot districts.",
    results: [
      { value: "+23%", label: "Reading fluency" },
      { value: "300+", label: "Partner schools" },
      { value: "5 min", label: "Average session" },
    ],
    services: ["Product design", "Learning science", "Content"],
    tones: ["#e3e6e1", "#cdd4ca"],
    glyph: "L",
  },
  {
    slug: "atlas-teacher-network",
    title: "Professional learning teachers actually finish",
    client: "Atlas Schools",
    category: "Training",
    year: "2024",
    summary:
      "Bite-sized coaching for 2,400 teachers, built around their real classrooms.",
    challenge:
      "Teacher training was a once-a-year event that rarely changed practice. Busy staff needed something that fit into a school week.",
    approach: [
      "Replaced full-day workshops with 20-minute weekly coaching cycles.",
      "Let teachers film and reflect on short clips of their own lessons.",
      "Built peer circles so that schools could keep learning after we left.",
    ],
    outcome:
      "Atlas now runs the program in-house across its network, with completion rates far above its previous training.",
    results: [
      { value: "2.4K", label: "Teachers coached" },
      { value: "94%", label: "Completion" },
      { value: "3×", label: "Peer observations" },
    ],
    services: ["Coaching design", "Facilitation", "Evaluation"],
    tones: ["#e1e2e6", "#cbcdd6"],
    glyph: "A",
  },
  {
    slug: "kestrel-online-degrees",
    title: "Online degrees that feel like a campus",
    client: "Kestrel University",
    category: "Platform",
    year: "2023",
    summary:
      "Redesigned the online learning experience for three flagship degree programs.",
    challenge:
      "Online students felt isolated, and drop-out rates were twice those of campus students.",
    approach: [
      "Introduced small study pods that stay together for the whole degree.",
      "Rebuilt course pages around a clear weekly rhythm.",
      "Added live office hours that fit around working adults' schedules.",
    ],
    outcome:
      "Retention in the online programs has caught up with on-campus programs for the first time.",
    results: [
      { value: "−48%", label: "Drop-outs" },
      { value: "3", label: "Degrees redesigned" },
      { value: "9K", label: "Online students" },
    ],
    services: ["Experience design", "Course design", "Community"],
    tones: ["#e7e4e0", "#d6d0c9"],
    glyph: "K",
  },
  {
    slug: "brightpath-mentorship",
    title: "Mentorship at the scale of a city",
    client: "Brightpath Foundation",
    category: "Program",
    year: "2023",
    summary:
      "Matched 5,000 young people with mentors through a simple, safe, guided program.",
    challenge:
      "Brightpath had thousands of volunteer mentors but no reliable way to match, support and keep them.",
    approach: [
      "Designed a matching process based on shared interests and goals.",
      "Wrote a 10-session guide so that no mentor ever starts from a blank page.",
      "Set up light check-ins to spot struggling pairs early.",
    ],
    outcome:
      "Brightpath has tripled its active mentoring pairs while keeping safeguarding standards high.",
    results: [
      { value: "5K", label: "Mentoring pairs" },
      { value: "3×", label: "Active pairs" },
      { value: "87%", label: "Pairs complete" },
    ],
    services: ["Program design", "Service design", "Training"],
    tones: ["#e0e4e4", "#c9d2d2"],
    glyph: "B",
  },
];

export const services = [
  {
    title: "Learning programs",
    body: "Bootcamps, cohorts and courses designed around real outcomes, not seat time.",
    tags: ["Curriculum", "Cohorts", "Assessment"],
  },
  {
    title: "Digital platforms",
    body: "Campuses, apps and portals that make learning feel simple for students and staff.",
    tags: ["UX research", "Product design", "Build"],
  },
  {
    title: "Educator training",
    body: "Coaching and professional learning that changes what happens in the classroom.",
    tags: ["Coaching", "Workshops", "Peer circles"],
  },
  {
    title: "Strategy & evaluation",
    body: "Clear evidence on what's working, and a plan for what to do next.",
    tags: ["Audits", "Impact studies", "Roadmaps"],
  },
];

export const process = [
  { step: "01", title: "Listen", body: "We start with learners, teachers and the people who run the day-to-day." },
  { step: "02", title: "Design", body: "We prototype quickly, test in real settings and keep what works." },
  { step: "03", title: "Launch", body: "We roll out in waves, with training and support built in." },
  { step: "04", title: "Improve", body: "We measure results and keep refining long after launch." },
];

export const testimonials = [
  {
    quote:
      "Whitestone didn't hand us a platform and leave. They sat in our classrooms, listened to our students and built something people actually use.",
    name: "Dr. Amara Okafor",
    role: "Provost, Northbridge Academy",
  },
  {
    quote:
      "Our graduates now walk into interviews with a portfolio of real work. Hiring partners come to us.",
    name: "Daniel Reyes",
    role: "Director, Future Skills Initiative",
  },
  {
    quote:
      "For the first time, our teachers ask for more professional learning, not less.",
    name: "Hannah Lindqvist",
    role: "Chief Academic Officer, Atlas Schools",
  },
];

export const values = [
  { title: "Learners first", body: "Every decision starts with the person doing the learning." },
  { title: "Built to last", body: "Like the stone we're named after — solid, simple and made to endure." },
  { title: "Evidence over opinion", body: "We test, measure and let results guide the work." },
  { title: "Partners, not vendors", body: "We work alongside your team and leave them stronger." },
];

export const team = [
  { name: "Elena Marsh", role: "Founder & CEO", initials: "EM" },
  { name: "Samuel Oduya", role: "Head of Learning Design", initials: "SO" },
  { name: "Priya Nair", role: "Product Design Lead", initials: "PN" },
  { name: "Tomás García", role: "Head of Programs", initials: "TG" },
];

export const milestones = [
  { year: "2011", text: "Founded as a small tutoring collective in Boston." },
  { year: "2015", text: "Launched our first university partnership." },
  { year: "2019", text: "Opened a digital studio for learning platforms." },
  { year: "2023", text: "Passed 100,000 learners across 14 countries." },
  { year: "2026", text: "Growing the network with partners worldwide." },
];
