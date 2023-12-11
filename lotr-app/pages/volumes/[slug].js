import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { volumes } from "@/public/resources/lib/data";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentBook = volumes.find((volume) => volume.slug === slug);

  const bookIndex = volumes.findIndex(
    (volume) => volume.slug === currentBook.slug
  );
  console.log("🚀  bookIndex:", bookIndex);

  if (!currentBook) {
    return null;
  }

  const imgSize = {
    width: 140,
    height: 230,
  };

  return (
    <>
      <Link href="/">← All Volumes</Link>

      <Head>
        <title>Volume - {currentBook.title}</title>
      </Head>

      <h1>{currentBook.title}</h1>
      <Image
        src={`/resources/public${currentBook.cover}`}
        width={imgSize.width}
        height={imgSize.height}
        alt="cover"
      />
      <p>{currentBook.description}</p>
      <ul>
        {currentBook.books.map((item) => (
          <li key={item.title}>
            {item.ordinal}: {item.title}
          </li>
        ))}
      </ul>
      {bookIndex > 0 && (
        <Link href={`/volumes/${volumes[bookIndex - 1].slug}`}>Previous</Link>
      )}
      {bookIndex < volumes.length - 1 && (
        <Link href={`/volumes/${volumes[bookIndex + 1].slug}`}>Next</Link>
      )}
    </>
  );
}
