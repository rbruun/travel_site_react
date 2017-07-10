import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <div id="footer">

            <div>&copy; Travel is fun</div>

            <div>

                <a href="http://facebook.com">Facebook</a>

                <a href="http://twitter.com">Twitter</a>

            </div>

        </div>
    );
  }
}

export default Footer;