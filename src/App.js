import React, { Component } from 'react';
import cat from './cat.png';
import './App.css';


class App extends Component{
  constructor() {
    super();
    this.state = {
      content: "ok"
    };
  }

  click1 = () => {
    this.updateStats();
    this.loadFacts();
  }

  async loadFacts(){
    const json1 = await fetch ("cat-fact.herokuapp.com/facts/random?animal_type=cat");
    this.setState({
      content: json1.text
    })
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
      <div className="box">
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
