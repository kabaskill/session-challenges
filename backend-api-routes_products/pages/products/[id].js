import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>something bad happened</div>;

  const currentProduct = data.find((item) => item.id === id);

  return (
    <>
      <div>
        <h2>{currentProduct.name}</h2>
        <p>{currentProduct.description}</p>
        <p>
          {currentProduct.price}
          {currentProduct.currency}
        </p>
      </div>
    </>
  );
}
