import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const components = [
    {
      name: "react-table",
      url: "/react-table",
    },
    {
      name: "react-sortable-list",
      url: "/react-sortable-list",
    },
    {
      name: "react-responsive-design-mode",
      url: "/responsive-design-mode",
    },
    {
      name: "react-simple-components",
      url: "/react-simple-components",
    },
    {
      name: "react-e-components",
      url: "/e-components/AddressForm",
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
          content="Provide lots of out of box Advanced Components for ToB applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/ThaddeusJiang/omakase-ui">Omakase UI</a>
        </h1>

        <p className={styles.description}>
          Lots of out of box Advanced Components for ToB applications.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {components.map(({ name, url }) => (
            <div
              className="card h-full bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500 "
              key={name}
            >
              <Link href={url}>
                <a className=" card-body">
                  <h2 className="card-title">{name}</h2>
                  {/* <p>
                    Find in-depth information about Next.js features and API.
                  </p> */}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/ThaddeusJiang/omakase-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          <span className="ml-4">
            ❤️ <span className={styles.logo}>ThaddeusJiang</span>
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
