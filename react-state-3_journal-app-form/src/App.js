import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { uid } from "uid";

const filters = {
  all: "ALL",
  favorite: "FAVORITE",
  //some other consts
};

function App() {
  const initialEntries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
      isFavorite: false,
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
      isFavorite: false,
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      isFavorite: false,
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: Yay!",
      isFavorite: false,
    },
  ];

  const [filter, setFilter] = useState(filters.all);
  const [entries, setEntries] = useState(initialEntries);

  const filteredEntries = entries.filter(
    (entry) => filter === filters.favorite && entry.isFavorite
  );

  function handleAddEntry(entry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    setEntries([
      { id: uid(), date: date, isFavorite: false, ...entry },
      ...entries,
    ]);
  }

  function handeToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        id === entry.id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  function handleShowFavoriteEntries() {
    setFilter(filters.favorite);
  }
  function handleShowAllEntries() {
    setFilter(filters.all);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />

        <EntriesSection
          onToggleFavorite={handeToggleFavorite}
          entries={filter === filters.all ? entries : filteredEntries}
          filter={filter}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
          allEntriesCount={entries.length}
          favoriteEntriesCount={filteredEntries.length}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
