export type IContribution = {
  title: string;
  points: string[];
  technologies?: string[];
};

export type IExperience = {
  company: string;
  role: string;
  period: string;
  location: string;
  contributions: IContribution[];
};

export const experiences: IExperience[] = [
  {
    company: "Bizedge",
    role: "Frontend Engineer",
    period: "August 2022 – Present",
    location: "Hybrid, Lagos, Nigeria",
    contributions: [
      {
        title: "Component Development",
        points: [
          "Developing and maintaining front-end components of websites and web applications using HTML, CSS, and JavaScript.",
          "Proficiently employing cutting-edge technologies including ReactJS, Material UI, React-hooks, React-query, jest, and storybook in the creation, testing, and documentation of front-end interfaces.",
        ],
        technologies: [
          "React",
          "Material UI",
          "React Query",
          "Jest",
          "Storybook",
          "Typescript",
        ],
      },
      {
        title: "Data Visualization",
        points: [
          "Utilizing data visualization tools such as ECharts and ReCharts to present data in an insightful and user-friendly manner.",
        ],
        technologies: ["ECharts", "ReCharts"],
      },
      {
        title: "Documentation & Tooling",
        points: [
          "Proficiently documenting components in Storybook and logging critical logic in ClickUp for comprehensive code understanding and efficient debugging.",
          "Proficiently utilizing version control tools such as GIT and project management tools like ClickUp to streamline development processes.",
        ],
        technologies: ["Storybook", "Git", "ClickUp"],
      },
      {
        title: "Team Collaboration",
        points: [
          "Working closely with back-end developers, designers, and other team members to ensure seamless integration of front-end and back-end components.",
        ],
      },
    ],
  },
  {
  company: "Lightway Finance",
  role: "Senior Frontend Engineer",
  period: "March 2024 – January 2026",
  location: "Hybrid, Lagos, Nigeria",
  contributions: [
    {
      title: "Cross-Border FX Customer Platform",
      points: [
        "Architected and built the primary customer-facing FX application from scratch, supporting over ₦100M+ in monthly transaction volume[cite: 19, 20].",
        "Collaborated with UI/UX teams to implement user-centric features and rapid prototypes for seamless currency exchange flows[cite: 21, 22].",
        "Engineered reusable, high-performance components that reduced overall development time for new feature rollouts[cite: 25, 43]."
      ],
      technologies: ["React", "Redux", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "MTN MoMo & Fintech Dashboards",
      points: [
        "Developed specialized dashboards for MTN MoMo, TerraPay, and ClearBank integrations to monitor and manage digital payment flows[cite: 3, 23].",
        "Integrated complex financial APIs to ensure real-time data accuracy and seamless settlement processes[cite: 23, 24].",
        "Implemented data visualization tools like ECharts to provide clear insights into transaction success rates and liquidity[cite: 10, 52]."
      ],
      technologies: ["React", "REST APIs", "ECharts", "Zustand"]
    },
    {
      title: "Internal Admin & Operations Tool",
      points: [
        "Built the internal administrative tool used to manage high-volume transactions, user verification, and financial auditing[cite: 14].",
        "Established frontend architecture, coding standards, and testing strategies to ensure the tool's long-term sustainability and security[cite: 44].",
        "Led regular code reviews and Agile rituals to maintain high code quality across the admin ecosystem[cite: 45]."
      ],
      technologies: ["React", "Material UI", "React Query"]
    },
    {
      title: "Multi-Regional Web Presence (MFB & Canada)",
      points: [
        "Led the development of the Microfinance Bank (MFB) and Canadian market websites, ensuring responsive design and SEO optimization[cite: 71, 72].",
        "Managed multiple project timelines simultaneously, delivering localized web experiences for different regulatory and user requirements.",
        "Ensured cross-browser compatibility and semantic HTML/CSS for a professional, bank-grade online presence[cite: 71, 72]."
      ],
      technologies: ["Next.js", "TypeScript", "SCSS"]
    }
  ]
},
  {
    company: "Lightway Finance",
    role: "Senior Frontend Engineer",
    period: "March 2024 – January 2026",
    location: "Hybrid, Lagos, Nigeria",
    contributions: [
      {
        title: "FX Platform",
        points: [
          "Built 100% of the frontend system from scratch, powering over ₦100M+ in monthly FX transactions.",
          "Collaborated closely with UI/UX teams to rapidly build prototypes and user-centric features.",
          "Implemented reusable, tested components, reducing development time across projects.",
        ],
        technologies: [
          "React",
          "Redux",
          "Zustand",
          "Angular",
          "Next",
          "Express",
          "Node",
          "TypeScript",
          "AML",
        ],
      },
      {
        title: "Payment Integrations",
        points: [
          "Integrated with complex financial systems: MTN MoMo, TerraPay, and ClearBank APIs, enabling seamless digital payments.",
        ],
        technologies: ["REST API", "MTN MoMo", "TerraPay", "ClearBank"],
      },
      {
        title: "Team Leadership",
        points: [
          "Led the frontend engineering team at a cross-border FX company.",
          "Spearheaded frontend architecture decisions, introduced workflows, testing strategies, and coding standards for long-term sustainability.",
          "Regularly led code reviews, Agile/Scrum rituals, and cross-functional product planning meetings.",
        ],
      },
    ],
  },
  {
    company: "Project X",
    role: "Frontend Engineer",
    period: "January 2023 – March 2024",
    location: "Remote",
    contributions: [
      {
        title: "UI Development",
        points: [
          "Collaborating with designers to translate design concepts into functional and interactive user interfaces.",
          "Working closely with backend developers to integrate frontend components with server-side API.",
        ],
        technologies: ["React", "REST API"],
      },
      {
        title: "Data Visualization",
        points: [
          "Utilizing data visualization tools such as ECharts to present data in an insightful and user-friendly manner.",
        ],
        technologies: ["ECharts"],
      },
      {
        title: "Testing",
        points: [
          "Conducted thorough testing using React Testing Library and Jest, and debugging to ensure the reliability and performance of frontend applications.",
        ],
        technologies: ["React Testing Library", "Jest"],
      },
    ],
  },
  {
    company: "Verdant",
    role: "Frontend Engineer",
    period: "January 2023 – March 2024",
    location: "Remote",
    contributions: [
      {
        title: "Frontend Development",
        points: [
          "Developing and maintaining frontend components using React.js, React Query, Redux, Material-UI and other relevant technologies.",
        ],
        technologies: ["React", "React Query", "Redux", "Material-UI"],
      },
      {
        title: "Project Management",
        points: [
          "Participating in the planning, execution, and delivery of software development projects using project management tools like Jira.",
        ],
        technologies: ["Jira"],
      },
      {
        title: "Reporting Tools",
        points: [
          "Actively learning and applying new tools, e.g., JasperSoft for developing reports for Verdant's report systems and Talend for processing and transforming Excel data.",
        ],
        technologies: ["JasperSoft", "Talend"],
      },
    ],
  },
  {
    company: "989 Workspace",
    role: "Front End Engineer",
    period: "September 2022 – July 2023",
    location: "Contract",
    contributions: [
      {
        title: "Web Applications",
        points: [
          "Utilized strong proficiency in React.js to design and develop user interfaces for web applications, ensuring they are responsive, intuitive, and efficient.",
        ],
        technologies: ["React.js"],
      },
      {
        title: "State Management",
        points: [
          "Implemented state management using Redux and Redux Toolkit, ensuring data flow and application state are well-organized and optimized for performance.",
        ],
        technologies: ["Redux", "Redux Toolkit"],
      },
      {
        title: "API & Payments",
        points: [
          "Integrated external data sources and APIs, connecting web applications with the backend REST API for seamless data exchange.",
          "Led the integration of payment gateways like Paystack to facilitate in-app payments, ensuring a secure and user-friendly payment process.",
        ],
        technologies: ["REST API", "Paystack"],
      },
    ],
  },
  {
    company: "GiftFlex",
    role: "Front End Engineer",
    period: "March 2022 – August 2022",
    location: "Contract",
    contributions: [
      {
        title: "Component Library",
        points: [
          "Succeeded in building reusable components using ReactJs and TypeScript.",
          "Wrote clean, semantic HTML and CSS code, ensuring compatibility with multiple browsers and devices.",
        ],
        technologies: ["React", "TypeScript", "HTML", "CSS"],
      },
      {
        title: "Web Development",
        points: [
          "Developed and maintained high-quality, responsive web applications and websites.",
          "Implemented interactive and dynamic features using JavaScript and related frameworks.",
        ],
        technologies: ["JavaScript", "React"],
      },
      {
        title: "UI Implementation",
        points: [
          "Collaborated with UX/UI designers to translate design mockups into functional, visually appealing web interfaces.",
          "Used version control systems such as Git to manage and track changes in code, collaborating with team members.",
        ],
        technologies: ["Git"],
      },
    ],
  },
];
