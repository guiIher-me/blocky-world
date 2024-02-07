const { BaseController } = require('./BaseController');
const { HttpResponse } = require('../http/HttpResponse');

describe('BaseController', () => {
    describe('handle', () => {
        let req; let res; let
            method;

        beforeEach(() => {
            req = {
                params: { id: 1 },
                body: { name: 'Test' },
            };
            res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            method = jest.fn();
        });

        it('should call the provided method with request params and body', async () => {
            method.mockResolvedValue({ statusCode: 200, body: { message: 'Success' } });
            await BaseController.handle(req, res, method);
            expect(method).toHaveBeenCalledWith(req.params, req.body);
        });

        it('should respond with the returned status code and body on success', async () => {
            const responseBody = { message: 'Success' };
            const statusCode = 200;
            method.mockResolvedValue({ statusCode, body: responseBody });

            await BaseController.handle(req, res, method);

            expect(res.status).toHaveBeenCalledWith(statusCode);
            expect(res.json).toHaveBeenCalledWith(responseBody);
        });

        it('should respond with a server error if the method throws an error', async () => {
            const error = new Error('Something went wrong');
            method.mockRejectedValue(error);
            const serverError = HttpResponse.serverError();

            await BaseController.handle(req, res, method);

            expect(res.status).toHaveBeenCalledWith(serverError.statusCode);
            expect(res.json).toHaveBeenCalledWith(serverError.body);
        });
    });
});
