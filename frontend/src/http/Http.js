import axios from 'axios';
axios.defaults.withCredentials = true;

import Unauthorized from '../errors/Unauthorized';

export default class Http {
    static async request(method, url, { body, params = {}, headers = {} }) {
        try {
            const options = {
                method,
                url,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                params,
                data: body,
            };

            const response = await axios(options);
            return response;
        } catch(error) {
            if (error.response && error.response.status === 401) {
                throw new Unauthorized();
            }

            throw error;
        }
    }
}
