import "@/styles/globals.css";
import Navbar from "@/components/Organisms/Navbar";
import Head from "next/head";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const showLayout = router.pathname === "/login" ? false : true;

  return (
    <>
      <Head>
        <title>Sreymoom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen flex">
        {showLayout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </>
  );
}
