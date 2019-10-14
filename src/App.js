import React, { Component } from 'react';
import cat from './cat.png';
import './App.css';


class App extends Component{
  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  click1 = () => {
    this.updateStats();
    this.loadFacts();
  }

  async loadFacts(){
    const json1 = await fetch(
      "https://cors-anywhere.herokuapp.com/https://catfact.ninja/fact"
    );
    console.log(json1);
    const text = await json1.json();
    console.log(text);
    this.setState({
      content: text.fact
    });
  }

  updateStats(){
    this.setState({
      content: this.state.content
    })
  }

  async componentDidMount(){
    this.loadFacts();
  }


  render() {
    return(
      <div className="App">
      <div className="button-row">
          <button className='button' onClick={this.click1}>
              Meow
          </button>
      </div>
      <div className="fact">
        {this.state.content}
      </div>
      <img className="pic" src={cat} alt="cat"/>
      </div>
    )
  }
}
export default App;
