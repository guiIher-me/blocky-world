import React, { PureComponent } from "react";

export default class InventorySlot extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { block, changeDragItem } = this.props;
        return <div className="slot inventory-slot"><div className="slot-item" draggable="true" onDragStart={(event) => changeDragItem(block)} style={{backgroundImage: `url('${block.getItem().getTexture()}')`}}></div></div>

    }

}