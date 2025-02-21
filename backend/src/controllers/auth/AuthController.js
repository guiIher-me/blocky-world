const { HttpResponse } = require('../../http/HttpResponse');
const { AuthService } = require('../../services/AuthService');
const { validate } = require('../../validation/validate');
const { registerSchema, loginSchema, refreshSchema } = require('./schemas');

class AuthController {
    /**
     * Register a new user
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async register(_, body) {
        validate(registerSchema, body);
        const user = await AuthService.register(body);
        return HttpResponse.created(user);
    }

    /**
     * Login a registered user
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async login(_, body) {
        validate(loginSchema, body);
        const tokens = await AuthService.login(body);
        return HttpResponse.ok({ ...tokens });
    }

    /**
     * refresh a logged in user
     * @param {Object} params
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async refresh(_, body) {
        validate(refreshSchema, body);
        const { accessToken, accessTokenExpiresAt } = await AuthService.refresh(body);
        return HttpResponse.ok({ accessToken, accessTokenExpiresAt });
    }
}

module.exports = { AuthController };
