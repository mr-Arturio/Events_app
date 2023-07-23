import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                 Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                 Events
              </Link>
            </li>
            <li>
              <Link href="/about-us" passHref>
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image width={200} height={200} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </Link>
        ))}
      </main>

      <footer></footer>
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
