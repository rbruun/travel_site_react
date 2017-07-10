import React, { Component } from 'react';
import image1 from '../assets/images/travelimage3.jpg';
import image2 from '../assets/images/travelimage2.jpg';
import image3 from '../assets/images/travelimage3.jpg';

import './Carousel.css';

class Carousel extends Component {
  render() {
    return (
            <div className="container-fluid">
                    <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner mycarousel" role="listbox">
                    <div className="item active">
                        <img src={image1} height="200px" alt="..."/>
                        <div className="carousel-caption">
                            Fun vacation
                        </div>
                    </div>
                    <div className="item">
                        <img src={image2} height="200px" alt="..."/>
                        <div className="carousel-caption">
                            Funner Vacation
                        </div>
                    </div>
                    <div className="item">
                        <img src={image3} height="200px" alt="..."/>
                        <div className="carousel-caption">
                            Funnest Vacation
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
                <div id="hero">
                    <h1>Welcome to my travel site</h1>
                    <h2>This site is about places I would like to travel</h2>
                    <h3>Here are some places I would like to visit</h3>
                </div>
            </div>
    );
  }
}

export default Carousel;