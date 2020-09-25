import React, { Component } from 'react';


class Icon extends React.Component {
    render() {
        return (

            <div className=''>
                <span class="material-icons" style={{ fontSize: 100 }}>{this.props.name}</span>
            </div>

        );
    }
}a 


export default Icon;