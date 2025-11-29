/**
 * Type-safe resume data structure.
 * Supports flexible section layouts (jobs, education, skills, etc.).
 */

export interface ResumeItem {
  heading?: string; // Job title, degree, skill category
  subheading?: string; // Company, school
  meta?: string; // Date range, location
  description?: string; // Brief overview
  bullets?: string[]; // Key achievements or details
}

export interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

export interface Resume {
  name: string;
  title: string;
  summary: string;
  sections: ResumeSection[];
}

export const resume: Resume = {
  name: "Will Worland",
  title: "Senior Engineer · Enterprise Mobility / UEM · Automation",
  summary:
    "Seasoned hybrid engineer and enterprise mobility/UEM specialist with 25+ years across endpoint management, automation, and secure device lifecycle at scale. Proven record leading cross-team programs, building CI/CD and deployment workflows, and translating ambiguous requirements into reliable, on-time deliverables. Former client platform engineer (Uber) and long-time enterprise mobility practitioner, now focused on solution automation and secure Android lockdown experiences. Known for clear communication, documentation quality, and collaborative execution across product, engineering, security, and operations.",

  sections: [
    {
      title: "Experience",
      items: [
        {
          heading: "Engineer III, Software",
          subheading: "Enterprise Mobility — Solutions Engineering",
          meta: "Feb 2024 – Present • St. Louis, MO (remote/Sacramento, CA)",
          description:
            "Deliver internal automation initiatives and workplace engineering solutions end-to-end, owning scope, milestones, and cross-team integration.",
          bullets: [
            "Product-manage and engineer a secure Android 'MobiControl' `lockdown` launcher used across rugged devices: requirements, roadmap, policy alignment, release management, and support enablement.",
            "Build and maintain a CI/CD application packaging pipeline for repeatable app deployments, integrating EMM/MDM APIs, artifact versioning, test gates, and rollout orchestration.",
            "Lead process improvements, write design/ops documentation, and publish structured status updates, risks, and mitigations; mentor engineers and champion documentation quality.",
            "Impact: Reduced deployment timelines and strengthened Android fleet reliability through policy hardening and lifecycle automation.",
          ],
        },
        {
          heading: "Engineer III, Systems",
          subheading: "Enterprise Mobility — Mobility Engineering",
          meta: "Apr 2019 – Feb 2024 • St. Louis, MO & (remote/Sacramento, CA)",
          description:
            "Field technology engineer focused on mobility platform reliability and rugged Android experiences.",
          bullets: [
            "Owned Android lockdown launcher development, releases, policy hardening, and support enablement.",
            "Act as Android Enterprise SME: evaluate devices/OS updates, coordinate security patch cycles, and advise on Managed Google Play, provisioning flows, and compliance posture.",
            "Coordinated device evaluations, security patch cycles, and compliance posture across teams.",
          ],
        },
        {
          heading: " Engineer II, Systems",
          subheading: "Uber — Client Platform Engineering",
          meta: "Aug 2017 – Jan 2019 • San Francisco, CA",
          bullets: [
            "Owned architecture, upgrades, and deployment processes for VMware AirWatch.",
            "Administered zero-touch enrollment and provisioning workflows for corporate mobile devices.",
            "Designed and implemented BYOD program, compliance and deployment.",
            "Coordinated with cross-platform teams to ensure consistent device posture.",
          ],
        },
        {
          heading: "Consulting Engineer",
          subheading:
            "Southwest Airlines (via Genesis10) — Enterprise Mobility Foundation",
          meta: "Nov 2016 – Jul 2017 • Dallas, TX",
          bullets: [
            "Architected and delivered EMM solutions for rugged and corporate Android deployments.",
            "Served as SME for Android/Android for Work & G Suite; led enterprise app signing and incident response.",
          ],
        },
      ],
    },
    {
      title: "Additional Mobility / IT Roles (selected)",
      items: [
        {
          heading: "Ascent Services Group → Albertsons/Safeway",
          meta: "2019 (NorCal)",
          description:
            "Implemented Avalanche MDM with Zebra TC51s; built deployment/management plans and coordinated POS app rollout.",
        },
        {
          heading: "Liquid Environmental Solutions",
          meta: "2016 (Dallas, TX)",
          description:
            "Led first PeopleNet ↔ SOTI MobiControl integration; authored runbook and coordinated service-network rollout.",
        },
        {
          heading: "Copart",
          meta: "2014 (Dallas, TX)",
          description:
            "Scoped global mobility initiative; evaluated devices, platforms, and WLAN upgrades; vendor management.",
        },
        {
          heading: "Enterprise Mobile",
          meta: "2010 – 2014 (Plano, TX)",
          description:
            "Administered AirWatch/MobileIron/SOTI/BES; designed profiles/policies; managed app signing; built knowledge systems.",
        },
        {
          heading: "Samsung Mobile",
          meta: "1998 – 2006 (Plano, TX)",
          description:
            "Delivered technical training, authored policies/procedures, and managed contact-center IT projects (LMS, portals, reporting).",
        },
      ],
    },
    {
      title: "Skills",
      items: [
        {
          heading: "Program Leadership",
          description:
            "Roadmaps, milestones & dependencies, risk/issue management, executive-ready reporting",
        },
        {
          heading: "Enterprise Mobility",
          description:
            "Android Enterprise, Managed Google Play, VMware AirWatch, MobileIron, SOTI MobiControl, Intune",
        },
        {
          heading: "Automation & DevOps",
          description:
            "Jenkins, Python, PowerShell, REST APIs, AWS/Azure, Git, artifact/versioning systems",
        },
        {
          heading: "Documentation & Collaboration",
          description:
            "Jira/Confluence, MS Office/PowerPoint, runbooks/KBs, architecture diagrams, RCAs",
        },
        {
          heading: "Security & Compliance",
          description:
            "OS/app update orchestration, policy hardening, provisioning flows, fleet health metrics",
        },
      ],
    },
    {
      title: "Key Projects",
      items: [
        {
          heading: "Secure Android Lockdown Launcher",
          description:
            "Kiosk-style launcher on rugged Android devices, aligning UX, device capabilities, and security policies across multiple business use cases.",
        },
        {
          heading: "CI/CD Packaging & Deployment Pipeline",
          description:
            "Pipeline to build/sign apps, version artifacts, run automated checks, and deploy via MDM/EMM APIs with staged rollout and auditing.",
        },
      ],
    },
    {
      title: "Education & Certifications",
      items: [
        { heading: "Apple Certified Trainer (iPhone/CPU)" },
        { heading: "VMware AirWatch Enterprise Mobility - Professional" },
        {
          heading: "MobileIron Certified - Administrator & Security Specialist",
        },
        { heading: "Python, Ruby, Git, Shell - (Codecademy)" },
        { heading: "Wireless Telecommunications — Collin College" },
      ],
    },
    {
      title: "Awards & Leadership",
      items: [
        {
          description:
            "Recognized as internal thought/practice leader for MDM strategy, mentoring, and documentation quality.",
        },
        {
          description:
            "Regular mentor for junior engineers and contributor to cross-team enablement and process improvement.",
        },
      ],
    },
  ],
};
