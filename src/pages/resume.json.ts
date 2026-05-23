import type { APIRoute } from "astro";
import { toJsonResume } from "~/lib/resume-formats";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(toJsonResume(), null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'inline; filename="will-worland-resume.json"',
    },
  });
};
