import { volumes } from "@/public/resources/lib/data";
import { introduction } from "@/public/resources/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();

  const handleClick = () => {
    const random = volumes[Math.floor(Math.random() * volumes.length)];

    router.push(`/volumes/${random.slug}`);
  };

  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>

      <button onClick={handleClick} type="button">
        Random Volume
      </button>
    </>
  );
}
