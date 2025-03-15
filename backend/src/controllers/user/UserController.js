const { UserService } = require('../../services/UserService');
const { HttpResponse } = require('../../http/HttpResponse');

class UserController {
    /**
     * Get user
     * @param {Object} user
     * @returns {HttpResponseData}
     * @static
     */
    static async get({ user }) {
        const {
            firstname, lastname, email, role,
        } = await UserService.getById(user.id);

        return HttpResponse.ok({
            firstname, lastname, email, role,
        });
    }
}

module.exports = { UserController };
