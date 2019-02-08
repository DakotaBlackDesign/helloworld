import React, { Component } from 'react';
import './App.css';
var Windex
var Aindex
var wisdoms = [
  "trees are made of goats and cats",
  "fish are made of leaves",
  "mice are made of cats and chicken",
  "worms are made of soil and trees",
  "children are made of worms and chicken",
  "leaves are made of dreams long forgotten",
  "dog meat is made of mice and children ",
  "Dogs are made of dog meat.",
  "cat are made of cat feet.",
  "goats are made of fish."
]

var authors = [
  "Bob",
  "Joe",
  "Sue",
  "Dr. Evil",
  "Charlie Chaplin",
  "Sr. Issac Newton",
  "Jean Luc Gudard",
  "Satan",
  "Yea Old Fart",
  "Captian Bonzai",
  "liliputin"
]

var list = []
	
class App extends Component {
  constructor(props) {
    super(props);
    
    Windex = Math.floor(Math.random() * wisdoms.length);
    Aindex = Math.floor(Math.random() * authors.length);

    this.state = {
      wisdom: wisdoms[Windex],
      author: authors[Aindex]
    };
    
    this.setRandom = this.setRandom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
    setInterval(this.setRandomWisdom,15000);
  }
  
   setRandom(){
     var index = Math.floor(Math.random() * authors.length);
    if(index === Aindex){
        index ++;
        }

    if(index >=  authors.length) index = 0;
    Aindex = index;
    this.setState({
      author: authors[Aindex]
    });

    var index1 = Math.floor(Math.random() * wisdoms.length);
    if(index1 === Windex){
        index1 ++;
        }

    if(index1 >=  wisdoms.length) index1 = 0;
    Windex = index1;
    this.setState({
      wisdom: wisdoms[Windex]
    });
  }
  
  addWisdom() {
    wisdoms.push("I am Made of "+ prompt("What are you made of?"));
    authors.push(prompt("your name"));
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }
  
  makeList(){
    list.push(<li>{this.state.wisdom}</li>);
      if(list.length >3){
	wisdoms.splice(1, 1)
      }
  }

render() {
	{this.makeList()}
    return (
      <div className="App">
	<p>{list}</p>
	<h1>What Are you Made Of?</h1>
        <h2>{this.state.wisdom}</h2>
	<p>-{this.state.author}</p>
        <button className="more" onClick={this.setRandom}>Tell Me More</button>
	<button className="add"  onClick={this.addWisdom}>Contribute</button>
      </div>
    );
  }
}

export default App;
