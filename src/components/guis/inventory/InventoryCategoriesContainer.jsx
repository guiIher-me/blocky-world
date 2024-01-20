import React, { Component } from "react";
import ItemCategories from "../../../ItemCategories";
import PropTypes from 'prop-types';

export default class InventoryCategoriesContainer extends Component {

    static propTypes = {
        activeCategoryKey: PropTypes.string.isRequired,
        changeActiveCategory: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
    }

    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.activeCategoryKey !== nextProps.activeCategoryKey;
    }

    render() {
        const { activeCategoryKey, changeActiveCategory } = this.props;

        return (
            <div id="inventory-categories-container">
                {Object.entries(ItemCategories).map(([categoryKey, categoryValue]) => {
                    return (
                        <div key={ categoryValue.getTitle() } className={`inventory-category ${categoryKey == activeCategoryKey ? 'inventory-category--active' : ''}`}>
                            <img src={categoryValue.getIllustration()} title={categoryValue.getTitle()} onClick={(event) => changeActiveCategory(categoryKey, event)}></img>
                        </div>
                    )
                })}
            </div>
        );
    }

}