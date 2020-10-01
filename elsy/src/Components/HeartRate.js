import React, { Component } from 'react';
import Icon from '../Core/Icon';
import Slider from "../Core/Slider";

class HeartRate extends Component {
    render() {
        return (
            <div className="box col-md-2 col-6">
                <Icon name='favorite' color='red'> </Icon>
                <p>{this.props.heart} BPM</p>
                <p>{this.props.step}</p>
                <Slider
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                    value={this.props.heart}>

                </Slider>

            </div>
        );
    }
}

export default HeartRate;

// {/* <div className="box,col-md-2 et col-6" style={{
//                 fontSize: 100,
//                 color: 'red', float: 'left',
//             }}>

//                 <span class="material-icons" style={{
//                 fontSize: 100,
//                 color: 'red', float: 'left',
//             }}> 
//                     favorite 
//                 </span>
//                 <p>{this.props.heart}</p>

//             </div > 
// style={{
//                 fontSize: 100, color: 'red', float: 'left',
//             }}>*/tyle={{
//     fontSize: 100, color: 'red', float: 'left',
// }}>*/*/}