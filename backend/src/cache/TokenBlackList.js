const { RedisClient } = require('./RedisClient');

const redis = new RedisClient();
redis.connect();

class TokenBlacklist {
    static prefix = 'blacklist';

    static getFullKey(key) {
        return `${TokenBlacklist.prefix}:${key}`;
    }

    static async add(token, expiresIn) {
        if (!token) throw new Error('Invalid Token!');
        const fullkey = TokenBlacklist.getFullKey(token);
        console.log('adding cache', fullkey);
        await redis.set(fullkey, 'blacklisted', expiresIn);
    }

    static async exists(token) {
        const fullkey = TokenBlacklist.getFullKey(token);
        const result = await redis.get(fullkey);
        return result !== null;
    }
}

module.exports = { TokenBlacklist };
