import React, { Component } from 'react';

export default class Slot extends Component {
    static defaultProps = {
        name: 'default',
    }

    render() {
        if (typeof this.props.fillWith === 'string')
            return <span>{this.props.fillWith}</span>;
        const slotName = this.props.name;
        if (!this.props.fillWith)
            return null;
        if (Array.isArray(this.props.fillWith)) {
            const r = slotName !== 'default'
              ? this.props.fillWith.filter(node => node.props['slot'] === slotName)
              : this.props.fillWith.filter(node => !node.props['slot'] || node.props['slot'] === 'default')
            if (r.length > 1) console.warn('Beware multiple slot define with name')
            return r[0] || null;
        }
        return this.props.fillWith
    }
}