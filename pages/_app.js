import "@/styles/globals.css";
import Navbar from "@/components/Organisms/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sreymoom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen flex">
        <div className="w-1/4">
          <Navbar />
        </div>
        <div className="w-3/4">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
