import Head from "next/head";
import BusinssCard from "../components/BusinessCard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Guillemette</title>
        <meta name="description" content="My digital business card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-gray-200 overflow-hidden">
        <BusinssCard />

        <div className="absolute flex gap-2 transition-all p-2 -bottom-1 -right-24 hover:-right-1">
          <Image
            src="/img/fortune-cookie.png"
            className="h-6 w-6"
            alt="fortune cookie"
            width={24}
            height={24}
          />
          no cookies
        </div>
      </main>
    </>
  );
}
