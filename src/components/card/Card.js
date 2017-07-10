import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  render() {
    return (
                <div className="card" id={this.props.id}>
                    <h3>{this.props.country}</h3>
                    <a href={this.props.href} target="_blank">{this.props.link}</a>
                </div>
    );
  }
}

export default Card;




