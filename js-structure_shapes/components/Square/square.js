import { getRandomColor } from "../../utils/randomColor.js";

export function DrawSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
  });

  return square;
}
