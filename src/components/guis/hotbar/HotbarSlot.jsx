import React, { Component } from 'react';
import Block from '../../../blocks/Block';
import SlotItem from './SlotItem';

export default class HotbarSlot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            block: props.item
        }

        this.selectSlot = this.selectSlot.bind(this);
    }

    hasBlock() {
        return this.props.item instanceof Block;
    }

    selectSlot() {
        const { number, changeActiveSlot } = this.props;
        changeActiveSlot({ activeNumber: number, activeBlock: this.props.item });
    }

    updateActiveSlotBlock() {
        const { number, active, changeActiveSlot } = this.props;
        if (active == number)
            changeActiveSlot({ activeBlock: this.props.item });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { number } = this.props;
        const newActive = nextProps.active;
        const oldActive = this.props.active;

        return number == newActive || number == oldActive ||
               this.props.item !== nextProps.item;
    }

    render() {
        const { item, number, active } = this.props;
        this.updateActiveSlotBlock();

        return (
            <div id={`hotbar-slot-${number}`} onClick={this.selectSlot} className={`slot hotbar-slot ${active == number ? 'hotbar-slot--active' : ''}`}>
                {this.hasBlock() && <SlotItem item={this.props.item.getItem()}></SlotItem>}
            </div>
        )
    }

}