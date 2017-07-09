import React, { Component } from 'react';
import Slot from '../lib/Slot';
import withSlots from '../lib/withSlots';
import { getRegistry } from '../lib/registry';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Slot fillWith={this.props.children || getRegistry().Header.default} />
          </div>
        );
    }
}

const SlotDefault = Slot;

export default withSlots(Header);