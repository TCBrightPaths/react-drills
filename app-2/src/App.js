import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    { meal: "Chicken Gyros"}, 
    { meal: "Pasta Sauce"},
    { meal: "Seaweed Salad"}, 
    { meal: "Sweet Potato Pie"}
  ]);
  return (
    <div className="App">
      <h1>Meals To Try</h1>
      {data.map(({meal, index}) => (
        <div key={ index }>
          <li>{ meal }</li>
        </div>
      ))}
    </div>
  );
}

export default App;
