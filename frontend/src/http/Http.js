import axios from 'axios';

export default class Http {
    static async request(method, url, { body, params = {}, headers = {} }) {
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
        return response.data;
    }
}
