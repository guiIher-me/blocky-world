/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */

const { Unauthorized } = require('../errors/Unauthorized');
const { AuthUtil } = require('../utils/AuthUtil');
const { UserRoleEnum } = require('../enums/UserRoleEnum');

const adminMiddleware = (req, res, next) => {
    try {
        const decoded = AuthUtil.getDecodedToken(req);
        if (decoded.role !== UserRoleEnum.ADMIN) {
            throw new Unauthorized();
        }

        req.user = decoded;
        next();
    } catch (err) {
        throw new Unauthorized('Invalid or Expired Token');
    }
};

module.exports = { adminMiddleware };
