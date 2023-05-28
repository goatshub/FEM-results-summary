import { useEffect, useState } from "react";
import data from "./data.json";
import ResultsCard from "./components/ResultsCard";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div>
      <ResultsCard items={items} />
      <div className="text-slate-500 attribution absolute bottom-0 text-center w-full p-5 invisible md:visible">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-violet-800 hover:text-violet-600"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/goatshub"
          target="_blank"
          rel="noreferrer"
          className="text-violet-800 hover:text-violet-600"
        >
          🐐 Goat
        </a>
        .
      </div>
    </div>
  );
}

export default App;
