import CookieUtil from './CookieUtil';
import DateUtil from './DateUtil';

export default class AuthUtil {
    static ACCESS_TOKEN_KEY = 'accessTokenExpiresAt';
    static REFRESH_TOKEN_KEY = 'refreshTokenExpiresAt';

    static _validToken(cookieName) {
        try {
            const tokenExpiration = CookieUtil.getCookie(cookieName);

            if (DateUtil.isExpired(tokenExpiration)) {
                throw new Error('Expired token!');
            }

            return true;
        } catch(error) {
            console.log(error);
            return false;
        }

    }

    static validAccessToken() {
        const cookie = AuthUtil.ACCESS_TOKEN_KEY;
        return AuthUtil._validToken(cookie);
    }

    static validRefreshToken() {
        const cookie = AuthUtil.REFRESH_TOKEN_KEY;
        return AuthUtil._validToken(cookie);
    }

    static setAccessTokenExpiration(expiration) {
        const cookie = AuthUtil.ACCESS_TOKEN_KEY;
        CookieUtil.setCookie(cookie, expiration, expiration);
    }

    static setRefreshTokenExpiration(expiration) {
        const cookie = AuthUtil.REFRESH_TOKEN_KEY;
        CookieUtil.setCookie(cookie, expiration, expiration);
    }
}
