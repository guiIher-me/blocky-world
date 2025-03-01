/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */

const { Unauthorized } = require('../errors/Unauthorized');
const { AuthUtil } = require('../utils/AuthUtil');
const { UserRoleEnum } = require('../enums/UserRoleEnum');
const { TokenBlacklist } = require('../cache/TokenBlackList');

const adminMiddleware = async (req, res, next) => {
    try {
        const token = AuthUtil.getToken(req);
        const decoded = AuthUtil.verify(token);

        if (decoded.role !== UserRoleEnum.ADMIN) {
            throw new Unauthorized();
        }

        const blacklist = await TokenBlacklist.exists(token);
        if (blacklist) throw new Unauthorized();

        req.user = { token, ...decoded };
        next();
    } catch (err) {
        next(new Unauthorized('Invalid or Expired Token'));
    }
};

module.exports = { adminMiddleware };
