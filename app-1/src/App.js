import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("")
  return (
    <div className="App">
      <input 
        type="text"  
        value={ input }
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="content">
        <h2>{ input }</h2>
      </div>
    </div>
  );
}

export default App;
