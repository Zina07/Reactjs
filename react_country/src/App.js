import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/Components/Button'

class App extends Component {
  state= {
    name: '',
    capital: '',
    flag: '',
    population: 0,
    region: '',

  }
  componentDidMount () {
    fetch('https://restcountries.eu/rest/v2/name/france')
    .then(res => res.json())
    .then(json => {
      this.setState ({
      name: json[0].name,
      capital: json[0].capital,
      flag: json[0].flag,
      population: json[0].population,
      region: json[0].region,
    });
  })
}
  

  render() {
    return (
      <div>
            {this.state.name}
            {this.state.capital}
            {this.state.flag}
            {this.state.population}
            {this.state.region}
      
        
      </div>
    );
  }
}

export default App;
