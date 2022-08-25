import { useState } from "react";
import { createStore, useStore } from "liten-store";
type TPages = "first" | "second";

function App() {
  const [page, setPage] = useState<TPages>("first");

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

const counterStore = createStore(0);

const First = () => {
  const [value, setValue] = useStore<number>(counterStore);

  return (
    <div>
      first
      <div>counter: {value}</div>
      <button
        onClick={() => {
          setValue((prev: any) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setValue((prev: any) => prev + 1);
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
      <div>counter:{value}</div>
      <button
        onClick={() => {
          setValue((prev: any) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setValue((prev: any) => prev + 1);
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
