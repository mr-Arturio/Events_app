import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { HomePage } from "../src/components/home/home-page";
import { Footer } from "../src/components/footer/footer";
import { Header } from "../src/components/header/header";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <HomePage data={data} />

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
