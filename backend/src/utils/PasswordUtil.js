const bcrypt = require('bcrypt');

class PasswordUtil {
    static async getHash(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
}

module.exports = { PasswordUtil };
