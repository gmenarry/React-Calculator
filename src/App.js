import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import Clear from "./components/Clear"

class App extends Component {
  constructor(props) { //what you have to use to handle the states and initialise them
    super(props)

    this.state = { //using 4 variables. here we are naming the states and below we will be setting them using functions. once the functions have been made we can use them in the handleClick below 
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    }
  }
  addToInput = val => {
    this.setState({
      input: this.state.input + val
    })
  }

  addDecimal = val => {
    //only add decimal if there is no current decimal point already
    if (this.state.input.indexOf('.') === -1) {
      this.setState({ input: this.state.input + val })
    }
  }
  clearInput = () => {
    this.setState({ input: "" }) //function making the state set to nothing
  }

  add = () => {
    this.state.previousNumber = this.state.input // do this to store the previous number so when type new number it over writes it in the input bit
    this.setState({ input: "" }) // this is set to blank so it allows me to enter the number
    this.state.operator = "plus"
  }

  minus = () => {
    this.state.previousNumber = this.state.input 
    this.setState({ input: "" })
    this.state.operator = "minus" //this is referring to the equals equations if statement 
  }
  times = () => {
    this.state.previousNumber = this.state.input
    this.setState({ input: "" })
    this.state.operator = "times"
  }
  divide = () => {
    this.state.previousNumber = this.state.input
    this.setState({ input: "" })
    this.state.operator = "divide"
  }

  equals = () => {
    this.state.currentNumber = this.state.input //shows in the input bit 

    if (this.state.operator == "plus") { //here i will tell the "add", "divide" etc what to actually do 
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber) //if plus is selected then add previous and current num
      })
    } else if (this.state.operator == "minus") { //using if else statement for the equals
      this.setState({
        input: parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
      })
    } else if (this.state.operator == "times") { 
      this.setState({
        input: parseInt(this.state.previousNumber) * parseInt(this.state.currentNumber)
      })
    } else if (this.state.operator == "divide") { 
      this.setState({
        input: parseInt(this.state.previousNumber) / parseInt(this.state.currentNumber)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>

          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>

          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.times}>*</Button>

          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>

          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.equals}>=</Button>
            <Button handleClick={this.minus}>-</Button>

          </div>
          <div className="row">
            <Clear handleClear={this.clearInput}>Clear</Clear>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
