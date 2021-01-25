import React, { useState } from 'react'
import Char from './Char/Char'
import Validation from './Validation/Validation'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState("")

  const textChangedHandler = event => {
    setUserInput(event.target.value)
  }

  const deleteCharHandler = textIndex => {
    let splitText = userInput.split("")
    splitText = [...userInput]; // spread operator
    splitText.splice(textIndex, 1);
    setUserInput(splitText.join(""))
  }

  let chars = null

  if (userInput.length > 0) {
    chars = (
      <div>
        {userInput.split("").map((char, index) => {
          return <Char
            text={char}
            click={() => deleteCharHandler(index)} />
        })}
      </div>
    )
  }

  return (
    <div className="App">
      <p>Hello world</p>
      <input type='text' value={userInput} onChange={textChangedHandler}></input>
      <p>Length of input text = {userInput.length}</p>
      <Validation textLength={userInput.length} />
      {chars}
    </div>
  );
}

export default App;

/*
1. Create an input field (in App compoennt) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).
2. Create a new component (=> ValidationComponent) which recevies the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
5. Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.
Hint: Keep in mind that JavaScript strings are basically arrays!
*/