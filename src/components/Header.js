import React, { Component } from 'react';
import Slot from './Slot';
import withSlots from './withSlots';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Slot fillWith={this.props.children} />
          </div>
        );
    }
}

export default withSlots(Header);
