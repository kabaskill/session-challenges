import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "/api/random-character",
    fetcher
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error happened</div>;
  if (isValidating) return <div>validating...</div>;

  return (
    <>
      <h1>Random Person</h1>
      <p>{data.name}</p>
      <p>{data.twitter}</p>
      <p>{data.geo}</p>
      <p>{data.score}</p>
      <button
        type="button"
        onClick={() =>
          mutate({
            name: "loading",
            twitter: "loading",
            geo: "loading",
            score: "loading",
          })
        }
      >
        Get New Person
      </button>
    </>
  );
}
