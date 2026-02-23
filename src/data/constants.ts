export enum SkillNames {
  PYTHON = "python",
  SQL = "sql",
  POWERBI = "powerbi",
  TABLEAU = "tableau",
  EXCEL = "excel",
  SAP = "sap",
  N8N = "n8n",
  POSTGRES = "postgres",
  GIT = "git",
  GITHUB = "github",
  SYSTEM_DESIGN = "systemdesign",
  AI = "ai",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Automating the boring stuff and crunching data 🐍🔥",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.SQL]: {
    id: 2,
    name: "sql",
    label: "SQL",
    shortDescription: "SELECT * FROM insight WHERE value > 9000; 📊✨",
    color: "#f29111",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.POWERBI]: {
    id: 3,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "Turning messy rows into decision-ready dashboards 📈💎",
    color: "#f2c811",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  [SkillNames.N8N]: {
    id: 4,
    name: "n8n",
    label: "n8n",
    shortDescription: "Building autonomous workflows that live rent free! 🤖⚙️",
    color: "#ff6d5a",
    icon: "https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.svg",
  },
  [SkillNames.EXCEL]: {
    id: 5,
    name: "excel",
    label: "MS Excel",
    shortDescription: "VBA and Pivot Table wizardry 📑🦾",
    color: "#1d6f42",
    icon: "https://cdn.worldvectorlogo.com/logos/excel-4.svg",
  },
  [SkillNames.SAP]: {
    id: 6,
    name: "sap",
    label: "SAP ERP",
    shortDescription: "Navigating enterprise supply chains with ease 🏢🛰️",
    color: "#008fd3",
    icon: "https://cdn.worldvectorlogo.com/logos/sap-2.svg",
  },
  [SkillNames.AI]: {
    id: 7,
    name: "ai",
    label: "Agentic AI",
    shortDescription: "Deep learning and AI agents for business logic 🤖🧠",
    color: "#00ffcc",
    icon: "https://www.svgrepo.com/show/306500/openai.svg",
  },
  [SkillNames.GIT]: {
    id: 8,
    name: "git",
    label: "Git",
    shortDescription: "Version control is my love language 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 9,
    name: "github",
    label: "GitHub",
    shortDescription: "Managing repos and collaboration 🐙✨",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.SYSTEM_DESIGN]: {
    id: 10,
    name: "systemdesign",
    label: "System Design",
    shortDescription: "Architecting scalable business solutions 🏗️🧱",
    color: "#fff",
    icon: "https://www.svgrepo.com/show/355267/system-design.svg",
  },
  [SkillNames.TABLEAU]: {
    id: 11,
    name: "tableau",
    label: "Tableau",
    shortDescription: "Data visualization at its finest 🎨📉",
    color: "#e97627",
    icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 12,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational database management 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
};

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
    skills: [SkillNames.POWERBI, SkillNames.PYTHON, SkillNames.SAP, SkillNames.EXCEL],
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
    skills: [SkillNames.PYTHON, SkillNames.SQL, SkillNames.SYSTEM_DESIGN],
  },
];

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