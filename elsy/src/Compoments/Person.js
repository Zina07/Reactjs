import React, { Component } from 'react';
import Icon from '../Core/Icon'




class Person extends Component {
  render() {
    return (

      <div className="box col-md-2  col-6" style={{ fontSize: 100, color: 'black', float: 'left' }}>

        <Icon name='directions_walk' />
      </div>
    );
  }
}


export default Person;


