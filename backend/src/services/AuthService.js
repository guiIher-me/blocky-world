/* eslint-disable lines-between-class-members */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

const { User } = require('../models/User');
const { Conflict } = require('../errors/Conflict');
const { NotFound } = require('../errors/NotFound');
const { Unauthorized } = require('../errors/Unauthorized');
const { UserRoleEnum } = require('../enums/UserRoleEnum');
const { AuthUtil } = require('../utils/AuthUtil');
const { UnprocessableContent } = require('../errors/UnprocessableContent');
const { TokenBlacklist } = require('../cache/TokenBlackList');
require('dotenv').config();

/**
 * @class AuthService
 * @description Service responsible for user authentication and authorization actions.
 */
class AuthService {
    /**
     * Asserts that the provided user exists.
     * Throws a `NotFound` error if the user is not found.
     *
     * @param {Object|null} user - The user object to be checked.
     * @throws {NotFound} If the user is not found.
     * @returns {Object} The validated user object.
     */
    static assert(user) {
        if (!user) throw new NotFound('User not found!');
        return user;
    }

    /**
     * Checks if the provided token belongs to the user or if the user has admin privileges.
     * Throws an `Unauthorized` error if the user is neither the token owner nor an admin.
     * If an error occurs during validation, throws an `UnprocessableContent` error.
     *
     * @param {string} token - The authentication token to be validated.
     * @param {Object} user - The user object to be validated.
     * @throws {Unauthorized} If the user is not the token owner and not an admin.
     * @throws {UnprocessableContent} If the token validation fails.
     * @returns {Object} The validated user object.
     */
    static assertOwnerOrAdmin(token, user) {
        try {
            if (!AuthUtil.isTokenOwner(token, user) && !AuthUtil.isAdmin(user)) throw new Unauthorized();
            return user;
        } catch (error) {
            throw new UnprocessableContent('Invalid token!');
        }
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

        const hashedPassword = await AuthUtil.getHash(data.password);

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
     * Login a user
     * @param {Object} data - Login data (email and password).
     * @returns {Object} - JWT tokens (access and refresh tokens).
     * @static
     */
    static async login(data) {
        const user = await User.findOne({ email: data.email }).select('+password');
        AuthService.assert(user);

        const passwordMatch = await AuthUtil.compare(data.password, user.password);
        if (!passwordMatch) throw new Unauthorized('Invalid credentials');

        return AuthService.generateTokens(user);
    }

    /**
     * Logs out the user by revoking their authentication token.
     *
     * @param {Object} user - The user object containing authentication details.
     * @param {string} user.id - The ID of the user to be logged out.
     * @param {string} user.token - The authentication token of the user.
     * @throws {NotFound} If the user is not found.
     * @returns {Promise<void>} Resolves when the logout process is complete.
     */
    static async logout(user) {
        const userFound = await User.findById(user.id);
        AuthService.assert(userFound);
        await AuthService.revoke(user.token, user);
    }

    /**
     * Refresh an existing user session with a new access token
     * @param {Object} data - Refresh token data (refreshToken).
     * @returns {Object} - New JWT access token and expiration.
     * @static
     */
    static async refresh(data) {
        const decoded = AuthService.verifyRefreshToken(data.refreshToken);
        const user = await User.findById(decoded.id);
        AuthService.assert(user);

        return AuthService.generateAccessToken(user);
    }

    /**
     * Revokes a user's authentication token by adding it to a blacklist.
     *
     * @param {string} token - The authentication token to be revoked.
     * @param {Object} user - The user object performing the revocation.
     * @throws {Unauthorized} If the user is not the token owner and not an admin.
     * @throws {UnprocessableContent} If an error occurs during the revocation process.
     * @returns {Promise<void>} Resolves when the token has been successfully revoked.
     */
    static async revoke(token, user) {
        try {
            AuthService.assertOwnerOrAdmin(token, user);
            const expiresIn = AuthUtil.getTokenExpiration(token);
            await TokenBlacklist.add(token, expiresIn);
        } catch (error) {
            throw new UnprocessableContent(error.message);
        }
    }

    /**
     * Promotes a user to an admin role.
     *
     * @param {string} userId - The ID of the user to be promoted.
     * @throws {NotFound} If the user is not found.
     * @throws {UnprocessableContent} If the user is already an admin.
     * @returns {Promise<void>} Resolves when the user's role has been successfully updated.
     */
    static async promote(userId) {
        const userFound = await User.findById(userId);
        AuthService.assert(userFound);

        if (userFound.role === UserRoleEnum.ADMIN) throw new UnprocessableContent('User is already admin!');

        await User.findOneAndUpdate({ _id: userId }, { role: UserRoleEnum.ADMIN }, { new: true });
    }

    /**
     * Generate access token and refresh token
     * @param {Object} user - User object to be included in the token payload.
     * @returns {Object} - JWT tokens (access and refresh tokens).
     * @static
     */
    static generateTokens(user) {
        const { accessToken, accessTokenExpiresAt } = AuthService.generateAccessToken(user);
        const { refreshToken, refreshTokenExpiresAt } = AuthService.generateRefreshToken(user);

        return {
            accessToken, accessTokenExpiresAt, refreshToken, refreshTokenExpiresAt,
        };
    }

    /**
     * Generate an access token
     * @param {Object} user - User object to be included in the token payload.
     * @returns {Object} - JWT access token and expiration.
     * @static
     */
    static generateAccessToken(user) {
        const expiresIn = process.env.ACCESS_TOKEN_EXPIRATION;

        const payload = { id: user._id, email: user.email, role: user.role };
        const accessToken = AuthUtil.sign(payload, expiresIn);
        const accessTokenExpiresAt = Math.floor(Date.now() / 1000) + expiresIn;
        return { accessToken, accessTokenExpiresAt };
    }

    /**
     * Generate a refresh token
     * @param {Object} user - User object to be included in the token payload.
     * @returns {Object} - JWT refresh token and expiration.
     * @static
     */
    static generateRefreshToken(user) {
        const expiresIn = process.env.REFRESH_TOKEN_EXPIRATION;

        const payload = { id: user._id };
        const refreshToken = AuthUtil.sign(payload, expiresIn);
        const refreshTokenExpiresAt = Math.floor(Date.now() / 1000) + expiresIn;
        return { refreshToken, refreshTokenExpiresAt };
    }

    /**
     * Verify the refresh token
     * @param {string} refreshToken - The refresh token to be verified.
     * @returns {Object} - Decoded token payload.
     * @static
     */
    static verifyRefreshToken(refreshToken) {
        try {
            return AuthUtil.verify(refreshToken);
        } catch (err) {
            throw new Unauthorized('Invalid or expired refresh token');
        }
    }
}

module.exports = { AuthService };
