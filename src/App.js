import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = React.useState('light'); //Wether darkMode is Enable or not
  const [alert, setAlert] = React.useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode has been enable","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enable","success")
    }
  }

  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm heading = "Enter the text to Analyze" mode ={mode} showAlert= {showAlert}/>
      {/* <About /> */}
    </div>
    </>
  );
}

export default App;
