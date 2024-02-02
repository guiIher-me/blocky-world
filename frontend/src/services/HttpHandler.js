import axios from 'axios';

const INSECURE_TOKEN_TEST = "94XKjLPSKkekf/ojyGL8w62PG8FrmILlXX9HZGLYGN8=";
const API_BASE_URL = "http://localhost:3001"

export default class HttpHandler {

    async request(method, endpoint, data, options = {}) {
        try {
            const response = await axios({
                headers: {
                    'Authorization': INSECURE_TOKEN_TEST,
                },
                method,
                url: `${API_BASE_URL}/${endpoint}`,
                data,
                ...options,
            });
        
            return response.data;
        } catch (error) {
            console.error(`API request failed (${method}):`, error);
            throw error;
        }
    }

    async get(endpoint, options = {}) {
        return this.request('GET', endpoint, null, options);
    }
      
    async post(endpoint, data, options = {}) {
        return this.request('POST', endpoint, data, options);
    }
      
    async delete(endpoint, options = {}) {
        return this.request('DELETE', endpoint, null, options);
    }
      
    async patch(endpoint, data, options = {}) {
        return this.request('PATCH', endpoint, data, options);
    }

    async put(endpoint, data, options = {}) {
        return this.request('PUT', endpoint, data, options);
    }
}