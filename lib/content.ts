/**
 * Central content file for the portfolio.
 * Edit copy, links, experience, projects, and capabilities here.
 * Anything marked FACTUAL REVIEW must be confirmed before publishing.
 */

export const profile = {
  name: "Humberto Guzmán",
  descriptor: "Technical Program Manager | AI Products and Digital Transformation",
  heroMessage: "I turn complex, cross-functional problems into clear decisions and executable plans.",
  heroSupport:
    "My work sits at the intersection of technology, product, transformation, and delivery. I coordinate specialists, remove impediments, and stay close to execution until the problem is genuinely closed.",
  location: "Mexico City, Mexico",
  availability: "Open to remote opportunities",
  email: "humb3rt066@gmail.com",
  cvPath: "/documents/Humberto_Guzman_Master_CV_2026.pdf",
  // Placeholder canonical URL. Update to the final production domain.
  siteUrl: "https://humbertoguzman.com",
}

export const links = {
  linkedin: "https://www.linkedin.com/in/humbertoguzmangarduno/",
  github: "https://github.com/MaverickW88",
}

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export const aboutParagraphs = [
  "I do my best work when a complex problem sits between teams and someone needs to connect the dots.",
  "My background spans engineering, software, manufacturing, and technical program leadership. At Ford, I coordinate specialists across different areas, create clarity around decisions, remove impediments, and stay involved until the problem is genuinely closed. I often describe my role as helping engineers shine by giving them the structure and support they need to do their best work.",
  "Outside of Ford, I completed an MBA focused on AI and Data and continued developing my experience with AI through independent projects. One example is Job.hunter(), a live MVP that brings resume analysis, job sourcing, fit assessment, and tailored application materials into one workflow.",
  "I am especially interested in the space where technology, product, transformation, and execution come together. I enjoy messy problems that need structure, good judgment, and someone willing to get things moving.",
]

export const capabilities = [
  "Technical Program Management",
  "AI Product Strategy",
  "Product Roadmaps and Prioritization",
  "Cross-Functional Execution",
  "Operational Readiness",
  "Stakeholder Management",
  "Process and Workflow Redesign",
  "Data-Informed Decision-Making",
  "Metrics and KPIs",
  "Risk and Dependency Management",
  "Change Management and Adoption",
  "Continuous Improvement",
]

export const tools = [
  "Generative AI",
  "Large Language Models",
  "Retrieval-Augmented Generation",
  "Vector Search",
  "Prompt Engineering",
  "AI Prototyping",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Firebase",
  "Python",
  "SQL",
  "PostgreSQL",
  "REST APIs",
  "GitHub",
  "Vercel",
  "Jira",
  "Confluence",
  "SharePoint",
  "Microsoft Planner",
]

export type Experience = {
  role: string
  company?: string
  period: string
  location?: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: "Technical Program Manager",
    company: "Ford Motor Company",
    period: "February 2024 to Present",
    location: "Mexico City, Mexico",
    points: [
      "Coordinate multidisciplinary specialists across engineering, manufacturing, plant operations, Supplier Quality, suppliers, and software.",
      "Resolve ambiguous technical problems without direct authority by connecting stakeholders and removing impediments.",
      "Support global product programs and operational readiness across teams.",
      "Resolved a high-risk systems-integration issue affecting approximately 15 preproduction units, clearing the backlog overnight versus an estimated two-to-three-week recovery and establishing permanent supplier controls.",
      "Prevented a potential two-to-three-week prototype build delay by tracing a fragmented international supply network, locating compatible battery-system components in Michigan, and coordinating same-day recovery.",
      "Closed all assigned launch issues in 2025 within required milestones, 8 out of 8, and coordinated early resolution of two additional risks before they became formal program issues.",
      "Drove approximately 80 percent of assigned issues to closure ahead of expected timelines.",
      "Designed and drove adoption of a SharePoint and Microsoft Planner operating system for approximately 10 program managers.",
    ],
  },
  {
    role: "Trial Coordinator / Sign-Off Engineer",
    company: "Ford Motor Company",
    period: "August 2022 to February 2024",
    location: "Mexico City, Mexico",
    points: [
      "Led cross-functional trial planning and execution.",
      "Reduced vehicle trial duration by six weeks through earlier planning and workflow standardization.",
      "Completed 30 First Pass validations before their corresponding release milestones.",
      "Contributed to an estimated 20 percent reduction in component import lead time.",
    ],
  },
  {
    role: "Design & Release Engineer",
    company: "Ford Motor Company",
    period: "April 2022 to August 2022",
    location: "Mexico City, Mexico",
    points: [
      "Led the design and release of Frunk and Cargo Shade components for the Ford Mustang Mach-E.",
      "Coordinated engineering, suppliers, manufacturing, finance, marketing, and UX requirements.",
      "Delivered assigned components on schedule and within budget.",
    ],
  },
]

