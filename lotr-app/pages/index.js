import Link from "next/link";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>The Lord of the Rings</h1>

      <h2>
        <Link href="/volumes">All Volumes</Link>
      </h2>
    </>
  );
}
