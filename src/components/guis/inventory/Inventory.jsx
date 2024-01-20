import React, { Component } from "react";
import listeners from "../../../listeners";
import ItemCategories from "../../../ItemCategories";
import PropTypes from 'prop-types';
import InventorySelectedContainer from "./InventorySelectedContainer";
import InventorySlotContainer from "./InventorySlotContainer";
import InventoryCategoriesContainer from "./InventoryCategoriesContainer";

export default class Inventory extends Component {

    static propTypes = {
        actions: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            activeCategoryKey: Object.keys(ItemCategories)[0],
            draggedItem: null,
            droppedSelectSlot: null
        }

        this.changeDragItem = this.changeDragItem.bind(this);
        this.changeActiveCategory = this.changeActiveCategory.bind(this);
        this.changeDroppedSlot = this.changeDroppedSlot.bind(this);
    }

    changeDragItem(block) {
        console.log("changing item to:");
        console.log(block);
        this.setState({ draggedItem: block });
    }

    changeDroppedSlot(droppedSelectSlot) {
        this.setState({ droppedSelectSlot });
    }

    changeActiveCategory(activeCategoryKey, event) {
        if (activeCategoryKey !== this.state.activeCategoryKey) {
            this.setState({ activeCategoryKey });
            event.preventDefault();
        }
    }

    closeInventoryByClick(event, containerId) {
        if (event.target.id === containerId) {
            this.props.actions.close(event);
        }
    }

    componentDidMount() {
        listeners.EscListener.subscribe("inventory", this.props.actions.close);
    }

    componentWillUnmount() {
        listeners.EscListener.unsubscribe("inventory");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.actions.opened !== nextProps.actions.opened ||
               this.state.activeCategoryKey !== nextState.activeCategoryKey ||
               this.state.draggedItem !== nextState.draggedItem ||
               this.state.droppedSelectSlot !== nextState.droppedSelectSlot
    }

    render() {
        console.log("rerender inventory");

        const { actions } = this.props;
        return (
                <div id="inventory-container" className={actions.opened ? '' : 'removed'} onClick={(event) => this.closeInventoryByClick(event, "inventory-container")}>
                    <div id="inventory">

                        <InventoryCategoriesContainer
                            activeCategoryKey={this.state.activeCategoryKey}
                            changeActiveCategory={this.changeActiveCategory}
                        />
                        
                        <InventorySlotContainer
                            activeCategoryKey={this.state.activeCategoryKey}
                            changeDragItem={this.changeDragItem}
                        />

                        <InventorySelectedContainer
                            draggedSelectSlot={this.state.draggedSelectSlot}
                            draggedItem={this.state.draggedItem}
                            droppedSelectSlot={this.state.droppedSelectSlot}
                            actions={{
                                changeDragItem: this.changeDragItem,
                                changeDroppedSlot: this.changeDroppedSlot,
                                changeSlot: this.props.actions.changeSlot
                            }}
                        />

                    </div>
                </div>
        );
    }
}