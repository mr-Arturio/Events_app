import Head from "next/head";
import Image from "next/image";
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
          <img />
          <a href="/"> Home</a>
          <a href="/events"> Events</a>
          <a href="/about-us"> About Us</a>
        </nav>
      </header>

      <main>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={200} height={200} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </a>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
