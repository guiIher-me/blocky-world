import React, { PureComponent } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

export default class MCButtonImg extends PureComponent {

    static propTypes = {
        btnid: PropTypes.string,
        src: PropTypes.string,
        title: PropTypes.string,
        onClick: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    }

    // eslint-disable-next-line no-unused-vars
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const { btnid, src, title, onClick } = this.props;
        const content = (
            <div className="title title-img">
                <img src={src} title={title} />
            </div>
        );

        return <Button btnid={btnid} onClick={onClick} content={content} classes={"mc-button"}></Button>
    }
}