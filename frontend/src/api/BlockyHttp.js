
export class BlockyHttp {
    static BASE_PATH = 'http://localhost:3001'

    async request(method, url, { body, params = {}, headers = {} }) {
        const queryString = new URLSearchParams(params).toString();
        const fullUrl = `${this.BASE_PATH}${url}${queryString ? `?${queryString}` : ''}`;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body ? JSON.stringify(body) : null
        };

        try {
            const response = await fetch(fullUrl, options);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Fetch error:", error);
            throw error;
        }
    }

    get(url, options) {
        return BlockyHttp.request('GET', url, options);
    }

    post(url, options) {
        return BlockyHttp.request('POST', url, options);
    }

    patch(url, options) {
        return BlockyHttp.request('PATCH', url, options);
    }

    put(url, options) {
        return BlockyHttp.request('PUT', url, options);
    }

    delete(url, options) {
        return BlockyHttp.request('DELETE', url, options);
    }
}