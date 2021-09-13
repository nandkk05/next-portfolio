import Head from "next/head";
import "tailwindcss/tailwind.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black h-screen">
      <Head>
        <title>Nand Kishor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
    </div>
  );
}
