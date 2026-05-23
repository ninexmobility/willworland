import type { APIRoute } from "astro";
import { toMarkdown } from "~/lib/resume-formats";

export const GET: APIRoute = () => {
  return new Response(toMarkdown(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'inline; filename="will-worland-resume.md"',
    },
  });
};
