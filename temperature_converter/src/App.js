import "./App.css"
import React from 'react';

function App() {
  const [celsius, setCelsius] = React.useState(0);
  const [fahrenheit, setFahrenheit] = React.useState(32);
  function handleCelsius(event) {
    let celTemp = event.target.value;

    setCelsius(celTemp);
    let fahTemp = Math.round((celTemp * (9 / 5) + 32) * 100) / 100;
    setFahrenheit(fahTemp);
  }
  function handleFahrenheit(event) {
    let fahTemp = event.target.value;

    setFahrenheit(fahTemp);
    let celTemp = Math.round((fahTemp - 32) / (9 / 5) * 100) / 100;
    setCelsius(celTemp);

  }
  return (
    <div className="App">
      <h1>Temperature Conversion</h1>
      <div id="converter">
        <div className="celsius">
          <input id="cel" type="number" value={celsius} onInput={handleCelsius} />
          <p class="title">Degree Celsius</p>
        </div>
        <div className="fahrenheit">
          <input id="fah" type="number" value={fahrenheit} onInput={handleFahrenheit} />
          <p class="title">Fahrenheit</p>
        </div>
      </div>


    </div>
  );
}

export default App;
