import React, { Component } from "react";
import listeners from "../../../listeners";
import ItemCategories from "../../../ItemCategories";
import InventorySelectSlot from "./inventorySelectSlot";
import InventorySlot from "./InventorySlot";

export default class Inventory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeCategoryKey: Object.keys(ItemCategories)[0],
            draggedItem: null,
            droppedSelectSlot: null
        }

        this.changeDragItem = this.changeDragItem.bind(this);
        this.changeDroppedSlot = this.changeDroppedSlot.bind(this);
    }

    changeDragItem(block) {
        this.setState({ draggItem: block });
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
               this.state.draggItem !== nextState.draggItem ||
               this.state.droppedSelectSlot !== nextState.droppedSelectSlot
    }

    render() {

        const { actions } = this.props;
        { return (
                <div id="inventory-container" className={actions.opened ? '' : 'removed'} onClick={(event) => this.closeInventoryByClick(event, "inventory-container")}>
                    <div id="inventory">

                        <div id="inventory-categories">
                            {Object.entries(ItemCategories).map(([categoryKey, categoryValue]) => {
                                return (
                                    <div className={`inventory-category ${categoryKey == this.state.activeCategoryKey ? 'inventory-category--active' : ''}`}>
                                        <img src={categoryValue.getIllustration()} title={categoryValue.getTitle()} onClick={(event) => this.changeActiveCategory(categoryKey, event)}></img>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="inventory-slot-container">

                            <div className="inventory-slot-grid">
                                {ItemCategories[this.state.activeCategoryKey].getItems().map((block) => {
                                    return <InventorySlot block={block} changeDragItem={this.changeDragItem}></InventorySlot>
                                })}
                            </div>

                        </div>



                        <div className="inventory-selected-container">

                            <div className="inventory-slot-grid">

                                {[...Array(9)].map((x, i) =>
                                    <InventorySelectSlot
                                        id={i+1}

                                        drag={{
                                            slotid: this.state.draggedSelectSlot,
                                            item: this.state.draggItem,
                                            droppedSelectSlot: this.state.droppedSelectSlot,
                                            changeDragItem: this.changeDragItem,
                                            changeDroppedSlot: this.changeDroppedSlot
                                        }}
                                        
                                        changeItem={this.props.actions.changeSlot}
                                    >
                                    </InventorySelectSlot>
                                )}
                            </div>

                        </div>

                    </div>
                </div>
        )};
    }

}