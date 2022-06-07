import React, { Component } from 'react';
import './App.css';

class App extends Component {
  calculate = () =>{
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let op = document.getElementById('operators').value;
    if(num1 === "" || num2  === ""){
      document.getElementById('result').value = "Please Enter Both Numbers...";
    }
    else{
      switch(op){
        case "add":
          document.getElementById('result').value = Number(num1) + Number(num2);
          break;
        case "sub":
          document.getElementById('result').value = Number(num1) - Number(num2);
          break;
        case "mul":
          document.getElementById('result').value = Number(num1) * Number(num2);
          break;
        case "div":
            document.getElementById('result').value = Number(num1) / Number(num2);
            break;
        default:
          break;
      }
    }
    }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Arithmetic Calculation Application</h1>
        <div className='Container'>
          <input className='Input' type="number" id='num1' placeholder="Enter First Number Here..."></input>
        <select className='Enter' name="operators" id="operators">
          <option className='Enter' value="add">+</option>
          <option className='Enter' value="sub">−</option>
          <option className='Enter' value="mul">x</option>
          <option className='Enter' value="div"> /</option>
        </select>
        <input className='Input' type="number" id='num2' placeholder="Enter Second Number Here..."></input>
        <button className="Enter" onClick={this.calculate}>=</button>
        <input className='Input' id="result" value="Your Result Will Appear Here..." readonly></input>
        </div>
      </header>
    </div>
  );}
}

export default App;
