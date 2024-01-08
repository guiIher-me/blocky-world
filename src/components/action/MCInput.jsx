import React, { Component, PureComponent } from "react";

export default class MCInput extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value
        }

        this.onChange = this.onChange.bind(this);
        this.notifyChanges = this.notifyChanges.bind(this);
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({
            text: value
       });
    }

    notifyChanges(event) {
        const { onFocusOut } = this.props;

        onFocusOut(event, this.state.text);
    }

    render() {
        const { name="", value="", classes="", placeholder="" } = this.props;
        return <input type="text" name={name} className={`mc-input ${classes}`}
                      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                      onBlur={this.notifyChanges}
                      defaultValue={value}
                      placeholder={placeholder}
                      onChange={this.onChange}></input>
    }
}