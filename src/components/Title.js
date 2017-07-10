import React, { Component } from 'react';
import Slot  from '../lib/Slot';
import withSlots from '../lib/withSlots';

class Title extends Component {
    render() {
        return (
          <h1>
              <Slot.default fillWith={this.props.children} />
          </h1>
        );
    }
}

export default withSlots(Title);
