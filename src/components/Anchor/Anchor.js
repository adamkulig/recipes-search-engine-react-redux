import React, { Component } from 'react';
import './Anchor.scss';

export class Anchor extends Component {
  render() {
    const { text, link } = this.props;
    return (
      <a
        className='anchor' 
        href={link}
        target='_blank'>
        {text}
      </a>
    );
  }
}

