import React, { Component } from "react";
import PropTypes from "prop-types";
import { login } from "../../../api/auth";
import AlertError from "../../../errors/AlertError";
import { Link } from "react-router-dom";

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
            isSubmitting: false,
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ error: null });

        const { email, password } = this.state;
        const { onLoginSuccess } = this.props;

        try {
            const data = await login(email, password);
            onLoginSuccess(data);
        } catch (err) {
            console.log(err);

            if(err instanceof AlertError)
                this.setState({ error: err.message });
            else
                this.setState({ error: 'Internal Server Error!' });
        }
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { email, password, error, isSubmitting } = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                {error && <p className="error">{error}</p>}
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing up..." : "Login"}
                </button>

                <p>Don&apos;t have an account? <Link to="/signup">Create one</Link></p>
            </form>
        );
    }
}
