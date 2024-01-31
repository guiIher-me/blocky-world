const { HttpResponse } = require("../http/HttpResponse");

class BaseController {

    async handle(req, res, method) {
        let response;

        try {
            response = await method(req.params, req.body);
        } catch(error) {
            console.error(error);
            response = HttpResponse.serverError();
        } finally {
            const { statusCode, body } = response;
            return res.status(statusCode).json(body);
        }
    }

}

module.exports = { BaseController };