import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref>
        <div className="image">
          <Image width={200} height={200} alt={ev.title} src={ev.image} />
        </div>
        <h2> {ev.title} </h2>
        <p> {ev.description} </p>
      </Link>
    ))}
  </div>
);
