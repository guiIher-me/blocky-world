const { notFoundMiddleware } = require('./notFoundMiddleware');

describe('notFoundMiddleware', () => {
    let req;
    let res;

    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
    });

    it('should set status code to 404 and send a JSON response with "Not Found!" error message', () => {
        notFoundMiddleware(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Not Found!' });
    });
});
