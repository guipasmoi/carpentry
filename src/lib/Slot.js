import { Component } from 'react';
import { getRegistry } from '../lib/registry';

export const slots = (slotNames) => (props, propName, componentName) => {
    const errors = [];
    const analyseNode = node => {
        if (slotNames.indexOf(node.props.slot || 'default') === -1) {
            errors.push(`slot "${node.props.slot || "default" }" supplied to ${componentName}. Validation failed. Valid values are [${slotNames.join(',')}]`)
        }
    };
    if (!props.children)
        return;
    if (Array.isArray(props.children)) {
        props.children.forEach(analyseNode);
    }
    else if (typeof props.children !== "string") {
        analyseNode(props.children)
    }
    if (errors.length > 0) {
        return new Error(errors.join('\n'))
    }
}

const handler = {
    get: function (target, name) {
        return class Slot extends Component {
            static displayName = `Slot.${name}`;
            static defaultProps = {
                name,
            }

            render() {
                const fillWith = this.props.fillWith || getRegistry().Header.default;
                if (typeof fillWith === 'string')
                    return fillWith;
                const slotName = this.props.name;
                if (!fillWith)
                    return null;
                if (Array.isArray(fillWith)) {
                    const r = slotName !== 'default'
                      ? fillWith.filter(node => node.props['slot'] === slotName)
                      : fillWith.filter(node => !node.props['slot'] || node.props['slot'] === 'default')
                    return r || null;
                }
                return fillWith
            }
        }
    }
};

export default new Proxy({}, handler);

