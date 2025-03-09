import AuthUtil from "../utils/AuthUtil";
import BlockyHttp from "./BlockyHttp";

export default class BlockyHttpAuth extends BlockyHttp {
    async request(method, url, body, params = {}, headers = {}) {
        const valid = AuthUtil.validAccessToken();
        if(!valid) await this.refresh();

        return super.request(method, url, body, params, headers);
    }

    async refresh() {
        const http = new BlockyHttp();
        const response = await http.post('/refresh');

        const expiration = response.data.accessTokenExpiresAt;
        await AuthUtil.setAccessTokenExpiration(expiration);
    }
}