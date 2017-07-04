import React, { Component } from 'react';
import Slot from './Slot';
import withSlots from './withSlots';

class Title extends Component {
    render() {
        return (
          <h1>
              <Slot fillWith={this.props.children} />
          </h1>
        );
    }
}

export default withSlots(Title);
