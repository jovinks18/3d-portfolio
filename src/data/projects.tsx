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
  SiFigma,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live }: { live: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    {live !== "#" && (
      <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
        <Button variant={"default"} size={"sm"}>
          View Project
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    )}
  </div>
);

export type Skill = { title: string; icon: ReactNode; };

const PROJECT_SKILLS = {
  python:    { title: "Python", icon: <SiPython /> },
  powerbi:   { title: "Power BI", icon: <SiPowerbi /> },
  tableau:   { title: "Tableau", icon: <SiTableau /> },
  sql:       { title: "SQL", icon: <SiPostgresql /> },
  sap:       { title: "SAP ERP", icon: <SiSap /> },
  excel:     { title: "Excel", icon: <SiMicrosoftexcel /> },
  n8n:       { title: "n8n", icon: <Workflow className="w-4 h-4" /> },
  ai:        { title: "AI", icon: <SiOpenai /> },
  fastapi:   { title: "FastAPI", icon: <SiFastapi /> },
  streamlit: { title: "Streamlit", icon: <SiStreamlit /> },
  lovable:   { title: "Lovable", icon: <Workflow className="w-4 h-4" /> },
  figma:     { title: "Figma", icon: <SiFigma /> },
  research:  { title: "Product Discovery", icon: <Globe className="w-4 h-4" /> },
  data:      { title: "Market Research", icon: <Database className="w-4 h-4" /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
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
    src: `https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80`,
    skills: {
      frontend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.excel],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sap],
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
    skills: {
      frontend: [PROJECT_SKILLS.tableau],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sql],
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

    // ─── RavenStack Customer Success Analysis ───────────────────────────────────
  {
    id: "ravenstack-cs",
    category: "Customer Success Analytics",
    title: "RavenStack Customer Success Analysis",
    src: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`,
    skills: {
      frontend: [PROJECT_SKILLS.tableau, PROJECT_SKILLS.excel],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sql],
    },
    live: "https://github.com/jovinks18/ravenstack-cs-analysis",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            B2B SaaS Churn & Customer Health Framework
          </TypographyP>

          <TypographyP className="font-mono">
            RavenStack is a Customer Success analytics project built on synthetic B2B SaaS churn data. The goal
            was to understand the role of a Customer Success personnelplays in preventing churn. The question an individual
            in Customer Success would actually ask: which accounts are at risk,
            how much ARR is exposed, what is driving churn, and what should the CS team do next?
          </TypographyP>

          <TypographyP className="font-mono">
            I joined account, subscription, product usage, support ticket, and churn-event data into one
            account-level view, then designed a Green / Yellow / Red customer health framework using usage,
            support, tenure, engagement, and commercial signals.
          </TypographyP>

          <TypographyP className="font-mono">
            The main finding was that behavioral health signals alone had weak predictive lift because most
            churned ARR was driven by product, pricing, budget, and competitive reasons. The strongest operating
            opportunity was a <strong>79% reactivation rate</strong>, suggesting win-back should become a
            structured CS motion instead of an accidental outcome.
          </TypographyP>

          <TypographyP className="font-mono font-semibold">Key outputs:</TypographyP>
          <TypographyP className="font-mono">
            Executive summary, customer health framework, QBR deck for a high-risk Enterprise account, and a CS
            operating model recommending renewal-stage intervention, Enterprise relationship management, pooled
            SMB coverage, and a quarterly churn-evidence brief for Product and Finance.
          </TypographyP>

          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
    // ─── Structured Schema Compiler ─────────────────────────────────────────────
  {
    id: "schema-compiler",
    category: "Local AI Infrastructure",
    title: "Structured Schema Compiler",
    src: `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80`,
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.ai],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    live: "https://github.com/jovinks18/local-schema-compiler",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Offline SLM Extraction Engine
          </TypographyP>

          <TypographyP className="font-mono">
            Structured Schema Compiler is a local-first AI extraction engine that turns messy natural language
            inputs — resumes, chat logs, emails, and unstructured matrices — into deterministic,
            schema-validated JSON.
          </TypographyP>

          <TypographyP className="font-mono">
            I built a lightweight Streamlit workspace connected to a FastAPI routing layer, using Instructor
            and Pydantic to enforce structured outputs before passing requests to a local Ollama model.
          </TypographyP>

          <TypographyP className="font-mono">
            The project was designed around privacy, repeatability, and cost control: all inference runs locally,
            avoiding cloud LLM token costs while keeping sensitive enterprise data off external APIs.
          </TypographyP>

          <TypographyP className="font-mono font-semibold">Key architecture:</TypographyP>
          <TypographyP className="font-mono">
            Streamlit UI for input and review, FastAPI local gateway for routing, Instructor and Pydantic for
            schema validation, and Ollama with llama3.2 for offline small-language-model inference.
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
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.ai],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.fastapi],
    },
    live: "https://github.com/jovinks18/vocal-pantry",
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
            Users can type or speak their requests via microphone, transcribed by OpenAI Whisper, with replies
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

  // ─── International Student Housing ──────────────────────────────────────────
  {
    id: "student-housing",
    category: "AI Product Strategy",
    title: "International Student Housing Copilot",
    src: `https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80`,
    skills: {
      frontend: [PROJECT_SKILLS.lovable, PROJECT_SKILLS.figma],
      backend: [PROJECT_SKILLS.ai, PROJECT_SKILLS.research, PROJECT_SKILLS.data],
    },
    live: "https://live-in.lovable.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Native Housing Search for International Students
          </TypographyP>

          <TypographyP className="font-mono">
            This project explored how international students search for off-campus housing before arriving
            in a new country — a journey shaped by trust gaps, unclear rental terms, remote decision-making,
            deposit risk, and timing pressure.
          </TypographyP>

          <TypographyP className="font-mono">
            I used product discovery, market research, and journey mapping to define the core user needs:
            comparing neighborhoods, understanding lease terms, avoiding scams, estimating true monthly
            costs, and making confident housing decisions remotely.
          </TypographyP>

          <TypographyP className="font-mono">
            I then prototyped an AI housing copilot concept in Lovable, designed to help students translate
            listings, explain rental tradeoffs, surface risk signals, and match housing options to budget,
            commute, lifestyle, and university constraints.
          </TypographyP>

          <TypographyP className="font-mono font-semibold">Key product decisions:</TypographyP>
          <TypographyP className="font-mono">
            Problem-first discovery before solution design, trust and safety as the core wedge, AI as a
            decision-support layer, and a guided search experience instead of another generic listing platform.
          </TypographyP>

          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];

export default projects;