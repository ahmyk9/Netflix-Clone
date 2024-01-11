import Image from "next/image";
import {Inter} from "next/font/google";
import Head from "next/head";
import Header from "../../components/Header";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        {/* Banner  */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
      {/* Modal  */}
    </div>
  );
}
