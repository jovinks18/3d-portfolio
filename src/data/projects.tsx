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
  SiOpenai,
  SiFastapi,
  SiStreamlit,
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
  python:    { title: "Python",    bg: "black", fg: "white", icon: <SiPython /> },
  powerbi:   { title: "Power BI",  bg: "black", fg: "white", icon: <SiPowerbi /> },
  tableau:   { title: "Tableau",   bg: "black", fg: "white", icon: <SiTableau /> },
  sql:       { title: "SQL",       bg: "black", fg: "white", icon: <SiPostgresql /> },
  sap:       { title: "SAP ERP",   bg: "black", fg: "white", icon: <SiSap /> },
  excel:     { title: "Excel",     bg: "black", fg: "white", icon: <SiMicrosoftexcel /> },
  n8n:       { title: "n8n",       bg: "black", fg: "white", icon: <Workflow className="w-4 h-4" /> },
  ai:        { title: "AI",        bg: "black", fg: "white", icon: <SiOpenai /> },
  fastapi:   { title: "FastAPI",   bg: "black", fg: "white", icon: <SiFastapi /> },
  streamlit: { title: "Streamlit", bg: "black", fg: "white", icon: <SiStreamlit /> },
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
  // ─── AB-InBev ────────────────────────────────────────────────────────────────
  {
    id: "ab-inbev",
    category: "Data & Automation",
    title: "AB-InBev Inventory Automation",
    src: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80`,
    screenshots: [`https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80`],
    skills: {
      frontend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.excel],
      backend:  [PROJECT_SKILLS.python, PROJECT_SKILLS.sap],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Supply Chain & Logistics Intelligence
          </TypographyP>

          <TypographyP className="font-mono">
            During my internship as a BI Data Analyst at AB-InBev Europe in Prague, I was embedded in the
            Supply Chain team and took full ownership of automating how they tracked and reported on inventory
            health across European operations.
          </TypographyP>

          <TypographyP className="font-mono">
            The core deliverable was replacing a set of slow, error-prone manual Excel workflows with a live
            daily Power BI dashboard covering stock-age index tracking and obsolete inventory reporting.
            The dashboard was rebuilt with proper data modeling, DAX measures, and Power Query transformations,
            saving the team roughly <strong>20 hours of manual effort every month</strong>.
          </TypographyP>

          <TypographyP className="font-mono">
            Beyond inventory, I automated data extraction directly from SAP ERP using Python across logistics,
            capacity, and supply chain workflows — removing the bottleneck of manual exports and giving
            operational leads timely, decision-ready data. The resulting dashboards were self-serve with
            drill-down capabilities for cross-functional stakeholders across the European logistics network.
          </TypographyP>

          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },

  // ─── Maki People ─────────────────────────────────────────────────────────────
  {
    id: "maki",
    category: "Product Strategy",
    title: "Maki People — Funnel & Retention Analysis",
    src: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80`,
    screenshots: [`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80`],
    skills: {
      frontend: [PROJECT_SKILLS.tableau],
      backend:  [PROJECT_SKILLS.python, PROJECT_SKILLS.sql],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Churn Diagnosis & Product Roadmap Influence
          </TypographyP>

          <TypographyP className="font-mono">
            At MakiPeople in Paris, I worked as a Customer Analyst Intern across Strategy & Product, sitting
            at the intersection of customer feedback, product prioritization, and commercial impact.
          </TypographyP>

          <TypographyP className="font-mono">
            My starting point was a troubling signal: a <strong>30% drop-off</strong> in client completion
            of core product workflows. I ran structured customer interviews alongside funnel analysis to
            identify root causes — and the findings directly shaped the product and onboarding roadmap for
            the following quarter. I built business cases quantifying expected impact vs. implementation
            risk to drive buy-in from product, ops, and commercial leads.
          </TypographyP>

          <TypographyP className="font-mono">
            The work translated into measurable outcomes: customer satisfaction improved by{" "}
            <strong>25%</strong> and workflow completion time dropped by <strong>15%</strong>. The biggest
            challenge was securing alignment across teams with competing priorities and limited resources —
            and making sure the right fixes actually got shipped.
          </TypographyP>

          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },

  // ─── GoodFoods ───────────────────────────────────────────────────────────────
  {
    id: "goodfoods",
    category: "AI & Voice",
    title: "GoodFoods Reservation System",
    src: `${BASE_PATH}/portfolio/goodfoods-demo.png`,
    screenshots: [`${BASE_PATH}/portfolio/goodfoods-demo.png`],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.ai],
      backend:  [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Conversational AI for Restaurant Bookings
          </TypographyP>

          <TypographyP className="font-mono">
            GoodFoods is a voice-enabled AI agent that helps users discover restaurants and book tables across
            San Francisco entirely through natural conversation. Built with OpenAI function-calling, a FastAPI
            backend, and a Streamlit chat UI.
          </TypographyP>

          <TypographyP className="font-mono">
            Users can type or speak their requests via microphone (transcribed by OpenAI Whisper), with replies
            read aloud using OpenAI TTS — lowering friction for mobile users and improving accessibility.
          </TypographyP>

          <TypographyP className="font-mono">
            The agent handles the full booking flow end-to-end: restaurant discovery across 30 SF neighborhoods,
            guided data collection, and instant reservation confirmation — 24/7, without human intervention.
          </TypographyP>

          <TypographyP className="font-mono font-semibold">Key design choices:</TypographyP>
          <TypographyP className="font-mono">
            Two-tool architecture — lookup_dining_options for search and confirm_table_booking for reservations,
            connected to a live FastAPI backend. Prompt engineering with few-shot examples to handle edge cases:
            missing info, capacity errors, invalid inputs, and cancellation requests. Guardrails against
            function-text leakage and placeholder hallucinations, plus a live Agent thinking trace panel so
            users can follow the model reasoning in real time.
          </TypographyP>

          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];

export default projects;