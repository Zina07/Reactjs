import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Compoments/Person';
import HeartRate from './Compoments/HeartRate'
import Icon from './Core/Icon';


const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;



class App extends React.Component {
  constructor() {
    super();
    
  }
  
  state = {
  water: 0,
  heart : 120,
  temperature: -10,
  steps: 3000,
  }
  render() {
    return (

      <div className='App'>

        <Person steps={this.state.steps}/>  <HeartRate heart={this.state.heart} /> 
        <Icon />

      </div>


    );
  }
}

export default App;

/* <div className="App">

<h1>Bonjour !</h1>
 <div className="container-fluid"> */
/* <p>Battements de coeurs: {MIN_HEART}</p>
          <p>Temperature: {MIN_TEMPERATURE}</p>

          <p>Nombre de pas: {MIN_STEPS}</p>  */


         // <Person />

         // <HeartRate heart={MIN_HEART}></HeartRate>