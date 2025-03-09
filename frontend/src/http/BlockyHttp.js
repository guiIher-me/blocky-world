/* eslint-disable no-undef */
import Http from './Http';

export default class BlockyHttp {
    static BASE_PATH = process.env.PUBLIC_API_URL;

    request(method, url, { body, params = {}, headers = {} }) {
        const fullUrl = `${ BlockyHttp.BASE_PATH }${url}`;
        return Http.request(method, fullUrl, { body, params, headers });
    }

    get(url, params, body = {}) {
        const options = { params, body };
        return this.request('GET', url, options);
    }

    post(url, body = {}) {
        const options = { body };
        return this.request('POST', url, options);
    }

    patch(url, body = {}) {
        const options = { body };
        return this.request('PATCH', url, options);
    }

    put(url, body = {}) {
        const options = { body };
        return this.request('PUT', url, options);
    }

    delete(url, body = {}) {
        const options = { body };
        return this.request('DELETE', url, options);
    }
}