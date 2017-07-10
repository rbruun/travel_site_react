import React, { Component } from 'react';

import './Card.css';
import Card from './Card.js';

class Cards extends Component {
  render() {
    return (
            <div id="allcards" className="page-row">
              <Card id="spain" country="Spain" href="http://www.spain.info/en_US/" link="Spain Tourism Site"/>
              <Card id="italy" country="Italy" href="http://www.italia.it/en/home.html/" link="Italy Tourism Site"/>
              <Card id="chile" country="Chile" href="http://www.arubatourism.com/" link="Chile Tourism Site"/>
              <Card id="aruba" country="Aruba" href="http://www.italia.it/en/home.html/" link="Aruba Tourism Site"/>
            </div>
    );
  }
}

export default Cards;