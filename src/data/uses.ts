/**
 * Type-safe /uses page data.
 * Inspired by uses.tech — tools, hardware, and software I rely on.
 */

export interface UsesCategory {
  title: string;
  description?: string;
  items: UsesItem[];
}

export interface UsesItem {
  name: string;
  description: string;
  url?: string;
}

export const usesData: UsesCategory[] = [
  {
    title: "Editor, Terminal & Extensions",
    description:
      "I use VS Code as my primary editor. For .NET/C# I favor MS Visual Studio, and for React projects I sometimes use JetBrains WebStorm.",
    items: [
      {
        name: "Visual Studio Code",
        description: "Primary editor for most projects.",
        url: "https://code.visualstudio.com/",
      },
      {
        name: "MS Visual Studio",
        description: "Preferred IDE for .NET and C# work.",
        url: "https://visualstudio.microsoft.com/",
      },
      {
        name: "JetBrains WebStorm",
        description: "Occasional choice for React projects.",
        url: "https://www.jetbrains.com/webstorm/",
      },
      {
        name: "VS Code Extensions",
        description:
          "One Dark Pro Dark Theme, npm Intellisense, Path Intellisense, Auto Import, Auto Rename Tag, Code Spell Checker, Indent Rainbow, Code Snap.",
      },
    ],
  },

  {
    title: "Typography",
    items: [
      {
        name: "Roboto",
        description: "Go-to typeface from Google Fonts for most projects.",
        url: "https://fonts.google.com/specimen/Roboto",
      },
    ],
  },

  {
    title: "Terminal Setup",
    items: [
      {
        name: "iTerm2 + Oh-My-Zsh",
        description:
          "iTerm2 with Oh-My-Zsh using the robbyrussell theme and customizations.",
        url: "https://iterm2.com/",
      },
    ],
  },

  {
    title: "Desktop Apps",
    items: [
      {
        name: "Homebrew",
        description: "Package management on macOS via brew.",
        url: "https://brew.sh/",
      },
      {
        name: "Postman",
        description: "API prototyping and testing.",
        url: "https://www.postman.com/",
      },
      {
        name: "Browsers",
        description: "Chrome for daily use; Firefox Developer Edition for testing.",
        url: "https://www.google.com/chrome/",
      },
      {
        name: "Raycast",
        description: "Launcher and window management.",
        url: "https://www.raycast.com/",
      },
      {
        name: "Rocket",
        description: "Fast emoji launcher on macOS.",
        url: "https://matthewpalmer.net/rocket/",
      },
    ],
  },

  {
    title: "Desk Setup — Compute",
    items: [
      {
        name: "Apple MacBook Pro M4 Pro (Personal)",
        description: "Primary personal development machine.",
      },
      {
        name: "Asus ROG Strix 17\" (2018) Core i7 / GTX 1080 8GB",
        description: "Personal Windows machine for gaming and testing.",
      },
      {
        name: "Apple MacBook Pro M3 Max (Work)",
        description: "Primary work laptop.",
      },
      {
        name: "Dell (Core i9) (Work)",
        description: "Work Windows machine for enterprise tooling.",
      },
    ],
  },

  {
    title: "Desk Setup — Peripherals",
    items: [
      {
        name: "Samsung 43\" M70B Series Smart Monitor",
        description: "Main display for work and personal projects.",
      },
      {
        name: "GREATHTEK USB 3.0 4k@60hz 4-to-1 KVM",
        description: "Switching between multiple machines at 4K/60.",
      },
      {
        name: "Kinesis Gaming RGB Edge (tented, custom layout/lighting)",
        description: "Ergonomic keyboard with custom layout and lighting.",
      },
      {
        name: "Logitech MX Ergo",
        description: "Trackball mouse for daily use.",
      },
      {
        name: "Edifier R1280DB Powered Bluetooth Bookshelf Speakers",
        description: "Desktop speakers for music and calls.",
      },
    ],
  },
];
