
class HttpResponse {
    
    static response(statusCode, body) {
        return {
            statusCode,
            body
        };
    }

    static error(statusCode, error) {
        return HttpResponse.response(statusCode, { error });
    }

    static ok(body) {
        return HttpResponse.response(200, body)
    }

    static okNoContent() {
        return HttpResponse.response(204, {});
    }

    static created(body) {
        return HttpResponse.response(201, body);
    }

    static badRequest(error) {
        return HttpResponse.error(400, error);
    }

    static unauthorized(error = "Unauthorized") {
        return HttpResponse.error(401, error);
    }

    static notFound(error) {
        return HttpResponse.error(404, error);
    }

    static unprocessable(error) {
        return HttpResponse.error(422, error);
    }

    static serverError(error = "Internal Server Error!") {
        return HttpResponse.error(500, error);
    }

}

module.exports = { HttpResponse };