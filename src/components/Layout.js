import React, { Component } from 'react';
import Slot from './Slot';
import withSlots from './withSlots';

class Layout extends Component {
    render() {
        return (
          <div className="App">
              <Slot name="header" fillWith={this.props.children} />
              <Slot fillWith={this.props.children} />
              <Slot name="footer" fillWith={this.props.children} />
          </div>
        );
    }
}

export default withSlots(Layout, 'header', 'footer');
