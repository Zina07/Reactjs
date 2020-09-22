import React, { Component } from 'react';
import Icon from '../Core/Icon';

class HeartRate extends Component {
    render() {
        return (
            <div className="box col-md-2  col-6" style={{
                fontSize: 100, color: 'red', float: 'left',
            }}>


                <Icon name='favorite' />
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

//             </div > */}