/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */

const { Unauthorized } = require('../errors/Unauthorized');
const { AuthUtil } = require('../utils/AuthUtil');

const authMiddleware = (req, res, next) => {
    try {
        const decoded = AuthUtil.getDecodedToken(req);
        req.user = decoded;
        next();
    } catch (err) {
        throw new Unauthorized('Invalid or Expired Token');
    }
};

module.exports = { authMiddleware };
