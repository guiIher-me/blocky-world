
export default class DateUtil {
    static assert(expirationAt) {
        const numberExpirationAt = Number(expirationAt);
        if(!numberExpirationAt) {
            throw new Error('Invalid Expiration!');
        }

        return numberExpirationAt;
    }

    static getExpirationDate(expirationAt) {
        const numberExpirationAt = DateUtil.assert(expirationAt);
        const expirationDate = new Date(numberExpirationAt * 1000);
        
        return expirationDate;
    }

    static isExpired(expirationAt) {
        const expirationDate = DateUtil.getExpirationDate(expirationAt);
        const now = new Date();
        return now > expirationDate;
    }
}
