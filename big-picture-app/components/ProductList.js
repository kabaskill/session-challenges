import useSWR from "swr";

import Link from "next/link";

export default function ProductList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h2>Available Fishes</h2>
      <ul>
        {data.map((product) => (
          <li key={product._id}>
            <Link href={`/${product._id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
