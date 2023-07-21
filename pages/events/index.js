import Image from "next/image";

export default function EventsPage({ data }) {
  return (
    <div>
      <h1> Event Page </h1>
      <div>
        {data.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={200} height={200} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
          </a>
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
