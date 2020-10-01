import React, { Component } from 'react';
import Icon from '../Core/Icon'
import Slider from "../Core/Slider";




class Person extends Component {
  render() {
    return (

      <div className="box col-md-2 col-6">

        <Icon name='directions_walk' color='black'></Icon>
        <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                    value={this.props.steps}>

                </Slider>
      </div>
    );
  }
}


export default Person;

//style={{ fontSize: 100, color: 'black', float: 'left' }}>

