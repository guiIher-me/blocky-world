import React, { Component } from 'react';
import HotbarSlot from "./HotbarSlot";
import config from '../../../config';
import listeners from '../../../listeners';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default class Hotbar extends Component {

    static propTypes = {
        position: PropTypes.string.isRequired,
        changeActiveBlock: PropTypes.func.isRequired,
        slots: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            activeSlot: 1
        };
        this.changeActiveSlot = this.changeActiveSlot.bind(this);
        this.onNumberKeyPress = this.onNumberKeyPress.bind(this);
    }

    isValidSlot(number) {
        return number >= 1 && number <= config.HOTBAR_SLOTS;
    }

    changeActiveSlot({ activeNumber = null, activeBlock = null }) {
        if (activeNumber && this.isValidSlot(activeNumber))
            this.setState({ activeSlot: activeNumber});

        if (activeBlock)
            this.props.changeActiveBlock(activeBlock);
    }

    onNumberKeyPress(event) {
        const activeNumber = event.key;
        this.changeActiveSlot({ activeNumber });
    }

    componentDidMount() {
        listeners.KeyNumberListener.subscribe("hotbar-numbers", this.onNumberKeyPress);
    }

    componentWillUnmount() {
        listeners.KeyNumberListener.unsubscribe("hotbar-numbers");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.activeSlot !== nextState.activeSlot ||
               this.state.slots !== nextProps.slots;
    }

    render() {
        return (
            <div id="hotbar">

                {[...Array(config.HOTBAR_SLOTS)].map((x, i) =>
                    <HotbarSlot key={uuidv4()}
                                number={i+1}
                                item={this.props.slots[`slot-${i+1}`]}
                                active={this.state.activeSlot}
                                changeActiveSlot={this.changeActiveSlot}>            
                    </HotbarSlot>
                )}
                
            </div>
        );
    }

}