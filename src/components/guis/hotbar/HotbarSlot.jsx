import React, { Component } from 'react';
import Block from '../../../blocks/Block';
import SlotItem from './SlotItem';
import BlockUtil from '../../blocks/util/BlockUtil';

export default class HotbarSlot extends Component {

    constructor(props) {
        super(props);
        this.state = {
            block: BlockUtil.getRandomBlock()
        }

        this.selectSlot = this.selectSlot.bind(this);
    }

    hasBlock() {
        return this.state.block instanceof Block;
    }

    selectSlot() {
        const { number, changeActiveSlot } = this.props;
        changeActiveSlot({ activeNumber: number, activeBlock: this.state.block });
    }

    updateActiveSlotBlock() {
        const { number, active, changeActiveSlot } = this.props;
        if (active == number)
            changeActiveSlot({ activeBlock: this.state.block });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { number } = this.props;
        const newActive = nextProps.active;
        const oldActive = this.props.active;
        return number == newActive || number == oldActive;
    }

    render() {
        const { number, active } = this.props;
        this.updateActiveSlotBlock();

        return (
            <div id={`hotbar-slot-${number}`} onClick={this.selectSlot} className={`slot hotbar-slot ${active == number ? 'hotbar-slot--active' : ''}`}>
                {this.hasBlock() && <SlotItem item={this.state.block.getItem()}></SlotItem>}
            </div>
        )
    }

}