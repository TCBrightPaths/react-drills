import React, { useState } from 'react';
import './App.css';

function App() {
  const [meals, setMeals] = useState([
    {meal: 'chicken picante'},
    {meal: "pasta primavera"},
    {meal: "potato au gratin"},
    {meal: "supreme pizza"},
    {meal: "chicken and sausage gumbo"}
  ])

  const [input, setInput] = useState("")

  return (
    <div className="App">
      <h1>Meals To Try</h1>

      <input 
      type="text"
      value={input}
      onChange={meals.filter((meal) => meal[0] === )}
      />

      {meals.map(({meal, index}) => (
        <div>
          <h2 key={index}>{meal}</h2>
        </div>
      ))}
         
    </div>
  );
}

export default App;
