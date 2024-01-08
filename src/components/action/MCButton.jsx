import React, { Component, PureComponent } from "react";
import Button from "./Button";

export default class MCButton extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes = '', title, onClick } = this.props;
        const content = <div class="title">{title}</div>;
        return <Button onClick={onClick} content={content} classes={`mc-button ${classes}`}></Button>
    }
}