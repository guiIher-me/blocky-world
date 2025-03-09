const { HttpResponse } = require('../../http/HttpResponse');
const { AuthService } = require('../../services/AuthService');
const { CookiesUtil } = require('../../utils/CookiesUtil');
const { validate } = require('../../validation/validate');

const {
    idSchema, registerSchema, loginSchema, tokenSchema,
} = require('./schemas');

class AuthController {
    /**
     * Register a new user
     * @param {Object} body
     * @returns {HttpResponseData}
     * @static
     */
    static async register({ body }) {
        validate(registerSchema, body);
        const user = await AuthService.register(body);
        return HttpResponse.created(user);
    }

    /**
     * Login a registered user
     * @param {Object} body
     * @param {Object} res
     * @returns {HttpResponseData}
     * @static
     */
    static async login({ body }, res) {
        validate(loginSchema, body);

        const {
            accessToken, accessTokenExpiresAt, refreshToken, refreshTokenExpiresAt,
        } = await AuthService.login(body);

        CookiesUtil.setSecureCookie(res, 'accessToken', accessToken, accessTokenExpiresAt);
        CookiesUtil.setSecureCookie(res, 'refreshToken', refreshToken, refreshTokenExpiresAt);

        return HttpResponse.ok({ accessTokenExpiresAt, refreshTokenExpiresAt });
    }

    /**
     * refresh a logged in user
     * @param {Object} req
     * @param {Object} res
     * @returns {HttpResponseData}
     * @static
     */
    static async refresh(req, res) {
        const { accessToken, accessTokenExpiresAt } = await AuthService.refresh(req);
        CookiesUtil.setSecureCookie(res, 'accessToken', accessToken, accessTokenExpiresAt);

        return HttpResponse.ok({ accessTokenExpiresAt });
    }

    /**
     * Logs out the current user by invalidating their authentication session.
     *
     * @param {Object} body
     * @param {Object} user
     * @returns {Promise<Object>} An HTTP response with no content.
     */
    static async logout({ user }) {
        await AuthService.logout(user);
        return HttpResponse.okNoContent();
    }

    /**
     * Revokes a user's authentication token.
     *
     * @param {Object} params
     * @param {Object} body
     * @param {Object} user
     * @returns {Promise<Object>} An HTTP response with no content.
     */
    static async revoke({ body, user }) {
        validate(tokenSchema, body);
        await AuthService.revoke(body.token, user);
        return HttpResponse.okNoContent();
    }

    /**
     * Promotes a user to a higher privilege level.
     *
     * @param {Object} body
     * @param {string} body.id - The ID of the user to be promoted.
     * @returns {Promise<Object>} An HTTP response with no content.
     */
    static async promote({ body }) {
        validate(idSchema, body);
        await AuthService.promote(body.id);
        return HttpResponse.okNoContent();
    }
}

module.exports = { AuthController };
