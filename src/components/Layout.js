import React, { Component } from 'react';
import Slot, { slots } from '../lib/Slot';

export default class Layout extends Component {
    static propTypes = { children: slots(['header', 'footer', 'default']) }

    render() {
        return (
          <div className="App">
              <Slot.header fillWith={this.props.children} />
              <Slot.default fillWith={this.props.children} />
              <Slot.footer fillWith={this.props.children} />
          </div>
        );
    }
}


