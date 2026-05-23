export interface ProjectCard {
  title: string;
  timeframe?: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  coverImage: { src: string; alt: string };
}

export const projects: ProjectCard[] = [
  {
    title: "Oak & Ash Tech",
    description:
      "Technology consulting and services company offering IT solutions, device management, and support for businesses.",
    tech: ["Consulting", "IT Services", "MDM", "Business"],
    link: "https://oakandashtech.com",
    coverImage: {
      src: "/oakandashtech-screenshot.png",
      alt: "Oak & Ash Tech website screenshot",
    },
  },
  {
    title: "MobiLauncher",
    timeframe: "Beta",
    description:
      "Branded Android kiosk launcher for fleets with flat per-tenant pricing. Deploys standalone or under SOTI, Intune, Workspace ONE, Scalefusion, Hexnode, and Esper.",
    tech: ["Android", "Kiosk", "MDM", "WebView", "SaaS"],
    link: "https://mobilauncher.com",
    coverImage: {
      src: "/mobilauncher-screenshot.png",
      alt: "MobiLauncher landing page",
    },
  },
  {
    title: "phacilitate",
    description:
      "A focused workspace for facilitators running support groups and small meetings — DocPaqs, dual countdown timers, presentation mode, and confidential notes that can auto-delete.",
    tech: ["Web App", "iPad", "Productivity", "Facilitation"],
    link: "https://phacilitate.app",
    coverImage: {
      src: "/phacilitate-screenshot.png",
      alt: "phacilitate workspace landing page",
    },
  },
  {
    title: "Neuro Nomad Studios",
    description:
      "Creative studio focused on design, development, and digital experiences.",
    tech: ["Design", "Development", "Creative", "Studio"],
    link: "https://neuronomadstudios.com",
    coverImage: {
      src: "/neuronomadstudios-screenshot.png",
      alt: "Neuro Nomad Studios website screenshot",
    },
  },
  {
    title: "HF Mini US GENERAL Toolbox",
    timeframe: "< 2hr",
    description:
      "Customized Harbor Freight 'US GENERAL' mini toolbox for the car with foam cutouts and essentials.",
    tech: ["Automotive", "Organization", "Tools", "DIY"],
    link: "/projects/hf-mini-toolbox",
    coverImage: {
      src: "/hf-toolbox/IMG_2034.jpg",
      alt: "HF mini toolbox exterior with decals",
    },
  },
];
