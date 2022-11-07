import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Contact from "../components/Contact";
import { Social } from "../typings";
import { fetchSocials } from "../utilities/fetchSocials";

type Props = {
    socials: Social[];
};

export default function Home({ socials }: Props) {
    return (
        <div className="relative bg-gray-800 min-h-screen">
            <Head>
                <title>Portfolio Lucas</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="fixed top-0 left-0 right-0 backdrop-blur-sm bg-white/30 ">
                <Header socials={socials} />
            </div>

            <main className="pt-40">
                {/* Header */}

                {/* Hero */}

                {/* About */}

                {/* Experience */}

                {/* Skills */}

                {/* Projects */}

                {/* Contacts */}
                <Contact />
            </main>
        </div>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            socials,
        },
    };
};
