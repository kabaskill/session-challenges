import Link from "next/link";
import styled from "styled-components";

export default function StyledLink({ href, children }) {
  return <LinkWStyle href={href}>{children}</LinkWStyle>;
}

const LinkWStyle = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;
