import React, { Component } from 'react';

export default class SlotItem extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.item.getTexture() !== nextProps.item.getTexture();
    }

    render() {
        const { item } = this.props;
        return <div className='slot-item' style={{backgroundImage: `url("${item.getTexture()}")`}}></div>
    }

}