import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Showcase } from "../components/Showcase";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Sell } from "../components/Sell";

import { motion } from "framer-motion";

import Head from "next/head";

import { useFirebase } from "../hooks/useFirebase";

export default function Home() {
  const { data } = useFirebase();
  const userData: any = data.find((item: any) => item.type === "userData");
  const mediaData: any = data.find((item: any) => item.type === "media");

  return (
    <>
      <Head>
        <title>{userData?.petname}</title>
      </Head>
      <motion.div layout>
        <Layout>
          <Navbar userData={userData} />
          <Hero userData={userData} />
          <Showcase mediaData={mediaData} limit={true} />
          <Contact />
          <Footer />
        </Layout>
      </motion.div>
    </>
  );
}
