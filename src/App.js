import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#193149'
      showAlert("Dark Mode has been enabled","success");
      document.title = ("Text Analyzer - Dark Mode")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success");
      document.title = ("Text Analyzer - Light Mode")
    }
  }

  return (
    <>
    <Router>
     <Navbar title = "Text Analyzer" aboutText = "About" mode = {mode} toggleMode={toggleMode}/>
     <Alert alert = {alert}/>
      <div className="container mb-3 my-4">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
              <TextForm heading = "Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
