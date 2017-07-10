import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousel/Carousel';
import Cards from './components/card/Cards';
import InformationTable from './components/informationTable/InformationTable';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <div id="content">
            <Cards />
            <InformationTable />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
