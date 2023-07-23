import Image from "next/image";

export default function EventPage({ data }) {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} als={data.title} />
      <h1> {data.title} </h1>
      <p> {data.description} </p>
    </div>
  );
}

export async function getStaticPaths() {
  // const data = await import("/data/data.json");
  // const allEvents = data.allEvents;
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city, //because [id] is a child of cat
        id: path.id, //id - name of our folder is id
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("/data/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);

  return {
    props: { data: eventData },
  };
}
