import React, { Component } from "react";
import PropTypes from "prop-types";
import AlertError from "../../../errors/AlertError";
import { Link } from "react-router-dom";
import BlockyHttp from "../../../http/BlockyHttp";

export default class SignupForm extends Component {
    static propTypes = {
        onSignupSuccess: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: "",
            errorMessage: "",
            successMessage: "",
            isSubmitting: false,
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password, confirmPassword, firstname, lastname } = this.state;

        // Verificando se as senhas são iguais
        if (password !== confirmPassword) {
            this.setState({ errorMessage: "Passwords do not match!" });
            return;
        }

        this.setState({ isSubmitting: true, errorMessage: "", successMessage: "" });

        try {
            const Http = new BlockyHttp();
            const response = await Http.post('/register', { firstname, lastname, email, password });

            this.props.onSignupSuccess(response);
            this.setState({
                successMessage: "Account created successfully!",
                email: "",
                password: "",
                confirmPassword: "",
                firstname: "",
                lastname: "",
            });
        } catch (error) {
            if (error instanceof AlertError) {
                this.setState({ errorMessage: error.message });
            } else {
                this.setState({ errorMessage: "An unknown error occurred." });
            }
        } finally {
            this.setState({ isSubmitting: false });
        }
    };

    render() {
        const { email, password, confirmPassword, firstname, lastname, errorMessage, successMessage, isSubmitting } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing up..." : "Sign Up"}
                </button>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </form>
        );
    }
}
