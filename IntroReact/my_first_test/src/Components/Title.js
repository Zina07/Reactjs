import React, { Component } from 'react';
class Title extends Component {
render() {
    return (
        <div>
            <h2>Name: {this.props.name}</h2>
        </div>
    );
}
}
export default Title