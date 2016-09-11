import React from 'react';

class Submit extends React.Component {
  constructor() {
    super();
    this.state = {
      lastGuess: null,
      guessCount: 0,
      minimum: 1,
      maximum: 10,
      randomNumber: 7,
      // randomNumber: this.generateRandomNumber(this.minimum, this.maximum),
    };
  }

  // var randomNumberGenerator = function(min, max) {
  //     return (Math.floor(Math.random() * (max - min + 1)) + min);
  // }

  resetRandomNumber(min, max) {
    return (
      Math.floor(Math.random()* (max-min+1))+min
    );
  }

  setRange() {
    let minInput = parseInt(document.querySelector('.MinInput').value)
    let maxInput = parseInt(document.querySelector('.MaxInput').value)
    this.state.minimum = minInput;
    this.state.maximum = maxInput;
    this.state.randomNumber = (
      Math.floor(Math.random()* (maxInput-minInput+1))+ minInput
      );
    console.log(this.state.randomNumber);
  }

  getInputValue() {
    let lastGuess = parseInt(document.querySelector('.Guess').value)
    this.state.lastGuess = lastGuess;
    console.log(this.state.randomNumber);
    if (this.state.lastGuess === this.state.randomNumber) {
      document.querySelector('.UserMessage').textContent = 'nailed it!';
    }
    if (this.state.lastGuess < this.state.randomNumber) {
      document.querySelector('.UserMessage').textContent = 'guess of '+lastGuess+' too low';
    }
    if (this.state.lastGuess > this.state.randomNumber) {
      document.querySelector('.UserMessage').textContent = 'guess of '+lastGuess+' too high';
    }
  }

  render() {
    return (
      <div className="Submit">
        <button className="SubmitGuess" onClick={() => this.getInputValue()}>
        Enter Guess
        </button>
        <button className="ResetRange" onClick={() => this.setRange()}>
        Reset Range</button>
      </div>
    );
  }
}

export default Submit
