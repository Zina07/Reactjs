import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// <Title name="John" /> 
//           <TitleAge age={18} />  
//           <PlusVal
//                 name="John"
//                 age={18}
//                 languages={['french', 'english']} /> */}

const MIN_TEMPERATURE 
MIN_TEMPERATURE = -20
const MAX_TEMPERATURE; 
MAX_TEMPERATURE = 40;
const MIN_HEART; MIN_HEART = 80;
const MAX_HEART; MAX_HEART = 180;
const MIN_STEPS; MIN_STEPS = 0;
const MAX_STEPS; MAX_STEPS = 50000;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Bonjour !</h1> 
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>            
            Edit <code>src/App.js</code> and save to reload.
          </p> 
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             Learn React
           </a>

        </header>
      </div>
    );
  }
}
export default App;



