import { Component } from 'react';

export default class Slot extends Component {
    render() {
        if (typeof this.props.fillWith === 'string')
            return this.props.fillWith;
        const slotName = this.props.name;
        if (!this.props.fillWith)
            return null;
        if (Array.isArray(this.props.fillWith)) {
            const r = slotName !== 'default'
              ? this.props.fillWith.filter(node => node.props['slot'] === slotName)
              : this.props.fillWith.filter(node => !node.props['slot'] || node.props['slot'] === 'default')
            return r || null;
        }
        return this.props.fillWith
    }
}