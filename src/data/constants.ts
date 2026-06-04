// ─── Skill Names ─────────────────────────────────────────────────────────────
// Each value must exactly match the corresponding Spline object name.
// The Spline event system uses e.target.name to look up skills here.

export enum SkillNames {
  // Data & Analytics
  PYTHON       = "python",
  SQL          = "sql",
  POWERBI      = "powerbi",
  TABLEAU      = "tableau",
  EXCEL        = "excel",
  BIGQUERY     = "bigquery",

  // Dev Stack
  TYPESCRIPT   = "typescript",
  REACT        = "react",
  NEXTJS       = "nextjs",
  GITHUB       = "github",
  DOCKER       = "docker",
  VERCEL       = "vercel",

  // Automation & AI
  N8N          = "n8n",
  AI           = "ai",

  // Design & Tools
  FIGMA        = "figma",
  SUPABASE     = "supabase",
}

// ─── Skill Shape ─────────────────────────────────────────────────────────────

export type Skill = {
  id: number;
  name: string;   // Must match Spline object name exactly
  label: string;
  shortDescription: string;
  color: string;  // Brand color (used for future styling; not rendered in Spline scene)
  icon: string;   // CDN icon URL — rendered in Experience section skill badges
};

// ─── Skills Record ───────────────────────────────────────────────────────────

export const SKILLS: Record<SkillNames, Skill> = {
  // ── Data & Analytics ───────────────────────────────────────────────────────

  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "End-to-end data pipelines, automation scripts, and analytical workflows at scale 🐍",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.SQL]: {
    id: 2,
    name: "sql",
    label: "SQL",
    shortDescription: "Fluent in SELECT — transforming raw tables into clean, business-ready insights 📊",
    color: "#f29111",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.POWERBI]: {
    id: 3,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "Building live dashboards that turn operational data into executive decisions 📈",
    color: "#f2c811",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },

  [SkillNames.TABLEAU]: {
    id: 4,
    name: "tableau",
    label: "Tableau",
    shortDescription: "Designing interactive reports that make complex data immediately understandable 🎨",
    color: "#e97627",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },

  [SkillNames.EXCEL]: {
    id: 5,
    name: "excel",
    label: "MS Excel",
    shortDescription: "Pivot tables, advanced formulas, and operational reporting across cross-functional workflows 📑",
    color: "#1d6f42",
    icon: "https://cdn.worldvectorlogo.com/logos/excel-4.svg",
  },

  [SkillNames.BIGQUERY]: {
    id: 6,
    name: "bigquery",
    label: "BigQuery",
    shortDescription: "Cloud-scale analytical queries — petabyte-ready and latency-aware ☁️",
    color: "#4285f4",
    icon: "https://www.svgrepo.com/show/375551/bigquery.svg",
  },

  // ── Dev Stack ──────────────────────────────────────────────────────────────

  [SkillNames.TYPESCRIPT]: {
    id: 7,
    name: "typescript",
    label: "TypeScript",
    shortDescription: "Strongly typed and well-structured — JavaScript with guardrails and clear intent 🔷",
    color: "#3178c6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.REACT]: {
    id: 8,
    name: "react",
    label: "React",
    shortDescription: "Component-driven UIs built for scalability, reuse, and long-term maintainability ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 9,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React applications — this portfolio is a live proof of concept 🚀",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 10,
    name: "github",
    label: "GitHub",
    shortDescription: "Version control, collaborative workflows, and open-source contributions 🐙",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 11,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerised deployments that run consistently across every environment 🐳",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 12,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Ship fast, break nothing, sleep well ▲🚀",
    color: "#000000",
    icon: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },

  // ── Automation & AI ────────────────────────────────────────────────────────

  [SkillNames.N8N]: {
    id: 13,
    name: "n8n",
    label: "n8n",
    shortDescription: "Multi-step automation workflows that run continuously without manual intervention 🤖",
    color: "#ff6d5a",
    icon: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.svg",
  },

  [SkillNames.AI]: {
    id: 14,
    name: "ai",
    label: "GenAI / OpenAI",
    shortDescription: "Prompt engineering, agentic architectures, and production-grade LLM integrations 🧠",
    color: "#00ffcc",
    icon: "https://www.svgrepo.com/show/306500/openai.svg",
  },

  // ── Design & Tools ─────────────────────────────────────────────────────────

  [SkillNames.FIGMA]: {
    id: 15,
    name: "figma",
    label: "Figma",
    shortDescription: "From lo-fi wireframes to polished prototypes — design that communicates clearly 🎨",
    color: "#f24e1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },

  [SkillNames.SUPABASE]: {
    id: 16,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Serverless backend infrastructure — auth, database, and real-time events in one place 🟢",
    color: "#3ecf8e",
    icon: "https://www.svgrepo.com/show/354365/supabase.svg",
  },
};

// ─── Experience ───────────────────────────────────────────────────────────────

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Feb 2025",
    endDate: "May 2025",
    title: "BI Data Analyst Intern",
    company: "AB-Inbev Europe",
    description: [
      "Automated stock-age index and obsolete inventory reporting using Power BI and Python.",
      "Replaced manual Excel workflows with live dashboards, saving ~20 hours/month.",
      "Automated SAP ERP data extraction to improve supply chain reporting efficiency.",
    ],
    // SAP removed — not in updated skill set. Python + Power BI + Excel covers actual work.
    skills: [SkillNames.POWERBI, SkillNames.PYTHON, SkillNames.EXCEL, SkillNames.SQL],
  },
  {
    id: 2,
    startDate: "July 2024",
    endDate: "Jan 2025",
    title: "Customer Analyst Intern",
    company: "Maki People",
    description: [
      "Identified root causes of 30% client drop-off in core product workflows.",
      "Improved customer satisfaction by 25% through funnel analysis and strategy.",
      "Architected SQL queries to track real-time user engagement for global B2B assessments.",
    ],
    // SYSTEM_DESIGN removed — replaced with TABLEAU (funnel/retention analysis) and FIGMA (product work).
    skills: [SkillNames.PYTHON, SkillNames.SQL, SkillNames.TABLEAU, SkillNames.FIGMA],
  },
];

// ─── Theme disclaimers ────────────────────────────────────────────────────────

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness.",
  ],
  dark: [
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows.",
  ],
};
