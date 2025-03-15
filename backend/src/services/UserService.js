const { User } = require('../models/User');
const { UserRoleEnum } = require('../enums/UserRoleEnum');
const { NotFound } = require('../errors/NotFound');
const { Conflict } = require('../errors/Conflict');
const { PasswordUtil } = require('../utils/PasswordUtil');
require('dotenv').config();

/**
 * @class UserService
 * @description Service responsible for user informations and actions
 */
class UserService {
    static assert(user) {
        if (!user) throw new NotFound('User not found!');
        return user;
    }

    /**
     * Register a new user
     * @param {Object} data - User registration data.
     * @returns {Object} - Created user data.
     * @throws {Conflict} - If the email is already in use.
     * @static
     */
    static async register(data) {
        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            throw new Conflict('Email already in use');
        }

        const hashedPassword = await PasswordUtil.getHash(data.password);

        const user = new User({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: hashedPassword,
            role: UserRoleEnum.USER,
        });

        await user.save();

        // get user data (except password)
        const { password, ...userData } = user.toObject();
        return userData;
    }

    /**
     * Get a user by ID
     * @returns {string} - The User ID
     * @throws {NotFound} - If user ID not exists
     * @static
     */
    static async getById(userId) {
        const user = await User.findById(userId);
        UserService.assert(user);
        return user;
    }
}

module.exports = { UserService };
