import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>He's just like me fr fr</title>
        <meta content="He's just like me fr fr" property="og:title" />
        <meta content="He's just like me fr fr" property="og:description" />
        <meta content="https://justlikemefr.fr" property="og:url" />
        <meta content="https://justlikemefr.fr/img.jpg" property="og:image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="He's just like me fr fr" />
        <meta name="twitter:description" content="He's just like me fr fr" />
        <meta name="twitter:image" content="https://justlikemefr.fr/img.jpg" />
      </Head>
      <img
        src="/img.jpg"
        class="w-full"
        alt="he's just like me fr fr"
      />
    </>
  );
}
