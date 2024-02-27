const { Validator } = require('./Validator');
const { HttpResponse } = require('../http/HttpResponse');

describe('Validator', () => {
    describe('validate', () => {
        it('should return true if validation passes', () => {
            const validator = new Validator();
            const schema = { validate: jest.fn(() => ({ error: null })) };
            const params = { name: 'Mr. Mock', age: 30 };

            const result = validator.validate(schema, params);

            expect(result).toBe(true);
            expect(schema.validate).toHaveBeenCalledWith(params);
        });

        it('should set error message and return false if validation fails', () => {
            const errorMessage = 'Validation error';
            const schema = {
                validate: jest.fn(() => ({
                    error: { details: [{ message: errorMessage }] },
                })),
            };

            const params = { name: 'Mr. Mock', age: 30 };

            const validator = new Validator();
            const result = validator.validate(schema, params);

            expect(result).toBe(false);
            expect(validator.err).toBe(errorMessage);
            expect(schema.validate).toHaveBeenCalledWith(params);
        });
    });

    describe('error', () => {
        it('should return an unprocessable entity response with the error message', () => {
            const validator = new Validator();
            validator.err = 'Validation error';

            const response = validator.error();

            expect(response).toEqual(HttpResponse.unprocessable('Validation error'));
        });
    });
});
