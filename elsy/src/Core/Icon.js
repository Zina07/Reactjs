import React, { Component } from 'react';


class Icon extends React.Component {
    render() {
        return (

                <span class="material-icons" style={{fontSize: 100, color: this.props.color}}> 
                {this.props.name}

                </span>
                
        );
    }
} 


export default Icon;