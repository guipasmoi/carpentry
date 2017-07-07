import React from 'react';

const slotProps = ['slot', 'name'];

function filterProps(props = {}, filter = slotProps) {
    return Object.entries(props).reduce((result, [key, value]) => {
        if (filter.indexOf(key || 'default'))
            result[key] = value;
        return result;
    }, {})
}


const slotPropType = (slotNames) => (props, propName, componentName) => {
    const errors = [];
    const analyseNode = node => {
        if (slotNames.indexOf(node.props.slot || 'default') === -1) {
            errors.push(`slot "${node.props.slot || "default" }" supplied to ${componentName}. Validation failed. Valid values are [${slotNames.join(',')}]`)
        }
    };
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

export default function withSlots(MyComponent, ...slotNames) {
    const ComponentWithSlots = (props) => <MyComponent {...filterProps(props)} />
    ComponentWithSlots.propTypes = {
        children: slotPropType(slotNames.concat('default')),
    };
    ComponentWithSlots.displayName = `${MyComponent.displayName || 'Component'}(withSlots)`;
    return ComponentWithSlots;
}

