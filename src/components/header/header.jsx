import Link from 'next/link';

export const Header = () => (

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
);