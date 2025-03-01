/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */

const { TokenBlacklist } = require('../cache/TokenBlackList');
const { Unauthorized } = require('../errors/Unauthorized');
const { AuthUtil } = require('../utils/AuthUtil');

const authMiddleware = async (req, res, next) => {
    try {
        const token = AuthUtil.getToken(req);
        const decoded = AuthUtil.verify(token);

        const blacklist = await TokenBlacklist.exists(token);
        if (blacklist) throw new Unauthorized();

        req.user = { token, ...decoded };
        next();
    } catch (err) {
        next(new Unauthorized('Invalid or Expired Token'));
    }
};

module.exports = { authMiddleware };
