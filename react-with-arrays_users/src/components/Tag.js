import "./Tag.css";

export default function Tag({ tag }) {
  function addHighlight(tag) {
    if (tag.includes("admin")) {
      return "tag tag--highlight";
    } else {
      return "tag";
    }
  }

  return <li className={addHighlight(tag)}>{tag}</li>;
}
