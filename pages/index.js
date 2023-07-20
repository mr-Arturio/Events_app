import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <a href='/'> Home</a>
          <a href='/events'> Events</a>
          <a href='/about-us'> About Us</a>
        </nav>
      </header>

      <main>
       <a href=''>
        <img />
        <h2> Events in Kyiv</h2>
        <p>
        Kyiv was the historic cultural centre of the East Slavic civilization and a major cradle for the Christianization of Kyivan Rus. Kyiv retained through centuries its cultural importance and even at times of relative decay, it remained the centre of primary importance of Eastern Orthodox Christianity. Its sacred sites, which include the Kyiv Pechersk Lavra (the Monastery of the Caves) and the Saint Sophia Cathedral are probably the most famous, attracted pilgrims for centuries and now recognized as a UNESCO World Heritage Site remain the primary religious centres as well as the major tourist attraction. The above-mentioned sites are also part of the Seven Wonders of Ukraine collection.
Kyiv's theatres include, the Kyiv Opera House, Ivan Franko National Academic Drama Theater, Lesya Ukrainka National Academic Theater of Russian Drama, the Kyiv Puppet Theater, October Palace and National Philharmonic of Ukraine and others. In 1946 Kyiv had four theatres, one opera house and one concert hall,[142] but most tickets then were allocated to "privileged groups".[142]
Other significant cultural centres include the Dovzhenko Film Studios, and the Kyiv Circus. The most important of the city's many museums are the Kyiv State Historical Museum, National Museum of the History of Ukraine in the Second World War, the National Art Museum, the Museum of Western and Oriental Art, the Pinchuk Art Centre and the National Museum of Russian art.
In 2005, Kyiv hosted the 50th annual Eurovision Song Contest and in 2017 the 62nd annual Eurovision Song Contest.
Numerous songs and paintings were dedicated to the city. Some songs became part of Russian, Ukrainian and Jewish folklore. The most popular songs are "How not to love you, Kyiv of mine?" and "Kyiv Waltz". Renowned Ukrainian composer Oleksandr Bilash wrote an operetta called "Legend of Kyiv".
        </p>
       </a>
       <a href=''>
        <img />
        <h2> Events in Lviv</h2>
        <p>
        Lviv is one of Ukraine's most important cultural centres. It is known as a centre of art, literature, music and theatre. Nowadays, the evidence of the city's cultural richness is the number of theatres, concert halls, and creative unions, and the high number of artistic activities (more than 100 festivals annually, 60 museums, and 10 theatres).

Lviv's historic centre has been on the United Nations Educational, Scientific and Cultural Organization (UNESCO) World Heritage list since 1998. UNESCO gave the following reasons[159] for its selection:

Criterion II: In its urban fabric and its architecture, Lviv is an outstanding example of the fusion of the architectural and artistic traditions of central and eastern Europe with those of Italy and Germany.

Criterion V: The political and commercial role of Lviv attracted to it a number of ethnic groups with different cultural and religious traditions, who established separate yet interdependent communities within the city, evidence for which is still discernible in the modern town's landscape.
        </p>
       </a>
       <a href=''>
        <img />
        <h2> Events in Kharkiv</h2>
        <p>
        Kharkiv is a significant cultural center in Ukraine, boasting over 20 museums, 10 theaters, and several art galleries. It hosts music and cinema festivals regularly. Notable theaters include the Kharkiv National Academic Opera and Ballet Theatre, the Kharkiv Ukrainian Drama Theatre, and the Kharkiv Academic Russian Drama Theatre. The city has a rich literary history, known as a "Literary Klondike" in the 1930s, and is a hub for Ukrainian science fiction and fantasy writers. Kharkiv has a thriving music scene, including the Kharkiv Philharmonic Society and the annual "Kharkiv - City of Kind Hopes" music festival. The city has also been featured in numerous films, and the Kharkiv Lilacs international film festival is well-known in the movie industry. The visual arts are prominent, with famous painters like Ilya Repin and Zinaida Serebryakova associated with the city. Kharkiv boasts numerous museums, including the Kharkiv Historical Museum, Kharkiv Art Museum, and many others. Additionally, the city offers an array of landmarks, parks, and recreational areas for locals and tourists to enjoy. lorem
        </p>
       </a>
      </main>

      <footer>
     
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}