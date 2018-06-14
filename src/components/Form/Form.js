import React, { Component } from 'react';
import './Form.scss';

export class Form extends Component {
  handleSubmit = (event) => event.preventDefault();

  render() {
    const { text, className, placeholder, onChange, onKeyUp } = this.props;
    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <input className={`${className}__input`}
          type="text" 
          placeholder={placeholder} 
          onChange={onChange}
          onKeyUp={onKeyUp} 
        />
        <label className={`${className}__label`}> 
          {text}
        </label>
      </form>
    );
  }
}
