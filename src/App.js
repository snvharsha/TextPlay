
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

// import {
// BrowserRouter as Router,
// Route,
// Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode is enabled","success");
     
    }
    else if(mode==='light'){
      setMode('dark');
       document.body.style.backgroundColor='#040427';
       showAlert("Dark Mode is enabled","success");
       
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type,
  })
  setTimeout(() => {
    setAlert(null);
  }, 1000);
  }
 
  return (
    <>
  {/* <Router> */}
  <Navbar title="TextPlay" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading="Enter the Text below to proceed" mode={mode} />
      {/* <Routes>
        
          <Route  path="/about" element={<About mode={mode}/>}/>
          <Route  path="/" element={ <TextForm showAlert={showAlert} heading="Enter the Text below to proceed" mode={mode} />}/>
      </Routes> */}
  </div> 
  {/* </Router> */}
   </>

  );
}

export default App;


// class - className= for-htmlFor  tab-tabIndex
//in the return we can only return single tag
// <>  ..... </> JSX fragment
// i have to use / for termination <img src="" alt="" />
// let name="Harsha";
