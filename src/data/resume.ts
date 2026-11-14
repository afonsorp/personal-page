export const resume = {
  name: "Pedro Afonso",
  location: "Porto, Portugal",
  email: "afonsorpl@gmail.com",
  linkedin: "https://www.linkedin.com/in/afonsorp",

  bio: "Software developer with over 17 years in the industry. I started in frontend — JavaScript, AngularJS, React — and today lead a six-person development team at Azakaw. My role combines delivery ownership with hands-on work: backlog grooming, sprint planning, and keeping work tested and release-ready, while still writing code and reviewing pull requests. I run 1:1s, mentor developers on the frontend, and take part in technical interviews.",

  experience: [
    {
      company: "azakaw",
      role: "Team Lead",
      start: "2026-07",
      end: null,
      location: "Porto, Portugal",
      highlights: [
        "Lead a six-person software team",
        "Own the team's backlog: ticket grooming, estimation, writing and assigning work",
        "Ensure on-time delivery; keep work tested and release-ready",
        "Run 1:1s and give feedback; mentor developers on the frontend",
        "Take part in technical interviews",
        "Stay hands-on: write code and review pull requests",
        "Manage test environments",
      ],
      stack: ["Angular", "TypeScript"],
    },
    {
      company: "azakaw",
      role: "Senior Frontend Developer",
      start: "2024-10",
      end: "2026-07",
      location: "Porto, Portugal",
      highlights: [],
      stack: ["Angular", "TypeScript"],
    },
    {
      company: "Lidya",
      url: "https://www.lidya.info",
      role: "Senior Frontend Developer",
      start: "2018-12",
      end: "2024-08",
      location: "Porto, Portugal",
      highlights: [
        "Developed the frontend of Lidya products for both internal and public use",
      ],
      stack: ["React", "JavaScript", "HTML", "LESS"],
    },
    {
      company: "DZone Software",
      role: "Front End Developer",
      start: "2014-12",
      end: "2018-12",
      location: "Raleigh, NC (remote)",
      highlights: [
        "Specialized in front-end development for the DZone Portal",
        "Built engaging and dynamic user experiences",
      ],
      stack: ["AngularJS", "HTML", "SCSS", "JavaScript"],
    },
    {
      company: "TeamEffort",
      role: "IT Analyst Programmer",
      start: "2009-05",
      end: "2014-11",
      location: "Aveiro, Portugal",
      highlights: [
        "Developed the Altaia project (PT Inovação) using WebFocus",
        "Built interfaces with HTML, CSS, JavaScript, and jQuery",
      ],
      stack: ["HTML", "CSS", "JavaScript", "jQuery", "WebFocus"],
    },
  ],

  education: [
    {
      institution: "University of Minho",
      degree: "Technologies and Information Systems",
      start: "2003",
      end: "2009",
    },
    {
      institution: "Universidad de Salamanca",
      degree: "Informatics (Erasmus)",
      start: "2007",
      end: "2008",
    },
  ],

  skills: {
    languages: ["TypeScript", "JavaScript"],
    frontend: ["React", "Angular", "AngularJS", "HTML", "CSS", "SCSS", "LESS"],
    tools: ["Git", "Tailwind CSS"],
    leadership: [
      "Team management",
      "Backlog grooming",
      "Sprint planning",
      "Mentoring",
      "Technical interviews",
    ],
  },

  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Spanish", level: "Conversational" },
  ],
} as const;

export type Resume = typeof resume;
export type ExperienceEntry = (typeof resume.experience)[number];
export type EducationEntry = (typeof resume.education)[number];
