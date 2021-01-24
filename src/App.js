import React, { Component } from 'react'
import Char from './Char/Char'
import Validation from './Validation/Validation'
import './App.css'

class App extends Component {
  state = {
    text: ""
  }

  textChangedHandler = event => {
    const inputText = event.target.value
    this.setState({ text: inputText })
  }

  deleteCharHandler = textIndex => {
    const text = this.state.text
    let splitText = this.state.text.split("")
    splitText = [...this.state.text]; // spread operator
    splitText.splice(textIndex, 1);
    this.setState({ text: splitText.join('') })
  }

  render() {
    let chars = null

    console.log(this.state.text)
    console.log(this.state.text.length)

    if (this.state.text.length > 0) {
      let splitText = this.state.text.split('')
      chars = (
        <div>
          {splitText.map((char, index) => {
            return <Char 
              text={char}
              click={()=> this.deleteCharHandler(index)} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <p>Hello world</p>
        <input type='text' value={this.state.text} onChange={this.textChangedHandler}></input>
        <p>Length of input text = {this.state.text.length}</p>
        <Validation textLength={this.state.text.length} />
        {chars}
      </div>
    );
  }
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