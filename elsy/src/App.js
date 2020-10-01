import React, { Component } from 'react';
import './css/styles.css';
import './css/bootstrap.min.css';

import Person from './Components/Person';
import HeartRate from './Components/HeartRate';
import Icon from './Core/Icon';
import Slider from '../src/Core/Slider';
import Temperature from './Components/Temperature'
import Water from './Components/Water'
 


const MIN_TEMPERATURE = -20
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;



class App extends React.Component {
  constructor() {
    super();
  
  this.state = {
  water: 0,
  heart : 120,
  temperature: -10,
  steps: 3000,
  }

    this.onStepsChange = this.onStepsChange.bind(this);
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
}
  

    OnStepsChange(val) {
      let newWater = this.CalculateWater()
        this.setState({
        steps: val
  });
  }

    OnHeartChange(val) {
      let newWater = this.CalculateWater()
        this.setState({
        heart: val
  });

}
    OnTemperatureChange(val) {
      let newWater = this.CalculateWater()

        this.setState({
          temperature: val,
          water: newWater
  });

}

    CalculWater() {
        let liters = 1.5

        if (obj.temperature > 20) {
          liters+= temp * 0.02
        }
        if (obj.HeartRate > 120) {
          let rate = obj.heart -120
          liters += rate * 0.0008
        }
        if (obj.steps > 1000) {
          let steps = obj.steps -10000
          liters += pas * 0.0002
        }
        return Math.round(liters * 100) / 100
});

}

  render() {
    return (

      <div className='container-fluid'>

        <Water water ={this.props.water}></Water>
        <Person           min= {MIN_STEPS}
                          max= {MAX_STEPS}
                          onChange= {this.onStepsChange}
                          steps={this.state.steps}> 
        </Person>  
        <HeartRate        min= {MIN_HEART}
                          max= {MAX_HEART}
                          onChange= {this.onHeartChange}
                          heart={this.state.heart}> 
        </HeartRate>
        <Temperature      min= {MIN_TEMPERATURE}
                          max= {MAX_TEMPERATURE}
                          onChange= {this.onTemperatureChange}
                          temperature={this.state.temperature}> 
        </Temperature>

        <Icon></Icon>

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