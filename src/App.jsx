import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";

const CustomDarkModeUI = ({ toggleHandler }) => (
  <div>
    <button onClick={toggleHandler}>Toggle Dark Mode</button>
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DarkModeToggle customUI={CustomDarkModeUI} />
    </>
  );
}

export default App;
