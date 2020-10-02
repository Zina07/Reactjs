import React, { Component } from 'react';

class Add extends Component {
    constructor() {
        super()
        this.state = {
            itemName: '',
            price: 1,
        }
        //partie3

    }
    render() {
        return (
            <div>Add
            <input type="text"
            className={this.props.onChange}></input>
            <input type range></input> 
            </div>
        );
    }
}

export default Add;