import React, { PureComponent } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

export default class MCButton extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        classes: PropTypes.string,
        onClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const { classes = '', title, onClick } = this.props;
        const content = <div className="title">{title}</div>;
        return <Button onClick={onClick} content={content} classes={`mc-button ${classes}`}></Button>
    }
}