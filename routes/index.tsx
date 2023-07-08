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
      </Head>
      <img
          src="/img.jpg"
          class="w-full"
          alt="he's just like me fr fr"
        />
    </>
  );
}
