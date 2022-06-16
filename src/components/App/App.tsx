import React from "react";
import "./App.css";
import Recorder from "../Recorder";
import Calendar from "../Calendar";
import { create } from "domain";
import { createUserEvent } from "../../redux/user-events";

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
    </div>
  );
};

export default App;
