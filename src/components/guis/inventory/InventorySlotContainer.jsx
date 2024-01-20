import React, { Component } from "react";
import ItemCategories from "../../../ItemCategories";
import InventorySlot from "./InventorySlot";
import { v4 as uuidv4 } from 'uuid';

import PropTypes from 'prop-types';

export default class InventorySlotContainer extends Component {

    static propTypes = {
        activeCategoryKey: PropTypes.string.isRequired,
        changeDragItem: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.activeCategoryKey !== nextProps.activeCategoryKey;
    }

    render() {
        console.log("rerender inventory slots");

        const { activeCategoryKey, changeDragItem } = this.props;

        return (
            <div className="inventory-slot-container">

                <div className="inventory-slot-grid">
                    {ItemCategories[activeCategoryKey].getItems().map((block) => {
                        return <InventorySlot key={ uuidv4() } block={block} changeDragItem={changeDragItem}></InventorySlot>
                    })}
                </div>

            </div>
        );
    }

}