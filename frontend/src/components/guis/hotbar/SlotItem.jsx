import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SlotItem extends Component {

    static propTypes = {
        item: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.item.getTexture() !== nextProps.item.getTexture();
    }

    render() {
        const { item } = this.props;
        return <div className='slot-item' style={{backgroundImage: `url("${item.getTexture()}")`}}></div>
    }

}