import axios from "axios";
import AlertError from "../errors/AlertError";

const API_BASEPATH = "https://localhost:3001";

export async function login(email, password) {
    try {
        const response = await axios.post(`${API_BASEPATH}/login`, {
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new AlertError("Invalid email or password!");
        } else {
            throw new AlertError("Internal Server Error!");
        }
    }
}

export async function register(firstname, lastname, email, password) {
    try {
        const response = await axios.post(`${API_BASEPATH}/register`, {
            firstname,
            lastname,
            email,
            password
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new AlertError(error.response.data.message || "An error occurred during signup.");
        } else {
            throw new AlertError("Internal Server Error!");
        }
    }
}
