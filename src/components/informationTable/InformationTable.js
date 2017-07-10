 import React, { Component } from 'react';

import InformationTableRow from './InformationTableRow';
import './InformationTable.css';

class InformationTable extends Component {
  render() {
    return (
           
        <div className="page-row" id="travel-table">
            <h3>Some information about the places I would like to visit</h3>
            <table>
                <thead>
                <tr>
                    <th className="destination">Destination</th>
                    <th className="capital">Capital</th>
                    <th className="language">Official Language</th>
                    <th className="population">Population (aprox.)</th>
                    <th className="bird">National Bird</th>
                </tr>
                </thead>
                <tbody>
                    <InformationTableRow country="Spain" 
                        capitol="Madrid"
                        language="Spanish"
                        population="46.77 million"
                        bird="Eagle"
                    />
                    <InformationTableRow country="Italy" 
                        capitol="Rome"
                        language="Italian"
                        population="59.83 million"
                        bird="Bluebirds"
                    />
                    <InformationTableRow country="Aruba" 
                        capitol="Oranjestad"
                        language="Dutch"
                        population="102,911"
                        bird="Aruban Burrowing Owl"
                    />
                    <InformationTableRow country="Chile" 
                        capitol="Santiago"
                        language="Spanish"
                        population="17.62 million"
                        bird="Andian Condor"
                    />                    
                </tbody>
            </table>
        </div>
    );
  }
}

export default InformationTable;          
