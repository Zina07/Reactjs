import React, { Component } from 'react';


class Counter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.incrementFn}>+</button>

                <button onClick={this.props.decrementFn}>-</button>
                <h2> {this.props.counter}</h2>
            </div>
        );
    }
}

export default Counter;