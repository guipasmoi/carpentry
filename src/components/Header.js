import React, { Component } from 'react';
import Slot, { slots } from '../lib/Slot';
import { getRegistry } from '../lib/registry';
import logo from '../logo.svg';

class Header extends Component {
    static propTypes = { children: slots(['default']) }

    render() {
        return (
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Slot.default fillWith={this.props.children || getRegistry().Header.default} />
          </div>
        );
    }
}


export default Header;