import { CardList } from "../CardList/card-list.js";
import { Form } from "../Form/form.js";
import { Header } from "../Header/header.js";

export function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}
