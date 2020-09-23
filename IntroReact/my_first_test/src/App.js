import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './component/Title'
import TitleAge from './component/TitleAge'
import PlusVal from './component/PlusVal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World Zina</h1> 
          <Title name="John" /> 
          <TitleAge age={18} />  
          <PlusVal
                name="John"
                age={18}
                languages={['french', 'english']} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>            
            Edit <code>src/App.js</code> and save to reload.
          </p> <a
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
