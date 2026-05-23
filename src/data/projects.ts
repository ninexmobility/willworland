export interface Project {
  title: string;
  timeframe?: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
  coverImage?: { src: string; alt: string };
}

export const projects: Project[] = [
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
