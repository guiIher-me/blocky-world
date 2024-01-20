import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

export default class InventorySlot extends PureComponent {

    static propTypes = {
        block: PropTypes.object.isRequired,
        changeDragItem: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { block, changeDragItem } = this.props;

        // eslint-disable-next-line no-unused-vars
        return <div className="slot inventory-slot"><div className="slot-item" draggable="true" onDragStart={(event) => changeDragItem(block)} style={{backgroundImage: `url('${block.getItem().getTexture()}')`}}></div></div>

    }

}