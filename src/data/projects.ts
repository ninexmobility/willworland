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
