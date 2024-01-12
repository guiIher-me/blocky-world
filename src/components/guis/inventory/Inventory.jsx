import React, { Component } from "react";
import listeners from "../../../listeners";
import ItemCategories from "../../../ItemCategories";

export default class Inventory extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        listeners.EscListener.subscribe("inventory", this.props.actions.close);
    }

    componentWillUnmount() {
        listeners.EscListener.unsubscribe("inventory");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.actions.opened !== nextProps.actions.opened;
    }

    render() {
        console.log('rendering inventory');

        const { actions } = this.props;
        { return (
                <div id="inventory-container" className={actions.opened ? '' : 'removed'}>
                    <div id="inventory">

                        <div id="inventory-categories">
                            {Object.values(ItemCategories).map((ItemCategory) => {
                                return (
                                    <div className="inventory-category">
                                        <img src={ItemCategory.getIllustration()} title={ItemCategory.getTitle()}></img>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="inventory-slot-grid">
                            <div className="inventory-slot-line">
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                            </div>

                            <div className="inventory-slot-line">
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                            </div>

                            <div className="inventory-slot-line">
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                            </div>

                            <div className="inventory-slot-line">
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                            </div>

                            <div className="inventory-slot-line">
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                            </div>
                        </div>

                        <div className="inventory-selected-slot-line">
                            <div className="inventory-slot-line">
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                                <div className="slot inventory-slot"><div className="slot-item"></div></div>
                            </div>

                        </div>

                    </div>
                </div>
        )};
    }

}