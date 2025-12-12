import { Layout } from "../components/Layout";

import { motion } from "framer-motion";

import Head from "next/head";
import { data } from "../mock/mock";

export default function Home() {
  return (
    <>
      <Head>
        <title>{data.name} - Admin</title>
      </Head>
      <motion.div layout>
        <Layout>Hey</Layout>
      </motion.div>
    </>
  );
}
