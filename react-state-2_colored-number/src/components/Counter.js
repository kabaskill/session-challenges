import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(param) {
    // param === "pos" && setCount((prev) => prev + 1);
    // param === "neg" && setCount((prev) => prev - 1);
    console.log(param);
    setCount((prev) => prev + param);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleClick}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={(event) => handleClick(-1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
