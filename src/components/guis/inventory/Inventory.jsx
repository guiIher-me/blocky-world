import React, { Component } from "react";
import listeners from "../../../listeners";
import ItemCategories from "../../../ItemCategories";
import InventorySelectSlot from "./inventorySelectSlot";

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
        console.log('rendering inventory');

        const { actions } = this.props;
        { return (
                <div id="inventory-container" className={actions.opened ? '' : 'removed'}>
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
                                    return <div className="slot inventory-slot"><div className="slot-item" draggable="true" onDragStart={(event) => this.changeDragItem(block)} style={{backgroundImage: `url('${block.getItem().getTexture()}')`}}></div></div>
                                })}
                            </div>

                        </div>



                        <div className="inventory-selected-slot-line">

                            <div className="inventory-slot-grid">
                                <InventorySelectSlot id="1" drag={{
                                        slotid: this.state.draggedSelectSlot,
                                        item: this.state.draggItem,
                                        droppedSelectSlot: this.state.droppedSelectSlot,
                                        changeItem: this.changeDragItem,
                                        changeDroppedSlot: this.changeDroppedSlot
                                }}></InventorySelectSlot>
                                <InventorySelectSlot id="2" drag={{
                                        slotid: this.state.draggedSelectSlot,
                                        item: this.state.draggItem,
                                        droppedSelectSlot: this.state.droppedSelectSlot,
                                        changeItem: this.changeDragItem,
                                        changeDroppedSlot: this.changeDroppedSlot
                                }}></InventorySelectSlot>
                            </div>

                        </div>

                    </div>
                </div>
        )};
    }

}