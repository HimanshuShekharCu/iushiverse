import { Layout } from "../components/Layout";
import { Navbar } from "../components/Navbar";
import { Showcase } from "../components/Showcase";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import Head from "next/head";
import { useFirebase } from "../hooks/useFirebase";

export default function Home() {
  const { data } = useFirebase();
  const mediaData: any = data.find((item: any) => item.type === "media");
  const userData: any = data.find((item: any) => item.type === "userData");
  return (
    <>
      <Head>
        <title>{userData?.name} - Portfolio</title>
      </Head>
      <motion.div layout>
        <Layout>
          <Navbar />
          <Showcase mediaData={mediaData} limit={false} />
          <Footer />
        </Layout>
      </motion.div>
    </>
  );
}
