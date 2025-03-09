
export default class DateUtil {
    static assert(expirationAt) {
        const numberExpirationAt = Number(expirationAt);
        if(!numberExpirationAt) {
            throw new Error('Invalid Expiration!');
        }

        return numberExpirationAt;
    }

    static isExpired(expirationAt) {
        const numberExpirationAt = DateUtil.assert(expirationAt);
        const now = new Date();
        const expirationDate = new Date(numberExpirationAt * 1000);
        return now > expirationDate;
    }

    static getExpirationDate(expirationAt) {
        const numberExpirationAt = DateUtil.assert(expirationAt);
        const expirationDate = new Date(numberExpirationAt * 1000);
        return expirationDate;
    }
}
