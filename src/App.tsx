import React from "react";
import "./App.css";
import { CustomButton } from "./components/CustomButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>A simple example of using typescript in custom component!</h2>
        <CustomButton
          variant="primary"
          onClick={() => alert("this is primariy button")}
        >
          Primairy Btn
        </CustomButton>

        <CustomButton
          variant="secondary"
          onClick={() => alert("this is secondary button")}
        >
          Secondary Btn
        </CustomButton>
      </header>
    </div>
  );
}

export default App;