export const earlierExperience = [
  { role: "Design Engineer", company: "Ford Motor Company" },
  { role: "Software Engineer", company: "netLogistiK" },
  { role: "Marketing Intern", company: "Abbott" },
]

export type Project = {
  title: string
  label: string
  status?: string
  description: string
  details?: string[]
  actions: { label: string; href: string }[]
  needsReview?: boolean
}

export const projects: Project[] = [
  {
    title: "Job.hunter()",
    label: "Independent AI Product",
    status: "Live MVP",
    description:
      "An AI-assisted job-search workflow that brings resume analysis, job sourcing, fit assessment, and tailored application materials into one product.",
    details: [
      "Identified the problem and target user.",
      "Defined the product scope and user journey.",
      "Made prioritization and architecture decisions.",
      "Built and deployed the MVP.",
      "Conducting early user testing and collecting feedback.",
    ],
    actions: [{ label: "View live MVP", href: "https://job-hunter-mvp-omega.vercel.app/" }],
  },
  {
    title: "Zentra",
    label: "MBA Product Strategy Project",
    status: "Live MVP",
    description:
      "A B2B product concept developed as an MBA graduation project, covering user research, MVP definition, prioritization, UX iteration, business-model exploration, and a navigable prototype.",
    details: ["Secondary evidence of product thinking and end-to-end product judgment."],
    actions: [
      { label: "View landing page", href: "https://zentra-landing-page-hazel.vercel.app" },
      { label: "View live MVP", href: "https://zentra-mvp.vercel.app/dashboard" },
    ],
  },
  {
    title: "MBA AI Copilot",
    label: "Independent AI Experiment",
    status: "In Progress",
    description:
      "An AI-enabled knowledge platform built with Next.js, PostgreSQL, vector search, and large language models to centralize MBA materials and support contextual retrieval, synthesis, and decision-making.",
    // Scope updated from the 2026 Master CV. FACTUAL REVIEW: confirm whether to add a public link.
    needsReview: true,
    actions: [],
  },
  {
    title: "Date Planner",
    label: "Independent Product Project",
    status: "Working Prototype",
    description:
      "An Android app that helps couples collect date ideas, draw one at random, and plan them on a shared calendar. Built with Flutter and Firebase and tested on a real device with a small group of users.",
    details: [
      "Defined the problem: date ideas get lost across chats and notes, and couples repeat the same plans.",
      "Scoped the MVP: a shared space joined by code, three date types, a random pick, and a shared calendar in Spanish and English.",
      "Changed the product after the first real-device test by limiting the random pick to everyday ideas.",
      "Ran a security and quality audit and documented the findings and decisions in a project log.",
      "Distributed a test build and set up a feedback survey to validate retention before considering paid features.",
    ],
    // FACTUAL REVIEW: add a "View on GitHub" action here once the Date-Planner repository is public.
    actions: [],
  },
]

export type Education = {
  degree: string
  school: string
  status: string
  note?: string
}

export const education: Education[] = [
  {
    degree: "Master of Business Administration, AI and Data focus",
    school: "Universidad Politécnica de Madrid",
    status: "Completed",
  },
  {
    degree: "Artificial Intelligence Technologies Specialist",
    school: "Tecnológico de Monterrey",
    status: "In Progress",
    note: "Completed microcertificate: AI Fundamentals, Prompt Engineering, and LLM Agents (August 2026)",
  },
  {
    degree: "B.S. in Mechatronics Engineering, Minor in Robotics",
    school: "Tecnológico de Monterrey",
    status: "2016 to 2020",
  },
]

export const principles = [
  {
    title: "Connect the dots",
    body: "Bring technical, operational, and business perspectives into the same decision.",
  },
  {
    title: "Remove impediments",
    body: "Create the conditions specialists need to do their best work.",
  },
  {
    title: "Close the loop",
    body: "Stay involved until the solution works in practice, not just on a slide.",
  },
]
