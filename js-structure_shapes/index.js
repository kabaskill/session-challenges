import { DrawCircle } from "./components/Circle/circle.js";
import { DrawPentagon } from "./components/Pentagon/pentagon.js";
import { DrawSquare } from "./components/Square/square.js";

console.clear();

const root = document.getElementById("root");

root.append(DrawCircle(), DrawSquare(), DrawPentagon());
