/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
const httpMocks = require('node-mocks-http');
const { verifyAuthMiddleware } = require('./verifyAuthMiddleware');

describe('verifyAuthMiddleware', () => {
    it('should call next() if the provided auth token matches the expected token', () => {
        const VALID_TOKEN = 'validAuthToken';
        process.env.AUTH_TOKEN = VALID_TOKEN;

        const req = httpMocks.createRequest({
            headers: {
                authorization: VALID_TOKEN,
            },
        });
        const res = httpMocks.createResponse();
        const next = jest.fn();

        verifyAuthMiddleware(req, res, next);

        expect(next).toBeCalled();
        expect(res.statusCode).toBe(200);
    });

    it('should return 401 Unauthorized if no auth token is provided', () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = jest.fn();

        delete process.env.AUTH_TOKEN;

        verifyAuthMiddleware(req, res, next);

        expect(next).not.toBeCalled();
        expect(res.statusCode).toBe(401);
        expect(res._getJSONData()).toEqual({ error: 'Unauthorized' });
    });

    it('should return 401 Unauthorized if the provided auth token does not match the expected token', () => {
        const req = httpMocks.createRequest({
            headers: {
                authorization: 'invalidAuthToken',
            },
        });
        const res = httpMocks.createResponse();
        const next = jest.fn();

        process.env.AUTH_TOKEN = 'validAuthToken';

        verifyAuthMiddleware(req, res, next);

        expect(next).not.toBeCalled();
        expect(res.statusCode).toBe(401);
        expect(res._getJSONData()).toEqual({ error: 'Unauthorized' });
    });
});
