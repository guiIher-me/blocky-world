import React, { Component } from "react";
import LoginForm from "../components/users/loginForm/LoginForm";
import PropTypes from 'prop-types';

export default class LoginPage extends Component {
    static propTypes = {
        onLoginSuccess: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm onLoginSuccess={this.props.onLoginSuccess} />
            </div>
        );
    }
}