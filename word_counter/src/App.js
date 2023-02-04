import React from "react";
import './style.css';
function App() {
  const [text, setText] = React.useState("")
  const [character, setCharacter] = React.useState(0)
  const [words, setWords] = React.useState(0)
  function handleText(event) {
    setText(event.target.value)
    console.log(event.target.value.length)
    setCharacter(event.target.value.length)
    let arrayOfWords = event.target.value.split(" ");
    console.log(arrayOfWords);
    let newArrayWords = arrayOfWords.filter(a => a != "");
    if (newArrayWords < 1) {
      setWords(0)
    } else {
      setWords(newArrayWords.length);
    }
  }

  return (
    <div className="App">
      <div className="title"><h3>WORD AND CHARACTER COUNTER</h3></div>
      <div className="textArea">
        <textarea cols="100" rows="30" onInput={handleText} value={text}></textarea>
      </div>
      <div className="counter">
        <p>There are <span id="character">{character} </span>character and <span id="word">{words}</span> word.</p>
      </div>
    </div>

  );
}

export default App;
