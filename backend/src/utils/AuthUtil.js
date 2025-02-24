/* eslint-disable import/no-extraneous-dependencies */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const { Unauthorized } = require('../errors/Unauthorized');
const { UserRoleEnum } = require('../enums/UserRoleEnum');

class AuthUtil {
    static async getHash(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    static async compare(password, hash) {
        return bcrypt.compare(password, hash);
    }

    static verify(token) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }

    static sign(payload, expiresIn) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    }

    static getDecodedToken(req) {
        const { authorization } = req.headers || null;

        if (!authorization) {
            throw new Unauthorized('Authentication token not provided');
        }

        const token = authorization.replace('Bearer ', '');
        const decoded = AuthUtil.verify(token);
        return decoded;
    }

    static isTokenOwner(token, user) {
        const decoded = AuthUtil.verify(token);
        return decoded.id === user.id;
    }

    static isAdmin(user) {
        return user?.role === UserRoleEnum.ADMIN;
    }
}

module.exports = { AuthUtil };
