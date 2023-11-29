import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "banana",
      color: "#47a4a8",
    },
    {
      id: 2,
      name: "apple",
      color: "#8e97e8",
    },
    {
      id: 3,
      name: "watermelon",
      color: "#bae5b8",
    },
    {
      id: 4,
      name: "grapefruit",
      color: "#e39092",
    },
    {
      id: 5,
      name: "pear",
      color: "#e6b061",
    },
    {
      id: 6,
      name: "pineapple",
      color: "#5a57cc",
    },
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map((fruit) => (
          <Card key={fruit.id} name={fruit.name} color={fruit.color} />
        ))}
      </ul>
    </div>
  );
}
