import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>something bad happened</div>;

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
