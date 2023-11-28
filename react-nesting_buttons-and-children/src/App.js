import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>First</Button>
      <Button>Second</Button>
      <Button>Third</Button>
      <Button>Fourth</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
