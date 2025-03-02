import React, { Component } from "react";
import PropTypes from "prop-types";
import { login } from "../../../api/auth";

export default class LoginForm extends Component {

    static propTypes = {
        onLoginSuccess: PropTypes.func.isRequired,
    } 

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: null,
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ error: null });

        const { email, password } = this.state;
        const { onLoginSuccess } = this.props;

        try {
            const data = await login(email, password);
            onLoginSuccess(data.token);
        } catch (err) {
            this.setState({ error: "Credenciais inválidas" });
        }
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password, error } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleInputChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        );
    }
}