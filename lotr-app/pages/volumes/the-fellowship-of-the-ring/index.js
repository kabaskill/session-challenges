import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/public/resources/lib/data";

export default function TheFellowshipOfTheRing() {
  const slug = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const slugIndex = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  const imgSize = {
    width: 140,
    height: 230,
  };

  return (
    <>
      <Link href="../">← All Volumes</Link>

      <h1>{slug.title}</h1>
      <Image
        src={`/resources/public${slug.cover}`}
        width={imgSize.width}
        height={imgSize.height}
        alt="cover"
      />
      <p>{slug.description}</p>
      <ul>
        {slug.books.map((item, index) => (
          <li key={index}>
            {item.ordinal}: {item.title}
          </li>
        ))}
      </ul>
      {slugIndex > 0 && (
        <Link href={`/volumes/${volumes[slugIndex + 1].slug}`}>Previous</Link>
      )}
      {slugIndex < volumes.length - 1 && (
        <Link href={`/volumes/${volumes[slugIndex + 1].slug}`}>Next</Link>
      )}
    </>
  );
}
