// ─────────────────────────────────────────────────────────────────────────────
// Whitestone Learning Network: every editable fact on the site lives here.
//
// Rules:
// • Never put an unconfirmed number, quote, award or name in this file.
// • A value of `null` (or an empty array) hides that item on the site.
// • Every `// TODO: confirm` marks a value that still needs to be supplied.
// ─────────────────────────────────────────────────────────────────────────────

export type SocialLink = { label: string; href: string };

export const site = {
  name: "Whitestone",
  fullName: "Whitestone Learning Network",
  legalName: "Whitestone Learning Network Ltd.",
  tagline: "Learning experiences built to last.",

  // Production domain without protocol, e.g. "whitestone.com.bd".
  domain: null as string | null, // TODO: confirm {{DOMAIN}}

  // Street address in Dhaka. City and country are always shown.
  officeAddress: null as string | null, // TODO: confirm {{OFFICE_ADDRESS}}
  city: "Dhaka",
  country: "Bangladesh",
  countryCode: "BD",

  email: null as string | null, // TODO: confirm {{EMAIL}}
  phone: null as string | null, // TODO: confirm {{PHONE}}

  // e.g. { label: "Facebook", href: "https://facebook.com/..." }
  socials: [] as SocialLink[], // TODO: confirm {{SOCIAL_LINKS}}

  // e.g. "We usually reply within two working days."
  responseTime: null as string | null, // TODO: confirm {{RESPONSE_TIME}}
};

/** Absolute site URL used for metadata, canonical links, sitemap and robots. */
export const siteUrl = site.domain
  ? `https://${site.domain}`
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const seo = {
  title: "Whitestone Learning Network — Schools, Online Learning & Resources in Dhaka",
  description:
    "Whitestone Learning Network Ltd brings together Wheaton International School, Guidance International School, Pedago Academy and Jolly Learning BD, founded by educationist Abdullah Jaman in Dhaka, Bangladesh.",
  locale: "en_BD",
};

