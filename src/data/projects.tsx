import { SkillNames } from "./constants";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, BarChart3, LineChart, Workflow, Database, Globe } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { 
  SiPython, 
  SiPostgresql, 
  SiPowerbi, 
  SiTableau, 
  SiSap, 
  SiMicrosoftexcel, 
  SiOpenai
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live }: { live: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    {live !== "#" && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          View Project Case Study
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    )}
  </div>
);

export type Skill = { title: string; bg: string; fg: string; icon: ReactNode; };

const PROJECT_SKILLS = {
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  powerbi: { title: "Power BI", bg: "black", fg: "white", icon: <SiPowerbi /> },
  tableau: { title: "Tableau", bg: "black", fg: "white", icon: <SiTableau /> },
  sql: { title: "SQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  sap: { title: "SAP ERP", bg: "black", fg: "white", icon: <SiSap /> },
  excel: { title: "Excel", bg: "black", fg: "white", icon: <SiMicrosoftexcel /> },
  n8n: { title: "n8n", bg: "black", fg: "white", icon: <Workflow className="w-4 h-4" /> },
  ai: { title: "AI", bg: "black", fg: "white", icon: <SiOpenai /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  live: string;
};

const projects: Project[] = [
  {
    id: "ab-inbev",
    category: "Data & Automation",
    title: "AB-Inbev Inventory Automation",
    src: ``,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.excel],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sap],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">Supply Chain Optimization</TypographyP>
          <TypographyP className="font-mono">Automated stock-age reporting by connecting Python to SAP ERP, saving 20 hours of manual work monthly.</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "maki",
    category: "Product Strategy",
    title: "Maki People Funnel Analysis",
    src: ``,
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.tableau],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sql],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">Churn Reduction Strategy</TypographyP>
          <TypographyP className="font-mono">Analyzed a 30% drop-off in user onboarding and delivered strategy that boosted satisfaction by 25%.</TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];

export default projects;