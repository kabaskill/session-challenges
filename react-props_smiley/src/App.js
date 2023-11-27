import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false} />;
}

function Smiley({ isHappy }) {
  if (isHappy) {
    return <p>Happy 😀</p>;
  } else {
    return <p>Sad 😢</p>;
  }
}
