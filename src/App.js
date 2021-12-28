import React, { useState } from 'react'
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggle(){
    setDarkMode(prevDarkMode => !prevDarkMode)
    console.log(darkMode)
  }

  return (
    <div className={darkMode ? "App dark" : "App"}>
     <h1 className={darkMode ? "dark-heading" : ""}>Light and Dark Modes</h1>
     <button onClick={toggle}>Switch between Light and Dark Mode</button>
     <br />
     <p>{!darkMode ? "This is light mode" : 'Welcome to dark mode: the spooky mode thats taking haunted houses by storm'}</p>
    </div>
  );
}

export default App;
