/* eslint-disable @next/next/no-img-element */
// import { GetStaticProps } from "next";
// import { Social } from "../typings";
// import { sanityClient } from "../sanity";
// import { groq } from "next-sanity";
import Head from "next/head";
import BusinssCard from "../components/BusinessCard";

export default function Home() {
  return (
    <div className="relative bg-gray-100 min-h-screen overflow-hidden">
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

      {/* add an image, in the bottom right corder of the page */}
      <div className="absolute transition-all  p-2 -bottom-1 -right-4 hover:-right-1">
        <img
          src="/img/fortune-cookie.png"
          className=" h-6 w-6"
          alt="Lucas Guillemette"
        />
      </div>
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
