class CookiesUtil {
    static setCookie(res, name, value, expirationAt, secure = false) {
        const options = {
            path: '/',
            expires: expirationAt ? new Date(Number(expirationAt * 1000)) : undefined,
            secure,
            httpOnly: true,
            sameSite: 'none',
        };

        res.cookie(name, value, options);
    }
}

module.exports = { CookiesUtil };
