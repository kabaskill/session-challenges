import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <Button
      color=" #f78e78"
      disabled={false}
      text="Let's go"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, padding: "20px" }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
