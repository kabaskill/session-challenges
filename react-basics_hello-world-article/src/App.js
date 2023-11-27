import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hallo Welt!</h1>
      <p>Die Welt der React</p>
      <p>Die Welt der React</p>
    </article>
  );
}
