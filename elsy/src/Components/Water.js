import React { Component } from 'react'
import Icon from '../Core/Icon'




class Water extends Component {
    render() {
        return (
            <div className="box col-md-2 xcol-6"> 

            <Icon name= "Local_drink" color="#3A85FF"></Icon>

            <p>{this.props.water}°L</p>

            <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                    value={this.props.Water}>

                </Slider>

            </div> 


        );
    }
}


export default Water;