import "../styles/globals.css";
// TODO: 其实我不想 export CSS，最好可以导出 tailwind utility classes，然后在项目中自己引入，通过 tailwind JIT 来生成 CSS
import "@omakase-ui/react-table/dist/index.css";
import "@omakase-ui/react-simple-components/dist/index.css";
import "@omakase-ui/react-e-components/dist/index.css";
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
