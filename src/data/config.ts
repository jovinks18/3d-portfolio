const config = {
  title: "Jovin Sivakumar | CS Engineer & Business Strategy",
  description: {
    long: "Explore the portfolio of Jovin Sivakumar, a Computer Science engineer and business graduate specializing in data-driven automation, product strategy, and scalable system solutions. Based in San Francisco with experience across Europe and Asia.",
    short:
      "Portfolio of Jovin Sivakumar: A CS Engineer and business strategist building scalable, data-driven solutions.",
  },
  keywords: [
    "Jovin Sivakumar",
    "Data Analyst",
    "Product Strategy",
    "Supply Chain Automation",
    "Power BI",
    "Python",
    "UC Berkeley Haas",
    "Agentic AI",
    "System Design",
  ],
  author: "Jovin Sivakumar",
  email: "jovin.sivakumar@berkeley.edu",
  site: "https://3d-portfolio-steel-delta-62.vercel.app",

  githubUsername: "jovinks18",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/jovinks18",
    linkedin: "https://www.linkedin.com/in/jovinks/",
    instagram: "https://www.instagram.com/jooficiel18",
    facebook: "#",
    github: "https://github.com/jovinks18",
  },
};
export { config };