import styled from "styled-components";

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  ${({ $isBlack }) => $isBlack && `background-color: black;`}

  &:hover {
    background-color: red;
  }
`;
