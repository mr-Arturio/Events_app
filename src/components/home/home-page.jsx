import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data.map((ev) => (
      <Link key={ev.id} href={`/events/${ev.id}`} passHref>
        <div className="card">
          <Image
            className="image"
            width={550}
            height={400}
            alt={ev.title}
            src={ev.image}
          />
          <div className="content">
            <h2> {ev.title} </h2>
            <p> {ev.description} </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);
