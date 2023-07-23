import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage({ data }) {
  return (
    <div>
      <h1> Event Page </h1>
      <div>
        {data.map((ev) => (
          <Link key={ev.id} href={`/events/${ev.id}`} passHref>
            <Image src={ev.image} alt={ev.title} width={500} height={500} />{" "}
            <h2>{ev.title} </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
