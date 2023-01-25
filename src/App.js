import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = React.useState("light"); //Wether darkMode is Enable or not
  const [alert, setAlert] = React.useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enable", "success");
    }
  };

  return (
    <>
      <Alert alert={alert} />
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Routes>

          <Route exact path="/"
            element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert} />}>
          </Route>

          <Route exact path="/About"
            element={<About />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
