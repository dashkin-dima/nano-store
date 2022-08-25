import React, { useState } from "react";
import { createStore, useStore } from "../../../lib/index";

const counterStore = createStore(0);

function App() {
  const [page, setPage] = useState("first");

  const changePage = () => {
    if (page === "first") {
      setPage("second");
    } else {
      setPage("first");
    }
  };

  return (
    <div className="App">
      <header className="App-header">App</header>
      <button onClick={changePage}>changePage</button>
      {page === "first" && <First />}
      {page === "second" && <Second />}
    </div>
  );
}

const First = () => {
  const [value, setValue] = useStore(counterStore);

  return (
    <div>
      first
      <div>{value}</div>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

const Second = () => {
  const [value, setValue] = useStore(counterStore);

  return (
    <div>
      second
      <div>{value}</div>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setValue(2);
        }}
      >
        set 2
      </button>
    </div>
  );
};

export default App;
