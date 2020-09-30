import React, { Component } from 'react';


class Button extends Component {
    render() {
        return (
            <div>
                <button type="button"
                ClassName={this.props.isSelected ? "btn btn-outline-info active": "btn btn-outline-info"}
                onClick={this.props.onClick}>{this.props.children}
                </button>
            </div>
        );
    }
}


export default Button;

            //