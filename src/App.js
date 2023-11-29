import React,{useState} from 'react'
import Navbar from "./components/Navbar";
import Textfrom from "./components/Textfrom";
import Alert from "./components/Alert";
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode hasbeen Enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode hasbeen Enable","success");
    }
      
  }
  return (
          <Router>
           <Navbar Title="TextUtils" opt2="About" mode={mode} toggleMode={toggleMode} />
            <Alert alert = {alert}/>
           <Routes>
              <Route exact path="/" element={ 
                <div className="container">
                  <Textfrom showAlert={showAlert} Heading="Enter the Text to analysis Below" mode={mode}/>
                </div>
              }/>
              <Route path="/about" element={<About input = "Enter name"/>}/>
                
              
          </Routes>
    </Router>          
           
           

  
    );
}

export default App;
