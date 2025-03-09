import CookieNotFound from '../errors/CookieNotFound';
import DateUtil from './DateUtil';

class CookieUtil {
    static getCookie(name) {
        const cookie = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${name}=`));

        if (cookie) {
            const value = cookie.split('=')[1];
            return value;
        }

        throw new CookieNotFound(`Cookie ${name} not found!`);
    }

    static setCookie(name, value, expirationAt, secure = false) {
        let cookieString = `${name}=${encodeURIComponent(value)};path=/`;
        
        const expirationDate = DateUtil.getExpirationDate(expirationAt);
        cookieString += `;expires=${expirationDate.toUTCString()}`;

        if (secure) {
            cookieString += `;Secure`;
        }

        document.cookie = cookieString;
    }

    static deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
}

export default CookieUtil;