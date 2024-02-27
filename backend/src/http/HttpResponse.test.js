const { HttpResponse } = require('./HttpResponse');

describe('HttpResponse', () => {
    describe('response', () => {
        it('should return a response object with provided status code and body', () => {
            const statusCode = 200;
            const body = { message: 'Success' };
            const response = HttpResponse.response(statusCode, body);
            expect(response.statusCode).toBe(statusCode);
            expect(response.body).toEqual(body);
        });
    });

    describe('error', () => {
        it('should return a response object with provided status code and error message', () => {
            const statusCode = 400;
            const error = 'Bad Request';
            const response = HttpResponse.error(statusCode, error);
            expect(response.statusCode).toBe(statusCode);
            expect(response.body.error).toBe(error);
        });
    });

    describe('ok', () => {
        it('should return a response object with status code 200 and provided body', () => {
            const body = { message: 'Success' };
            const response = HttpResponse.ok(body);
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(body);
        });
    });

    describe('okNoContent', () => {
        it('should return a response object with status code 204 and an empty body', () => {
            const response = HttpResponse.okNoContent();
            expect(response.statusCode).toBe(204);
            expect(response.body).toEqual({});
        });
    });

    describe('created', () => {
        it('should return a response object with status code 201 and provided body', () => {
            const body = { id: 123, name: 'Test' };
            const response = HttpResponse.created(body);
            expect(response.statusCode).toBe(201);
            expect(response.body).toEqual(body);
        });
    });

    describe('badRequest', () => {
        it('should return a response object with status code 400 and provided error message', () => {
            const error = 'Invalid input';
            const response = HttpResponse.badRequest(error);
            expect(response.statusCode).toBe(400);
            expect(response.body.error).toBe(error);
        });
    });

    describe('unauthorized', () => {
        it('should return a response object with status code 401 and default error message if none provided', () => {
            const response = HttpResponse.unauthorized();
            expect(response.statusCode).toBe(401);
            expect(response.body.error).toBe('Unauthorized');
        });

        it('should return a response object with status code 401 and provided error message', () => {
            const error = 'Authentication failed';
            const response = HttpResponse.unauthorized(error);
            expect(response.statusCode).toBe(401);
            expect(response.body.error).toBe(error);
        });
    });

    describe('notFound', () => {
        it('should return a response object with status code 404 and provided error message', () => {
            const error = 'Resource not found';
            const response = HttpResponse.notFound(error);
            expect(response.statusCode).toBe(404);
            expect(response.body.error).toBe(error);
        });
    });

    describe('unprocessable', () => {
        it('should return a response object with status code 422 and provided error message', () => {
            const error = 'Invalid data format';
            const response = HttpResponse.unprocessable(error);
            expect(response.statusCode).toBe(422);
            expect(response.body.error).toBe(error);
        });
    });

    describe('serverError', () => {
        it('should return a response object with status code 500 and default error message if none provided', () => {
            const response = HttpResponse.serverError();
            expect(response.statusCode).toBe(500);
            expect(response.body.error).toBe('Internal Server Error!');
        });

        it('should return a response object with status code 500 and provided error message', () => {
            const error = 'Database connection error';
            const response = HttpResponse.serverError(error);
            expect(response.statusCode).toBe(500);
            expect(response.body.error).toBe(error);
        });
    });
});
