import React, { Component } from "react";
import PropTypes from "prop-types";

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
            errorMessage: "",
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        const { email, password, confirmPassword } = this.state;
        
        if (password !== confirmPassword) {
            this.setState({ errorMessage: "Passwords do not match!" });
            return;
        }

        // Chamada ao backend para cadastrar o usuário
        // Exemplo: 
        // api.signup({ email, password })
        //   .then(response => {
        //     this.props.onSignupSuccess(response.token);
        //   })
        //   .catch(error => {
        //     this.setState({ errorMessage: error.message });
        //   });

        // Simulando sucesso da inscrição:
        this.props.onSignupSuccess("fake-token");

        // Limpar os campos após a submissão
        this.setState({ email: "", password: "", confirmPassword: "", errorMessage: "" });
    };

    render() {
        const { email, password, confirmPassword, errorMessage } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
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
                <button type="submit">Sign Up</button>
            </form>
        );
    }
}