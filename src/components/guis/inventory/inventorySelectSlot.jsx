import React, { Component } from "react";

export default class InventorySelectSlot extends Component {

    constructor(props) {
        super(props);
        this.deleteDragClone = this.deleteDragClone.bind(this);
        this.createDragClone = this.createDragClone.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);

        this.state = {
            block: this.props.block || null,
            dragClone: null,
        }
    }
    
    createDragClone(event) {
        const original = event.target;
        original.style.opacity = "0.001";
        const dragged = original.cloneNode(true);

        dragged.classList.add('slot-item--dragged');
        document.body.appendChild(dragged);

        this.setState({
            dragClone: dragged
        });
    }

    deleteDragClone(event) {
        const original = event.target;
        original.style.opacity = "1.0"

        const dragged = this.state.dragClone;
        if (dragged && dragged.parentNode)
            dragged.parentNode.removeChild(dragged);

        this.setState({
            dragClone: null
        });
    }

    // start dragging me
    onDragStart(event) {
        this.props.drag.changeItem(this.state.block, this.props.id);
        this.createDragClone(event);
    }

    // during dragging me
    onDragOver(event) {
        event.preventDefault();
    }

    // dropping item inside me
    onDrop(event) {
        event.preventDefault();
        const block = this.props.drag.item;
        this.props.drag.changeDroppedSlot(this.props.id);

        if (this.state.block == null)
            this.setState({block});
    }

    // end dragging me
    onDragEnd(event) {
        this.deleteDragClone(event);

        if (this.props.drag.droppedSelectSlot !== this.props.id)
            this.setState({block: null});

        this.props.drag.changeItem(null);
        this.props.drag.changeDroppedSlot(null);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.block !== nextState.block;
    }

    render() {
        return (
            <div className="slot inventory-slot">
                <div
                    className={`slot-item`}
                    draggable="true"
                    onDragStart={this.onDragStart}
                    onDragOver={this.onDragOver}
                    onDrop={this.onDrop}
                    onDragEnd={this.onDragEnd}
                    style={this.state.block && {backgroundImage: `url('${this.state.block.getItem().getTexture()}')`}}></div>
            </div>
        )
    }

}