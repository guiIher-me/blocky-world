import React, { Component, PureComponent } from 'react';
import HotbarSlot from "./HotbarSlot";
import config from '../../../config';
import listeners from '../../../listeners';

export default class Hotbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeSlot: 1
        }

        this.changeActiveSlot = this.changeActiveSlot.bind(this);
        this.onNumberKeyPress = this.onNumberKeyPress.bind(this);
    }

    isValidSlot(number) {
        return number >= 1 && number <= config.HOTBAR_SLOTS
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
        listeners.KeyNumberListener.subscribe("hotbar", this.onNumberKeyPress);
    }

    componentWillUnmount() {
        listeners.KeyNumberListener.unsubscribe("hotbar");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.activeSlot !== nextState.activeSlot;
    }

    render() {
        return (
            <div id="hotbar">

                {[...Array(config.HOTBAR_SLOTS)].map((x, i) =>
                    <HotbarSlot number={i+1}
                                active={this.state.activeSlot}
                                changeActiveSlot={this.changeActiveSlot}>            
                    </HotbarSlot>
                )}

            </div>
        )
    }

}