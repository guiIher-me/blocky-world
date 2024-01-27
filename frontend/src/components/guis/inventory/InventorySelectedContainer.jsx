import React, { Component } from "react";
import InventorySelectSlot from "./inventorySelectSlot";
import PropTypes from 'prop-types';

export default class InventorySelectedContainer extends Component {

    static propTypes = {
        draggedSelectSlot: PropTypes.object.isRequired,
        draggedItem: PropTypes.object.isRequired,
        droppedSelectSlot: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.draggedItem !== nextProps.draggedItem ||
               this.props.droppedSelectSlot !== nextProps.droppedSelectSlot;
    }

    render() {
        const { draggedSelectSlot, draggedItem, droppedSelectSlot, actions } = this.props;

        return (
            <div className="inventory-selected-container">

                <div className="inventory-slot-grid">

                    {[...Array(9)].map((x, i) =>
                        <InventorySelectSlot
                            key={ i+1 }
                            id={ i+1 }

                            drag={{
                                slotid: draggedSelectSlot,
                                item: draggedItem,
                                droppedSelectSlot: droppedSelectSlot,
                                changeDragItem: actions.changeDragItem,
                                changeDroppedSlot: actions.changeDroppedSlot
                            }}
                            
                            changeItem={ actions.changeSlot }
                        >
                        </InventorySelectSlot>
                    )}
                </div>

            </div>
        );
    }

}