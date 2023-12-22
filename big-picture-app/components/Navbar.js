import styled from "styled-components";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <StyledNav>
        <StlyedUList>
          <li className="nav-link">
            <StyledLink href="/">home</StyledLink>
          </li>
          <li className="nav-link">
            <StyledLink href="/products">products</StyledLink>
          </li>
          <li className="nav-link">
            <StyledLink href="/contact">contact</StyledLink>
          </li>
        </StlyedUList>
      </StyledNav>
    </>
  );
}

const StyledNav = styled.nav`
  background-color: #43ea70;
  position: absolute;
  width: 100%;
  top: 0;
`;

const StlyedUList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 4rem;

  .nav-link {
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  display: block;
  height: 100%;
`;
