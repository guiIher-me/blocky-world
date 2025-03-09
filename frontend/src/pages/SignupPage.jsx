import React, { Component } from "react";
import SignupForm from "../components/users/signupForm/SignupForm";
import PropTypes from 'prop-types';

export default class SignupPage extends Component {
    static propTypes = {
        onSignupSuccess: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <SignupForm onSignupSuccess={this.props.onSignupSuccess} />
            </div>
        );
    }
}