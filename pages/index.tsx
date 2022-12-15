// import { GetStaticProps } from "next";
// import { Social } from "../typings";
// import { sanityClient } from "../sanity";
// import { groq } from "next-sanity";
import Head from "next/head";
import BusinssCard from "../components/BusinessCard";

export default function Home() {
  return (
    <div className="relative bg-gray-400 min-h-screen">
      <Head>
        <title>Lucas Guillemette</title>
        <meta name="description" content="My digital business card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <BusinssCard />
        </div>
      </main>
    </div>
  );
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const socials: Social[] = await sanityClient.fetch(groq`
//     *[_type=="social"]
// `);

//   return {
//     props: {
//       socials,
//     },
//   };
// };
