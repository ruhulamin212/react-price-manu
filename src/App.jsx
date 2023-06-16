import { useState } from "react";
import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Price from "./Component/Pricce/Price";
import Dashbord from "./Component/Deshbord/Dashbord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <Price></Price>
      <Dashbord></Dashbord>
    </>
  );
}

export default App;
