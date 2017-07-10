import React, { Component } from 'react';

import './InformationTable.css';

class InformationTableRow extends Component {
  render() {
    return (
                <tr>
                    <td className="destination">{this.props.country}</td>
                    <td className="capital">{this.props.capitol}</td>
                    <td className="language">{this.props.language}</td>
                    <td className="population">{this.props.population}</td>
                    <td className="bird">{this.props.bird}</td>
                </tr>
    );
  }
}

export default InformationTableRow;