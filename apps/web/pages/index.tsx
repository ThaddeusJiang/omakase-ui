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
      name: "@omakase-ui/react-responsive-design-mode",
      url: "/responsive-design-mode",
    },
    {
      name: "@omakase-ui/react-baseui",
      url: "/react-baseui",
    },
    {
      name: "react-select",
      url: "/react-select",
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

        <div className="grid gap-4 grid-cols-1  sm:grid-cols-2 lg:grid-cols-4">
          {components.map(({ name, url }) => (
            <div
              className="card bg-base-100 shadow-xl h-full hover:shadow-2xl hover:shadow-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "
              key={name}
            >
              <Link href={url}>
                <a className=" card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </a>
              </Link>
            </div>
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
