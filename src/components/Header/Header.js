
import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";

const Header = () => {

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);


  return (
   
      
      <nav className="nav">
       
        <ul className="list">
           
          
            <Link className="items" to="/">Home</Link>
          
          
            <Link className="items" to="/About">About</Link>
          
          
            <Link className="items" to="/Contact">Contact</Link>
            <Link className="items" to="/NoPage">NoPage</Link>

            <button className="button1" onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>

            
          
          
        </ul>
        
      </nav>
      
      
   
  );
};

export default Header;
