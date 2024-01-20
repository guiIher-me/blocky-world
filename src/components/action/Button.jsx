import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

export default class Button extends PureComponent {

    static propTypes = {
        btnid: PropTypes.string,
        content: PropTypes.string.isRequired,
        classes: PropTypes.string,
        onClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { btnid, content, classes, onClick, } = this.props;
        return <button {...(btnid && {id: btnid})}
                    type="button"
                    onClick={onClick}
                    className={`button ${classes}`}>
                        {content}
                </button>
    }
}