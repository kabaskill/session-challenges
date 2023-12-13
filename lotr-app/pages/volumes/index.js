import { volumes } from "@/public/resources/lib/data";
import { introduction } from "@/public/resources/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export default function Volumes() {
  const router = useRouter();

  const imgSize = {
    width: 112,
    height: 184,
  };

  return (
    <>
      <Head>
        <title>Lord of the Rings</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <VolumeList>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>
              <figure>
                <Image
                  src={`/resources/public${volume.cover}`}
                  alt="volume-cover"
                  width={imgSize.width}
                  height={imgSize.height}
                />
                <figcaption>{volume.title}</figcaption>
              </figure>
            </Link>
          </li>
        ))}
      </VolumeList>
    </>
  );
}

const VolumeList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  margin: 0;
  padding: 0;
`;
