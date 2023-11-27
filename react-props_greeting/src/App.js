import "./styles.css";

export default function App() {
  return <Greeting name="Felix" />;
}

function Greeting({ name }) {
  name.toLowerCase() === "felix" ? (name = "Coach") : name;
  return <p>Hello {name}!</p>;
}
