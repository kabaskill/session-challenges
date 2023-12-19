import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error happened</div>;
  return (
    <>
      <h1>Hello from Next.js!</h1>
      <p>{data.name}</p>
      <p>{data.twitter}</p>
      <p>{data.geo}</p>
    </>
  );
}
