import BoxWithStyledComponents from "@/components/BoxWithClassName/BoxWithStyledComponents.js";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <FlexBox>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $isBlack />
      <BoxWithStyledComponents />
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
`;
