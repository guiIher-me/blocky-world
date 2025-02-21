/* eslint-disable lines-between-class-members */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

const { User } = require('../models/User');
const { Conflict } = require('../errors/Conflict');
const { NotFound } = require('../errors/NotFound');
const { Unauthorized } = require('../errors/Unauthorized');
const { AuthUtil } = require('../utils/AuthUtil');

/**
 * @class AuthService
 * @description Service responsible for user authentication and authorization actions.
 */
class AuthService {
    static accessTokenExpiresIn = 15 * 60; // 15m
    static refreshTokenExpiresIn = 1 * 24 * 60 * 60; // 1d

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

        const hashedPassword = await AuthUtil.getHash(data.password);

        const user = new User({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: hashedPassword,
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
        const expiresIn = AuthService.accessTokenExpiresIn;

        const payload = { id: user._id, email: user.email };
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
        const expiresIn = AuthService.refreshTokenExpiresIn;

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
