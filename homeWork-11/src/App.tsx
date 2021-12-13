import React from "react";
import "./App.css";
import MiniBlock from "./components/MiniBlock";
import BigBlock from "./components/BigBlock";
// import banner from "./image/banner.jpg";

function App() {
  return (
    <div className="App">
      <div className={"App-header"}>
        <MiniBlock id={0} />
        <BigBlock id={1} />
        <MiniBlock id={2} />
      </div>
    </div>
  );
}

export default App;
