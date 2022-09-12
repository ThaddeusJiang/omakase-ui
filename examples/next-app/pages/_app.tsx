import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Link href={"/"}>
        <a className=" underline   hover:text-blue-600 block">Home Page</a>
      </Link>
      <Component {...pageProps} />
    </div>
  )

}

export default MyApp
