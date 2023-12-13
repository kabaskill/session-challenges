import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ChevronLeft from "public/design-resources/chevron-left.svg";
import ArrowLeft from "public/design-resources/arrow-left.svg";
import ArrowRight from "public/design-resources/arrow-right.svg";
import { volumes } from "@/public/resources/lib/data";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentBook = volumes.find((volume) => volume.slug === slug);

  const bookIndex = volumes.findIndex(
    (volume) => volume.slug === currentBook.slug
  );

  if (!currentBook) {
    return null;
  }

  const imgSize = {
    width: 140,
    height: 230,
  };

  return (
    <>
      <Head>
        <title>Volume - {currentBook.title}</title>
      </Head>

      <Link href="/volumes">
        <ChevronLeft /> All Volumes
      </Link>

      <h1>{currentBook.title}</h1>
      <p>{currentBook.description}</p>

      <VolumeWrapper $volColor={currentBook.color}>
        <ul className="ulist">
          {currentBook.books.map((item) => (
            <li key={item.title}>
              {item.ordinal} <br></br> {item.title}
            </li>
          ))}
        </ul>
        <Image
          src={`/resources/public${currentBook.cover}`}
          width={imgSize.width}
          height={imgSize.height}
          alt="cover"
        />
      </VolumeWrapper>
      {bookIndex > 0 && (
        <Link href={`/volumes/${volumes[bookIndex - 1].slug}`}>
          <ArrowLeft />
          Previous Volume
        </Link>
      )}
      {bookIndex < volumes.length - 1 && (
        <Link href={`/volumes/${volumes[bookIndex + 1].slug}`}>
          Next Volume
          <ArrowRight />
        </Link>
      )}
    </>
  );
}

const VolumeWrapper = styled.div`
  ${({ $volColor }) => `background-color: ${$volColor};`}

  margin-inline:-2rem;

  display: flex;
  justify-content: space-between;
  align-content: center;

  img {
    margin: 2rem;
  }

  .ulist {
    color: var(--color-clouds);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
