import { HandlerContext, Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext) {
    const { hostname } = new URL(req.url);
    const first = hostname.split(".")[0];
    const pronoun = first === "he" || first === "she" ? first : "they";
    const capitalized = pronoun[0].toUpperCase() + pronoun.slice(1);
    return new Response(
      `<!DOCTYPE html>
<html>
  <head>
    <title>${capitalized} just like me fr fr</title>
    <meta content="${capitalized} just like me fr fr" property="og:title" />
    <meta content="${capitalized} just like me fr fr" property="og:description" />
    <meta content="https://${hostname}" property="og:url" />
    <meta content="https://${hostname}/${pronoun}.jpg" property="og:image" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${capitalized} just like me fr fr" />
    <meta name="twitter:description" content="${capitalized} just like me fr fr" />
    <meta name="twitter:image" content="https://${hostname}/${pronoun}.jpg" />
  </head>
  <body style="margin:0px;padding:0px;">
    <img
      src="/${pronoun}.jpg"
      style="width: 100vw; height: 100vh;"
      alt="${capitalized} just like me fr fr"
    >
  </body>
</html>`,
      {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      },
    );
  },
};
