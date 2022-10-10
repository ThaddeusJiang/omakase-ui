import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const components = [
    {
      name: "@omakase-ui/react-table",
      url: "/react-table",
    },
    {
      name: "@omakase-ui/react-sortable-list",
      url: "/react-sortable-list",
    },
    {
      name: "@omakase-ui/responsive-design-mode",
      url: "/responsive-design-mode",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Omakase UI</title>
        <meta
          name="description"
          content="Provide lots of out of box advanced components for ToB applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/ThaddeusJiang/omakase-ui">Omakase UI</a>
        </h1>

        <p className={styles.description}>
          Lots of out of box advanced Components for ToB applications.
        </p>

        <div className={styles.grid}>
          {components.map(({ name, url }) => (
            <Link href={url} key={name}>
              <a className={styles.card}>
                <h2>{name} &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
