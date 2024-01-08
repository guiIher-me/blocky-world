import React, { Component, PureComponent } from "react";

export default class Button extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { btnid, content, classes, onClick, } = this.props;
        return <button {...(btnid ? {id: btnid} : {})}
                    type="button"
                    onClick={onClick}
                    className={`button ${classes}`}>
                        {content}
                </button>
    }
}