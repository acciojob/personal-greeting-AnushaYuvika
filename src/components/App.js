
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const input = () => {
    setName(input);
  }

  return (
    <div>
      <p>Enter your name:</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      {name && <h1>Hello, {name}!</h1>}
    </div>
  )
}

export default App
