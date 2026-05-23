export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "phone";
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/ninexmobility", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/willworland", icon: "linkedin" },
  { label: "Email", href: "mailto:me@willworland.com", icon: "email" },
  { label: "Phone", href: "tel:+19162585651", icon: "phone" },
];

export const contact = {
  phoneDisplay: "916.258.5651",
  phoneHref: "tel:+19162585651",
  emailPrimary: "me@willworland.com",
  emailSupport: "help@oakandashtech.com",
} as const;
