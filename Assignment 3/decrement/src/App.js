import React, { Component } from 'react';
import PropType from "prop-types";
import './App.css';

class Decrement extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      number: props.number
    };
  }

  // function that performs the logical decrement
  decreaseNumber = () =>{
    if(this.state.number === 0){
      alert("Cannot be less than 0")
    }
    else{
      this.setState({number: this.state.number-1});
    }
  };

  // function that renders the reactDOM
  render(){
    return(
      <div id="container-main">
        <div id = "number-layout">{this.state.number}</div>
        <button id = "button-layout" onClick ={this.decreaseNumber}>Decrement</button>       
      </div>
    );
  }
}

// PropType checks
Decrement.PropType = {
  number: PropType.number.isRequired
}

// Exporting the parent Component
export default Decrement;