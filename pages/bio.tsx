import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";

import { motion } from "framer-motion";

import Head from "next/head";
import { useFirebase } from "../hooks/useFirebase";

export default function Home() {
  const { data } = useFirebase();
  const userData: any = data.find((item: any) => item.type === "userData");
  const bioData: any = data.find((item: any) => item.type === "bio");
  return (
    <>
      <Head>
        <title>{userData?.name} - Bio</title>
      </Head>
      <motion.div layout>
        <Layout>
          <Navbar userData={userData} />
          <Bio bioData={bioData} />
          <Footer />
        </Layout>
      </motion.div>
    </>
  );
}
