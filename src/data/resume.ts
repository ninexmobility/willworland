export interface ResumeItem {
  heading?: string;
  subheading?: string;
  meta?: string;
  description?: string;
  bullets?: string[];
}

export interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

export interface Resume {
  name: string;
  title: string;
  location: string;
  summary: string;
  sections: ResumeSection[];
}

export const resume: Resume = {
  name: "Will Worland",
  title: "Senior Mobility & Endpoint Engineer · UEM Architecture · Technical Lead",
  location: "Sacramento, CA (remote)",
  summary:
    "Mobility engineer and technical lead with 15+ years designing, securing, and operating enterprise UEM/MDM programs for fleets of 60,000 to 150,000 devices, on top of 25+ years in IT infrastructure and Windows-based systems. Owned platform architecture, engineering standards, change and release processes, and Tier 3 escalations across BlackBerry (BES), MobileIron, Workspace ONE (AirWatch), SOTI MobiControl, Microsoft Intune, and Jamf. Ran Apple zero-touch enrollment (ADE/DEP) at Uber, operated a 10,000-license on-premises MobileIron environment, and served as the mobility point of contact for ISO and SOX audits. Delivered the certificate (SCEP/PKCS) and security-baseline layer under those programs: device identity, passcode, encryption, and compliance enforcement. Mentors engineers and writes the standards and runbooks teams deploy from. Automates UEM operations with REST APIs, Python, PowerShell, and Jenkins.",

  sections: [
    {
      title: "Skills",
      items: [
        {
          heading: "UEM / MDM platforms",
          description:
            "BlackBerry Enterprise Server (BES), Good Technology, MobileIron (Core, Sentry, Atlas; on-premises, 10,000 licenses), VMware Workspace ONE (AirWatch), SOTI MobiControl, Microsoft Intune, Jamf, IBM MaaS360, Ivanti Wavelink Avalanche",
        },
        {
          heading: "Apple enrollment",
          description:
            "Apple Business Manager, Automated Device Enrollment (DEP), APNs certificate management, supervised iOS and macOS zero-touch provisioning, Apple Certified Trainer",
        },
        {
          heading: "Microsoft",
          description:
            "Intune compliance and device-trust decisions, Entra ID / Conditional Access, Exchange and ActiveSync, Windows Server 2008+, IIS, Active Directory",
        },
        {
          heading: "Identity and certificates",
          description:
            "SCEP and PKCS certificate enrollment and delivery for device identity (Wi-Fi, VPN, email), APNs and MDM certificate lifecycle, enterprise application signing, certificate management for RF scanner fleets, SSO and device-trust integration",
        },
        {
          heading: "Security",
          description:
            "Mobile platform and device security engineering, security baselines (passcode, encryption, device restrictions), compliance policy design and enforcement, OS and app security-update strategy (iOS and Android), ISO and SOX audit evidence",
        },
        {
          heading: "Change, release, configuration",
          description:
            "Release and change processes for mobile apps and OS updates, CI/CD packaging pipelines (Jenkins), version-controlled configuration, runbooks and standards, Scrum",
        },
        {
          heading: "Automation",
          description:
            "REST APIs, Python, PowerShell, Bash, JavaScript/TypeScript, AWS and Azure services",
        },
      ],
    },
    {
      title: "Experience",
      items: [
        {
          heading: "Founder & Principal Engineer",
          subheading: "Oak & Ash Technology",
          meta: "Jan 2026 – Present • Sacramento, CA • Remote and on-site",
          description:
            "IT consulting and field engineering practice for hospitality, retail, and multi-site operators.",
          bullets: [
            "Endpoint and UEM consulting: MDM platform selection and Apple Business / Android Enterprise enrollment design; published a vendor-neutral analysis of Apple's 2026 free-MDM change.",
            "Wireless and network engineering: Wi-Fi site surveys (Hamina Onsite, Oscium), AP and channel plans, post-install validation, and network edge deployments on Meraki, Fortinet, Ubiquiti, and Aruba gear.",
            "Level III cable certification on a calibrated Fluke DSX-5000 with per-link pass/fail reports.",
            "Delivered 80+ dispatched field projects, each closed out with documentation, port maps, and runbook-style notes.",
          ],
        },
        {
          heading: "Engineer III, Mobility Engineering",
          subheading: "Enterprise Mobility (Enterprise Holdings)",
          meta: "Apr 2019 – Jan 2026 • Remote",
          description:
            "Senior engineer on an 8-person mobility engineering team supporting about 60,000 managed devices worldwide. Moved to the Automation Solutions team (Feb 2024 – Jan 2026) to turn mobility projects into shared engineering services.",
          bullets: [
            "Set MDM strategy and engineering standards for internal customers; evaluated new hardware and software for the mobility program and wrote the runbooks the team deployed from.",
            "Platform owner for SOTI MobiControl and Android Enterprise / Managed Google Play: enrollment, compliance and policy, kiosk and lockdown profiles, and app lifecycle.",
            "Designed and maintained the fleet's security baseline (passcode, encryption, device restrictions, compliance enforcement) and the certificate enrollment and delivery that device identity depends on, including SCEP/PKCS profiles.",
            "Ran security-update strategy for Android OS and for internal and public apps: testing, staging, and release cadence across the fleet.",
            "Mobility point of contact for annual ISO audits: produced device-control evidence, walked auditors through enrollment, policy, and patch processes, and closed findings.",
            "Owned MobiLauncher, a production TypeScript/JavaScript lockdown launcher for the managed Android fleet, running in a Chrome WebView under SOTI MobiControl.",
            "Built and maintained a CI/CD application-packaging pipeline for internal apps; automated EMM operations with REST APIs, PowerShell, Python, Jenkins, and AWS/Azure services.",
            "Mentored and coached junior engineers; ran the team's agile delivery as a Certified ScrumMaster.",
          ],
        },
        {
          heading: "Client Platform Engineer II, Mobility (EMM)",
          subheading: "Uber",
          meta: "Aug 2017 – Jan 2019 • San Francisco Bay Area",
          bullets: [
            "Mobility engineer for a 150,000-device global fleet; provided thought leadership on mobility strategy and platform standards.",
            "Owned architecture and engineering of the AirWatch (Workspace ONE) environment.",
            "Administered Apple Device Enrollment Program (DEP) and Samsung Knox Mobile Enrollment for zero-touch provisioning of iOS and Samsung Android devices; maintained the Apple APNs and enrollment certificates behind them.",
            "Engineered and maintained mobile platform and device security controls: baseline and compliance policy, and SCEP/PKCS certificate enrollment and delivery for device identity (Wi-Fi, VPN, email).",
            "Wrote Python automation against the AirWatch REST API to replace manual console work, and built EMM analytics and reporting for fleet and compliance visibility.",
          ],
        },
        {
          heading: "Consulting Engineer, Enterprise Mobility Foundation",
          subheading: "Genesis10 (client: Southwest Airlines)",
          meta: "Nov 2016 – Jul 2017 • Dallas, TX",
          bullets: [
            "Architected and delivered EMM solutions for the Enterprise Mobility Foundation Team and consulted on every team project.",
            "Subject matter expert for Android, Android for Work, and G Suite; advised on hardware and software selection.",
            "Owned enterprise application signing for internal apps.",
            "Resolved high-severity (T4) EMM problem reports.",
          ],
        },
        {
          heading: "Mobility Consultant",
          subheading: "Ascent Services Group (client: Albertsons/Safeway)",
          meta: "Feb 2019 – Mar 2019 • Livermore, CA",
          bullets: [
            "Implemented Ivanti Wavelink Avalanche MDM for Zebra TC51 Android devices, deployed point-of-sale applications, and delivered the deployment and ongoing-management plan.",
          ],
        },
        {
          heading: "Mobility Applications & Support Engineer",
          subheading: "Liquid Environmental Solutions",
          meta: "May 2016 – Nov 2016 • Irving, TX",
          bullets: [
            "Stood up SOTI MobiControl for about 300 service vehicles nationwide and delivered the company's first PeopleNet + MobiControl integration.",
            "Ran the full implementation and documented it in a runbook used for ongoing operations.",
          ],
        },
        {
          heading: "Solutions Engineer, End User Computing – Mobility",
          subheading: "Copart",
          meta: "Sep 2014 – Dec 2014 • Dallas/Fort Worth, TX",
          bullets: [
            "Researched and recommended the standard device platform and MDM for a global mobility initiative.",
            "Led a campus WLAN review: site audits, vendor heat mapping, and AP and controller standards.",
          ],
        },
        {
          heading: "Mobility Solutions Engineer and MDM Engineer",
          subheading: "Enterprise Mobile",
          meta: "Oct 2010 – Sep 2014 • Plano, TX",
          description:
            "Mobility Solutions Engineer (Dec 2013 – Sep 2014), on-site for a major retail customer:",
          bullets: [
            "Administered a 10,000-license on-premises MobileIron environment, including Sentry, Atlas, and Lotus Traveler integration, certificate enrollment and delivery, and compliance policy.",
            "Point of contact for ISO and SOX audits of the customer's mobile environment: supplied access, configuration, and change-control evidence and answered auditor questions.",
            "Maintained Wavelink Avalanche for rugged Honeywell and Motorola/Symbol RF scanners: certificate management, profile design, and documentation.",
            "Administered AirWatch alongside MobileIron and trained customer staff on both.",
            "MDM Engineer (Oct 2010 – Dec 2013): functional lead for Tier 2/3 mobile device support on a 20+ person team serving enterprise customers with fleets from a few hundred to 50,000–100,000 devices.",
            "Administered AirWatch, MobileIron, SOTI MobiControl, and Sybase Afaria for multiple clients, including certificate and security-policy configuration; managed BlackBerry Enterprise Server (BES) and ActiveSync/Exchange account deployments.",
            "Designed and administered the team's knowledge base as functional lead for knowledge management.",
          ],
        },
      ],
    },
    {
      title: "Additional Experience",
      items: [
        {
          heading: "Metro Vapors, IT & E-Commerce Lead",
          meta: "Jan 2015 – Aug 2017 (concurrent with contract roles)",
          description:
            "Ran IT for a small retailer (Mac, PC, iPad, Square POS) and led its Volusion-to-BigCommerce migration.",
        },
        {
          heading: "Volt Technical Resources (client: Apple)",
          meta: "Sep 2008 – Aug 2009",
          description:
            "Certified Apple Trainer delivering iPhone Tier 1/2 and CPU Tier 1 curriculum to classes of 25; led a 40-technician iPhone support team, then a 15–20 person Tier 2 team; redesigned the web-based IT ticketing system and administered the Openfire (Jabber) server.",
        },
        {
          heading: "Your Personal Nerd, Independent IT Consultant",
          meta: "Jul 2007 – Oct 2010",
          description: "IT support and consulting for small businesses and households.",
        },
        {
          heading: "Samsung Mobile",
          meta: "Sep 1998 – Oct 2006",
          description:
            "Contact Center Operations Specialist and Telephony Administrator (led SAP CIC, SumTotal LMS, and knowledge-portal implementations), then Wireless Terminals Technical Training Specialist (built CDMA/AMPS/GSM training and the support team's policy and procedures manual), after starting as a Level II Wireless Support Technician.",
        },
      ],
    },
    {
      title: "Education & Certifications",
      items: [
        {
          heading: "Credentialed Mobile Device Security Professional (CMDSP)",
          description:
            "Contributor to the CMDSP exam development committee: wrote and audited exam questions, recruited practitioner contributors, and represented the testing committee to the Board of Directors.",
        },
        { heading: "Google, Android Enterprise Architecture & Implementation (earned 2020)" },
        { heading: "SOTI Academy, SOTI MobiControl v14 and v15 Expert series (earned 2019)" },
        { heading: "VMware AirWatch Enterprise Mobility Associate and Professional (earned 2017)" },
        {
          heading:
            "MobileIron Certified Administrator and Sentry Authentication & Security Specialist (earned 2013)",
        },
        { heading: "Apple: Certified Apple Care Trainer (2009); ACN Mobile Technical Competency (2011)" },
        { heading: "Collin College, Wireless Telecommunications coursework (2002); Codecademy, Python (2018)" },
      ],
    },
  ],
};
