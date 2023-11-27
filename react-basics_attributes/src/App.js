import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Test Title</h2>
      <label htmlFor="name">Test label</label>
      <input id="name" type="text" />
      <a
        className="article__link"
        href="https://sound-effects.bbcrewind.co.uk/"
      >
        BBC Sound Effects
      </a>
    </article>
  );
}
