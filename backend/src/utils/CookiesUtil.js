class CookiesUtil {
    static setSecureCookie(res, name, value, expirationAt) {
        const options = {
            path: '/',
            expires: expirationAt ? new Date(Number(expirationAt * 1000)) : undefined,
            secure: true,
            httpOnly: true,
            sameSite: 'none',
        };

        res.cookie(name, value, options);
    }
}

module.exports = { CookiesUtil };
