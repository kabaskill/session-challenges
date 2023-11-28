import "./styles.css";
import Header from "./components/header.js";
import Avatar from "./components/avatar.js";
import Logo from "./components/logo.js";
import Navigation from "./components/navigation.js";
import Link from "./components/link.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
