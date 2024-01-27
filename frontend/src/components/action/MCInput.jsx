import React, { PureComponent } from "react";
import PropTypes from 'prop-types';

export default class MCInput extends PureComponent {

    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        classes: PropTypes.string,
        placeholder: PropTypes.string,
        onFocusOut: PropTypes.func
    }

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
        const { name = "", value = "", classes = "", placeholder = "" } = this.props;
        return <input type="text" name={name} className={`mc-input ${classes}`}
                      autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                      onBlur={this.notifyChanges}
                      defaultValue={value}
                      placeholder={placeholder}
                      onChange={this.onChange}></input>
    }
}