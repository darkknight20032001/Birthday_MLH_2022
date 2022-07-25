import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Components/LoginPage";
import { useEffect, useState } from "react";

function App() {
  const [myVal, setMyVal] = useState(``);
  useEffect(() => {
    const fetchingData = async () => {
      const data = await fetch("http://localhost:3001/home");
      const myData = await data.json();
      setMyVal(myData.status);
    };
    fetchingData();
  }, []);
  return (
    <div className="App">
      <h1 className="bg-red-600">{myVal.toUpperCase()}</h1>
      <LoginPage />
    </div>
  );
}

export default App;
