import React from "react";
import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  function handleAdd() {
    setPeople(people + 1);
  }

  function handleSub() {
    people > 0 && setPeople(people - 1);
  }

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter add={handleAdd} sub={handleSub} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
