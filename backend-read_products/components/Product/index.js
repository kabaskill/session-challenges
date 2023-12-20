import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import styled from "styled-components";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews && data.reviews.length > 0 && (
        <StyledDiv>
          <h3>Reviews:</h3>
          {data.reviews.map((review) => (
            <StyledDiv key={review._id}>
              <h4>{review.title}</h4>
              <p>{review.text}</p>
              <p>Rating: {review.rating}</p>
            </StyledDiv>
          ))}
        </StyledDiv>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

const StyledDiv = styled.div`
  border: 1px solid red;
  margin-bottom: 1rem;
`;
