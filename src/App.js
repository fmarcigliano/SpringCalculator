// import './App.css';
import React from "react";
import "./App.css";
import Total from "./components/Total/Total";
import Header from "./components/Header/Header";
import NavTabs from "./components/NavTabs/NavTabs";

const App = () => {
  return (
    <div>
      <NavTabs />
      <div className="mainBox">
        <Header />
        <Total />
      </div>
    </div>
  );
};

export default App;
