import type { APIRoute } from "astro";
import { toPlainText } from "~/lib/resume-formats";

export const GET: APIRoute = () => {
  return new Response(toPlainText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'inline; filename="will-worland-resume.txt"',
    },
  });
};
