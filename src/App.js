// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light');
  let [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const lightMode = () => {
    // if(mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled.","success");
      document.getElementById("inlineRadio1").checked = true;
      document.getElementById("inlineRadio1").disabled = true;
      document.getElementById("inlineRadio2").checked = false;
      document.getElementById("inlineRadio2").disabled = false;
    // }
  }

  const darkMode = () => {
    // if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled.","success");
      document.getElementById("inlineRadio1").checked = false;
      document.getElementById("inlineRadio1").disabled = false;
      document.getElementById("inlineRadio2").checked = true;
      document.getElementById("inlineRadio2").disabled = true;
    // }
  }

  return (
    <>
    <Router>
      {/* <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/> */}
      {/* <hr /> */}
      <Navbar title = "TextUtils" mode={mode} lightMode={lightMode} darkMode={darkMode}/>
      <Alert alert = {alert}/>
      
      <div className="container my-3">
      <Routes>
        <Route path="/about" element={<About mode={mode}/>}></Route>
        <Route exact path="/" element={<TextArea heading="Enter text to analyse" showAlert={showAlert} mode={mode}/>}></Route>
      </Routes>
      </div>
    </Router> 
    </>
  );
}

export default App;
