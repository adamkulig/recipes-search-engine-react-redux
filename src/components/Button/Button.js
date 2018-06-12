import React, { Component } from 'react';
import './Button.scss';

export class Button extends Component {
  render() {
    const { text } = this.props;
    return (
      <button
        className='btn' 
        onClick={this.props.onClick}>
        {text}
      </button>
    );
  }
}
