export interface ProjectDetail {
  slug: string;
  title: string;
  summary: string;
  highlights: Array<string | { text: string; subpoints?: string[] }>;
  tags: string[];
  images?: { src: string; alt: string; caption?: string }[];
  inlineImages?: {
    id: string;
    src: string;
    alt: string;
    caption?: string;
    link?: string;
  }[];
}

export const hfMiniToolboxDetail: ProjectDetail = {
  slug: "hf-mini-toolbox",
  title: "HF Mini US GENERAL Toolbox",
  summary:
    'A compact toolbox build for my eldest son\'s 80s Ford Ranger <a href="/stance-truck.jpg" data-inline-image="stance-truck">stance truck</a>. Built as a quick-fix kit he can bring to shows and use to help other enthusiasts. Based on the <a href="https://www.harborfreight.com/mini-steel-toolbox-blue-72436.html" target="_blank" rel="noopener noreferrer">Harbor Freight mini toolbox</a>.',
  highlights: [
    "Added a riveted handle and side locks to make the box mobile friendly.",
    "Decorated w/ custom and generic automotive decals.",
    {
      text: "Tools added",
      subpoints: [
        'Full 1/4" ratchet & socket set in SAE & Metric on Ernst quick-connect socket rails.',
        "Full set of stubby combination wrenches in SAE & Metric.",
        "Generic Phillips & slotted screwdrivers.",
        "Various picks (o-rings, stickers, interior).",
        '4" adjustable wrench.',
        '4" pliers.',
        '4" vise grips.',
        '3" side cutters.',
        "Telescopic magnet grabber.",
        "Telescopic mirror.",
        "Decal scraper.",
        "Electrical tape.",
        "Tire gauge.",
        '4" magnetic parts tray.',
      ],
    },
  ],
  tags: ["Automotive", "Organization", "DIY", "Tools"],
  images: [
    {
      src: "/hf-toolbox/IMG_2034.jpg",
      alt: "HF mini toolbox exterior with decals",
      caption: "Exterior with added handle.",
    },
    {
      src: "/hf-toolbox/IMG_2023.jpg",
      alt: "Toolbox open showing top layer tools",
      caption: "Top layer - custom logo and hand tools.",
    },
    {
      src: "/hf-toolbox/IMG_2029.jpg",
      alt: "View of top layer and first drawer withe wrenches",
      caption: "Top layer - 1st drawer with wrenches.",
    },
    {
      src: "/hf-toolbox/IMG_2028.jpg",
      alt: "View of top layer second drawer showing sockets, screwdrivers, picks and tape.",
      caption: "Top layer - 2nd drawer with sockets & drivers.",
    },
    {
      src: "/hf-toolbox/IMG_2030.jpg",
      alt: "Side view - magnetic parts tray and all drawers open.",
      caption: "Side view - all drawers open.",
    },
    {
      src: "/hf-toolbox/IMG_2031.jpg",
      alt: "Mini toolbox showing backside w/ handle on top.",
      caption: "Back view - handle riveted to top.",
    },
    {
      src: "/hf-toolbox/IMG_2034.jpg",
      alt: "Mini toolbox with added handle and magnetic parts tray, closed.",
      caption: "Compact, quick-fix tools ready to go.",
    },
  ],
  inlineImages: [
    {
      id: "stance-truck",
      src: "/stance-truck.jpg",
      alt: "80s Ford Ranger stance truck",
      caption: "The stance truck this kit was built for.",
      link: "https://www.instagram.com/crazygood.jp/",
    },
  ],
};
