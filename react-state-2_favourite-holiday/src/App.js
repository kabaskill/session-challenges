import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [favHoliday, setFavHoliday] = useState("");
  const [favDate, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit is clicked");

    const dataFavHoliday = event.target.holiday.value;
    const dataDate = event.target.date.value;

    setFavHoliday(dataFavHoliday);
    setDate(dataDate);

    event.target.holiday.value = "";
    event.target.date.value = "";
    event.target.holiday.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button
          type="submit"
          className="form__submit-button"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{favHoliday}</span>
      </p>
      <p>
        Date: <span className="output">{favDate}</span>
      </p>
    </div>
  );
}
