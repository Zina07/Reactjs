import React, { Component } from 'react'
import Icon from '../Core/Icon'
import Slider from "../Core/Slider";

class Temperature extends Component {
    render() {
        return (
            <div className="box col-md-2 xcol-6"> 

            <Icon name= "wb_sunny" color="yellow"></Icon>

            <p>{this.props.temperature}°C</p>

            <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                    value={this.props.temperature}>

                </Slider>

            </div> 


        );
    }
}


export default Temperature;