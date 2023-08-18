// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import React, { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeText , setThemeText] = useState("Dark Mode")

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if(themeText==="Dark Mode"){
      setThemeText("Light Mode");
    }
    else{
      setThemeText("Dark Mode");
    }
  };
  return (
    <>
      <Navbar change_theme={toggleDarkMode} theme={darkMode ?  {backgroundColor : 'black' , color : 'white'} : {backgroundColor : 'white' , color : 'black'}} tText={themeText} />
      <Main theme={darkMode ?  {backgroundColor : 'black' , color : 'white'} : {backgroundColor : 'white' , color : 'black'}} />
    </>
  );
}

export default App;