// Only facts that have been confirmed in writing belong here.
export const confirmedFacts = {
  // Exact wording for Jolly Learning BD's relationship with Jolly Learning Ltd
  // (e.g. "official distributor"). While null, only neutral wording is used.
  jollyLearningRelationship: null as string | null, // TODO: confirm
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/institutions", label: "Institutions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// ── Founder ──────────────────────────────────────────────────────────────────

export const founder = {
  name: "Abdullah Jaman",
  initials: "AJ",
  title: "Founder & Managing Director",
  url: "https://abdullahjaman.com",
  // Shown only if the file exists in /public.
  photo: "/images/abdullah-jaman.jpg", // TODO: confirm, add the photo file
  yearsInEducation: "20+",
  bio: [
    "Abdullah Jaman is an educationist with more than 20 years in education. He founded Whitestone Learning Network to bring schools, online learning and learning resources together under one set of values.",
    "He is the author of the Arabic learning series Arabi Shikkha Obhijatra (Vol. 1 and 2, 2024), and his work is guided by a simple conviction: good education shapes character as carefully as it builds knowledge, rooted in Islamic values of honesty, discipline and service.",
  ],
  excerpt:
    "Education is not only what a child knows by the end of it. It is who they have become, and what they do with what they know.",
  books: [{ title: "Arabi Shikkha Obhijatra", detail: "Vol. 1 and 2, 2024" }],
};

// ── Institutions ─────────────────────────────────────────────────────────────

export type Institution = {
  slug: string;
  name: string;
  shortName: string;
  category: "School" | "Online academy" | "Learning resources";
  url: string;
  // Page to send admissions, course or order enquiries to.
  enquiryUrl: string;
  summary: string;
  description: string[];
  tones: [string, string];
  glyph: string;
};

export const institutions: Institution[] = [
  {
    slug: "wis",
    name: "Wheaton International School",
    shortName: "WIS",
    category: "School",
    url: "https://wheaton.edu.bd",
    enquiryUrl: "https://wheaton.edu.bd", // TODO: confirm admissions/contact page URL
    summary: "An English-medium school in Dhaka where strong academics and good character grow together.",
    description: [
      "Wheaton International School is an English-medium school in Dhaka. It is built on the belief that academic rigour and character are taught together, in every classroom and every day.",
      "For admissions, fees and school news, please visit the Wheaton website directly.",
    ],
    tones: ["#dfe3e8", "#c7ced8"],
    glyph: "W",
  },
  {
    slug: "gis",
    name: "Guidance International School",
    shortName: "GIS",
    category: "School",
    url: "https://guidance.edu.bd/",
    enquiryUrl: "https://guidance.edu.bd/", // TODO: confirm admissions/contact page URL
    summary: "An English-medium school in Dhaka that educates the whole child, with high expectations and real care.",
    description: [
      "Guidance International School is an English-medium school in Dhaka. It shares the Whitestone commitment to educating the whole child, pairing high expectations in the classroom with care for manners, values and wellbeing.",
      "For admissions, fees and school news, please visit the Guidance website directly.",
    ],
    tones: ["#e6e2dc", "#d3ccc2"],
    glyph: "G",
  },
  {
    slug: "pedago-academy",
    name: "Pedago Academy",
    shortName: "Pedago",
    category: "Online academy",
    url: "https://pedagoacademy.com",
    enquiryUrl: "https://pedagoacademy.com", // TODO: confirm support/contact page URL
    summary: "Online courses and a learning platform, so good teaching can reach learners wherever they are.",
    description: [
      "Pedago Academy offers online courses on its own learning platform. It carries the same standards as our schools into a format that fits around school, work and family life.",
      "Browse courses, enrol and sign in on the Pedago Academy website.",
    ],
    tones: ["#e3e6e1", "#cdd4ca"],
    glyph: "P",
  },
  {
    slug: "jolly-learning-bd",
    name: "Jolly Learning BD",
    shortName: "Jolly Learning BD",
    category: "Learning resources",
    url: "https://jollylearningbd.com",
    enquiryUrl: "https://jollylearningbd.com", // TODO: confirm orders/contact page URL
    summary: "An online store for Jolly Learning and Jolly Phonics literacy resources in Bangladesh.",
    description: [
      "Jolly Learning BD is an online store for Jolly Learning resources in Bangladesh, including Jolly Phonics materials that help young children learn to read and write with confidence.",
      "The resources suit both homes and classrooms. Orders and delivery are handled on the Jolly Learning BD website.",
    ],
    tones: ["#e1e2e6", "#cbcdd6"],
    glyph: "J",
  },
];

/** The five brands shown in the "Whitestone family" strip and footer. */
export const network = [
  ...institutions.map((i) => ({ slug: i.slug, name: i.name, url: i.url })),
  { slug: "abdullah-jaman", name: "Abdullah Jaman", url: founder.url },
];

// ── Stats ────────────────────────────────────────────────────────────────────
// Rendered in order. Items with a null value are hidden.

export const stats: { key: string; value: string | null; label: string }[] = [
  { key: "yearsInEducation", value: founder.yearsInEducation, label: "Years in education (Abdullah Jaman)" },
  { key: "schools", value: "2", label: "English-medium schools in Dhaka" }, // TODO: confirm
  { key: "students", value: null, label: "Students across our schools" }, // TODO: confirm
  { key: "teachers", value: null, label: "Teachers and staff" }, // TODO: confirm
  { key: "onlineLearners", value: null, label: "Learners on Pedago Academy" }, // TODO: confirm
  { key: "booksPublished", value: "2", label: "Books published by our founder" }, // TODO: confirm
];

// ── Community voices ─────────────────────────────────────────────────────────
// Real, approved quotes only. The section is hidden while this is empty.

export type Testimonial = { quote: string; name: string; role: string; institution: string };

export const testimonials: Testimonial[] = []; // TODO: confirm

// ── Leadership ───────────────────────────────────────────────────────────────
// Hidden on the About page while empty. `photo` is optional (path in /public).

export type Leader = { name: string; role: string; photo?: string };

export const leadership: Leader[] = []; // TODO: confirm

// ── Homepage copy ────────────────────────────────────────────────────────────

export const pillars = [
  {
    title: "Schools",
    body: "In-person, English-medium education at Wheaton International School and Guidance International School.",
    tags: ["Curriculum", "Character", "Community"],
    href: "/institutions",
  },
  {
    title: "Digital learning",
    body: "Online courses and learning through Pedago Academy.",
    tags: ["Courses", "LMS", "Blended learning"],
    href: "https://pedagoacademy.com",
  },
  {
    title: "Learning resources",
    body: "Literacy and phonics materials for homes and classrooms through Jolly Learning BD.",
    tags: ["Phonics", "Books", "Classroom kits"],
    href: "https://jollylearningbd.com",
  },
  {
    title: "Teachers & publications",
    body: "Teacher development and educational books led by Abdullah Jaman.",
    tags: ["Teacher training", "Arabic & Islamic Studies", "Books"],
    href: "https://abdullahjaman.com",
  },
];

export const approach = [
  {
    title: "Character and rigour, together",
    body: "We hold children to high academic standards and teach honesty, respect and responsibility alongside them.",
  },
  {
    title: "Teachers who keep learning",
    body: "Great teachers make great schools, so we invest in their training, reflection and growth.",
  },
  {
    title: "Classroom, screen and home, connected",
    body: "Schools, online courses and home resources are designed to support each other, not compete.",
  },
  {
    title: "Measure, reflect, improve",
    body: "We look honestly at how children are learning and use what we find to do better next term.",
  },
];

export const values = [
  {
    title: "The whole child",
    body: "Knowledge, character, faith and wellbeing matter together. We don't trade one for another.",
  },
  {
    title: "Rigour with care",
    body: "High expectations, set by teachers who know each child and want them to succeed.",
  },
  {
    title: "Rooted in values",
    body: "Islamic values of honesty, discipline, kindness and service shape how we teach and how we lead.",
  },
  {
    title: "Built to last",
    body: "Like the stone we're named after: solid, simple and made to serve the next generation.",
  },
];

// ── Contact ──────────────────────────────────────────────────────────────────
// `routeTo` sends that enquiry type to an institution's own site first.

export const enquiryTypes: { value: string; label: string; routeTo?: string; topic?: string }[] = [
  { value: "wis-admissions", label: "WIS admissions", routeTo: "wis", topic: "admissions" },
  { value: "gis-admissions", label: "GIS admissions", routeTo: "gis", topic: "admissions" },
  { value: "pedago-courses", label: "Pedago Academy courses", routeTo: "pedago-academy", topic: "course enquiries" },
  { value: "jolly-orders", label: "Jolly Learning BD orders", routeTo: "jolly-learning-bd", topic: "orders" },
  { value: "partnerships", label: "Partnerships" },
  { value: "media", label: "Media" },
  { value: "speaking", label: "Speaking invitation for Abdullah Jaman" },
];
