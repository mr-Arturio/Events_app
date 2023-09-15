import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
      <Link href="/" passHref>
        <Image
          alt="logo"
          src={"/images/images (1).jpg"}
          width={160}
          height={60}
        />
        </Link>
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
      </div>
      <p className="title"> Sed ut perspiciatis unde omnis</p>
    </div>
  </header>
);
