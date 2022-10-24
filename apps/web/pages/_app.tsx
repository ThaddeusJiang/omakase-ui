import "../styles/globals.css";
import "@omakase-ui/react-table/dist/react-table.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Link href={"/"}>
        <a className=" block   underline hover:text-blue-600">Home Page</a>
      </Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
