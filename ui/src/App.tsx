import React from "react";
import "./App.css";
import { Header } from "./components/mainframe/header/Header";
import { Main } from "./components/mainframe/content/Content";

function App() {
  return (
    <div className="app container-fluid d-flex flex-column">
      <Header />
      <Main />
    </div>
  );
}

export default App;
