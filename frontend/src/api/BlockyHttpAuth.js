import AuthUtil from "../utils/AuthUtil";
import { BlockyHttp } from "./BlockyHttp";

export default class BlockyHttpAuth extends  BlockyHttp {
    async request(method, url, body, params = {}, headers = {}) {
        if(!AuthUtil.validAccessToken())
            await BlockyHttpAuth.refresh();

        const authHeaders = {
            ...headers
        }
        return super.request(method, url, body, params, authHeaders);
    }

    async refresh() {
        const http = new BlockyHttp();
        const response = await http.post('/refresh', {

        });

        return response;
    }

}