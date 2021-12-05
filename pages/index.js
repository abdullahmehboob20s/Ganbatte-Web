import Abilities from "components/layouts/Abilities/Abilities";
import Cities from "components/layouts/Cities/Cities";
import Explore from "components/layouts/Explore/Explore";
import Goal from "components/layouts/Goal/Goal";
import Hero from "components/layouts/Hero/Hero";
import Navbar from "components/layouts/Navbar/Navbar";
import Partners from "components/layouts/Partners/Partners";
import Team from "components/layouts/Team/Team";
import Trust from "components/layouts/Trust/Trust";
import Try from "components/layouts/Try/Try";
import Tutorial from "components/layouts/Tutorial/Tutorial";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ganbatte</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Cities />
      <Abilities />
      <Try />
      <Tutorial />
      <Team />
      <Goal />
      <Trust />
      <Explore />
      <Partners />
    </div>
  );
}
