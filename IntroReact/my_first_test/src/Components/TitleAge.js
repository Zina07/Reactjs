import React, { Component } from 'react';
class TitleAge extends Component {
render() {
    return (
        
        <div>
        <h2>Name: {this.props.name}</h2>
        <p>Age: {this.props.age} years old</p>
        <h2>Languages: {this.props.languages.join(', ')}</h2>
    </div>
        
    );
}
}
export default TitleAge