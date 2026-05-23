import { resume } from "~/data/resume";
import { contact, socials } from "~/data/socials";
import { site } from "~/data/site";

export function toMarkdown(): string {
  const lines: string[] = [];

  lines.push(`# ${resume.name}`);
  lines.push("");
  lines.push(`**${resume.title}**`);
  lines.push("");
  lines.push(
    `${resume.location} · [${contact.emailPrimary}](mailto:${contact.emailPrimary}) · ${contact.phoneDisplay} · [${site.url}](${site.url})`,
  );
  lines.push("");
  lines.push(resume.summary);
  lines.push("");

  for (const section of resume.sections) {
    lines.push(`## ${section.title}`);
    lines.push("");

    for (const item of section.items) {
      if (item.heading) {
        lines.push(`### ${item.heading}`);
      }
      if (item.subheading) {
        lines.push(`*${item.subheading}*`);
      }
      if (item.meta) {
        lines.push(`> ${item.meta}`);
      }
      if (item.heading || item.subheading || item.meta) {
        lines.push("");
      }
      if (item.description) {
        lines.push(item.description);
        lines.push("");
      }
      if (item.bullets?.length) {
        for (const b of item.bullets) lines.push(`- ${b}`);
        lines.push("");
      }
    }
  }

  lines.push("---");
  lines.push("");
  lines.push(
    `Generated from [${site.url}/resume](${site.url}/resume) — single source of truth.`,
  );
  lines.push("");

  return lines.join("\n");
}

export function toPlainText(): string {
  const lines: string[] = [];

  const rule = (char = "─", n = 64) => char.repeat(n);

  lines.push(resume.name.toUpperCase());
  lines.push(resume.title);
  lines.push(
    `${resume.location} · ${contact.emailPrimary} · ${contact.phoneDisplay}`,
  );
  lines.push(site.url);
  lines.push("");
  lines.push(rule("="));
  lines.push("");
  lines.push(wrap(resume.summary, 80));
  lines.push("");

  for (const section of resume.sections) {
    lines.push("");
    lines.push(section.title.toUpperCase());
    lines.push(rule("─", section.title.length));
    lines.push("");

    for (const item of section.items) {
      if (item.heading) lines.push(item.heading);
      if (item.subheading) lines.push(`  ${item.subheading}`);
      if (item.meta) lines.push(`  ${item.meta}`);
      if (item.description) {
        lines.push("");
        lines.push(wrap(item.description, 80));
      }
      if (item.bullets?.length) {
        lines.push("");
        for (const b of item.bullets) {
          const wrapped = wrap(b, 76);
          const [first, ...rest] = wrapped.split("\n");
          lines.push(`  • ${first}`);
          for (const r of rest) lines.push(`    ${r}`);
        }
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}

/**
 * JSON Resume schema v1.0.0 — https://jsonresume.org/schema/
 * Maps our internal structure onto the standard schema as faithfully as
 * possible. Items that don't have a clean home in the schema go into
 * the relevant section's `description` field.
 */
export function toJsonResume(): unknown {
  const findSection = (name: string) =>
    resume.sections.find((s) => s.title.toLowerCase().startsWith(name.toLowerCase()));

  const experience = findSection("Experience");
  const additional = findSection("Additional");
  const skills = findSection("Skills");
  const projects = findSection("Key Projects");
  const education = findSection("Education");
  const awards = findSection("Awards");

  const profiles = socials
    .filter((s) => s.icon === "github" || s.icon === "linkedin")
    .map((s) => ({
      network: s.icon === "github" ? "GitHub" : "LinkedIn",
      username: s.href.split("/").filter(Boolean).pop() ?? "",
      url: s.href,
    }));

  return {
    $schema:
      "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: resume.name,
      label: resume.title,
      email: contact.emailPrimary,
      phone: contact.phoneDisplay,
      url: site.url,
      summary: resume.summary,
      location: {
        city: resume.location.split(",")[0]?.trim(),
        region: resume.location.split(",")[1]?.trim(),
        countryCode: "US",
      },
      profiles,
    },
    work: [
      ...(experience?.items.map((item) => ({
        name: item.subheading ?? "",
        position: item.heading ?? "",
        startDate: parseStart(item.meta),
        endDate: parseEnd(item.meta),
        location: parseLocation(item.meta),
        summary: item.description ?? "",
        highlights: item.bullets ?? [],
      })) ?? []),
      ...(additional?.items.map((item) => ({
        name: item.heading ?? "",
        position: "",
        startDate: parseStart(item.meta),
        endDate: parseEnd(item.meta),
        location: parseLocation(item.meta),
        summary: item.description ?? "",
        highlights: [],
      })) ?? []),
    ],
    skills:
      skills?.items.map((item) => ({
        name: item.heading ?? "",
        keywords: (item.description ?? "")
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      })) ?? [],
    projects:
      projects?.items.map((item) => ({
        name: item.heading ?? "",
        description: item.description ?? "",
      })) ?? [],
    education:
      education?.items.map((item) => ({
        institution: item.heading ?? "",
        studyType: "",
        area: "",
      })) ?? [],
    awards:
      awards?.items.map((item) => ({
        title: item.heading ?? "",
        summary: item.description ?? "",
      })) ?? [],
    meta: {
      canonical: `${site.url}/resume.json`,
      version: "v1.0.0",
      lastModified: new Date().toISOString(),
    },
  };
}

function parseStart(meta?: string): string {
  if (!meta) return "";
  const m = meta.match(/^([A-Za-z]+ \d{4}|\d{4})/);
  return m ? toIso(m[1]) : "";
}

function parseEnd(meta?: string): string {
  if (!meta) return "";
  if (/Present/i.test(meta)) return "";
  const m = meta.match(/[–-]\s*([A-Za-z]+ \d{4}|\d{4})/);
  return m ? toIso(m[1]) : "";
}

function parseLocation(meta?: string): string {
  if (!meta) return "";
  const m = meta.match(/[•·]\s*(.+)$/);
  return m ? m[1].trim() : "";
}

function toIso(s: string): string {
  const monthMatch = s.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthMatch) {
    const month = new Date(`${monthMatch[1]} 1, 2000`).getMonth() + 1;
    return `${monthMatch[2]}-${String(month).padStart(2, "0")}`;
  }
  if (/^\d{4}$/.test(s)) return s;
  return "";
}

function wrap(text: string, width: number): string {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    if ((line + " " + w).trim().length > width) {
      lines.push(line);
      line = w;
    } else {
      line = (line + " " + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines.join("\n");
}
