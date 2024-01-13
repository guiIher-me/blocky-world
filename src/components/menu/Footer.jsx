import React, { Component } from "react";
import Hotbar from "../guis/hotbar/Hotbar";
import MCButtonImg from "../action/MCButtonImg";

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        const {actions} = this.props;
        return actions.view360.value !== nextProps.actions.view360.value ||
               this.props.slots !== nextProps.slots;
    }

    render() {
        const { slots, actions } = this.props;

        return (
            <div id="footerbar-container" className={ actions.view360.value == true ? 'hidden' : '' }>
                <Hotbar slots={slots} changeActiveBlock={actions.changeActiveBlock}></Hotbar>
                <MCButtonImg btnid="btn-inventory" title="open inventory" src="./src/textures/icons/chest--icon.png" onClick={actions.openInventory}></MCButtonImg>
            </div>
        );
    }
}