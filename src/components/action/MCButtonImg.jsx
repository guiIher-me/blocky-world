import React, { Component, PureComponent } from "react";
import Button from "./Button";

export default class MCButtonImg extends PureComponent {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const { btnid, src, title, onClick } = this.props;
        const content = (
            <div class="title title-img">
                <img src={src} title={title} />
            </div>
        );

        return <Button btnid={btnid} onClick={onClick} content={content} classes={"mc-button"}></Button>
    }
}