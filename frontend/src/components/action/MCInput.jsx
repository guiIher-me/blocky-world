import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

export default class MCInput extends PureComponent {

    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        classes: PropTypes.string,
        placeholder: PropTypes.string,
        onFocusOut: PropTypes.func,
        onValueChange: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.value || ""
        }

        this.onChange = this.onChange.bind(this);
        this.notifyChanges = this.notifyChanges.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                text: this.props.value || "",
            });
        }
    }

    onChange(event) {
        const value = event.target.value;
        this.setState({
            text: value
       });

        const { onValueChange } = this.props;
        if (onValueChange) {
            onValueChange(event, value);
        }
    }

    notifyChanges(event) {
        const { onFocusOut } = this.props;
        if (onFocusOut) {
            onFocusOut(event, this.state.text);
        }
    }

    render() {
        const { name = "", classes = "", placeholder = "" } = this.props;
        const { text } = this.state;
        return <input type="text" name={name} className={`mc-input ${classes}`}
                      autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                      onBlur={this.notifyChanges}
                      value={text}
                      placeholder={placeholder}
                      onChange={this.onChange}></input>
    }
}
