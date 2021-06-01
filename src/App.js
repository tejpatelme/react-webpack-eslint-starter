import { useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      <p>
        Edit <span>App.js</span> file to see changes
      </p>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Counter • {counter}{" "}
      </button>
    </div>
  );
}
