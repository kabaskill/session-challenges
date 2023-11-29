import "./Card.css";

export default function Card({ name, color }) {
  const cardStyle = {
    backgroundColor: color,
  };

  return (
    <p className="card" style={cardStyle}>
      {name}
    </p>
  );
}
