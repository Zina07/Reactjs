import React, { Component } from 'react';


class Icon extends React.Component {
    render() {
        return (

            <div className='box'>
                <span class="material-icons" style={{ fontSize: 100 }}>{this.props.name}</span>
            </div>

        );
    }
}


export default Icon;