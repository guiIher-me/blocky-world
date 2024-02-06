import '../utils/typedef';

class HttpResponse {
    
    /**
     * Return a HTTP Response
     * @param {number} statusCode 
     * @param {Object} body 
     * @returns {HttpResponseData}
     * @static
     */
    static response(statusCode, body) {
        return {
            statusCode,
            body
        };
    }

    /**
     * Return a HTTP Response error
     * @param {number} statusCode 
     * @param {string} error
     * @returns {HttpResponseData}
     * @static
     */
    static error(statusCode, error) {
        return HttpResponse.response(statusCode, { error });
    }

    /**
     * HTTP Response 200 - Sucess
     * @param {number} statusCode 
     * @param {string} error
     * @returns {HttpResponseData}
     * @static
     */
    static ok(body) {
        return HttpResponse.response(200, body)
    }

    /**
     * HTTP Response 204 - No Content
     * @returns {HttpResponseData}
     * @static
     */
    static okNoContent() {
        return HttpResponse.response(204, {});
    }

    /**
     * HTTP Response 201 - Created
     * @param {Object} body 
     * @returns {HttpResponseData}
     * @static
     */
    static created(body) {
        return HttpResponse.response(201, body);
    }

    /**
     * HTTP Response 400 - Bad Request
     * @param {Object} body 
     * @returns {HttpResponseData}
     * @static
     */
    static badRequest(error) {
        return HttpResponse.error(400, error);
    }

    /**
     * HTTP Response 400 - Bad Request
     * @param {Object} body 
     * @returns {HttpResponseData}
     * @static
     */
    static unauthorized(error = "Unauthorized") {
        return HttpResponse.error(401, error);
    }

    /**
     * HTTP Response 404 - Not Found
     * @param {string} error 
     * @returns {HttpResponseData}
     * @static
     */
    static notFound(error) {
        return HttpResponse.error(404, error);
    }

    /**
     * HTTP Response 422 - Unprocessable Content
     * @param {string} error 
     * @returns {HttpResponseData}
     * @static
     */
    static unprocessable(error) {
        return HttpResponse.error(422, error);
    }

    /**
     * HTTP Response 500 - Internal Server Error
     * @param {string} [error = "Internal Server Error!"] 
     * @returns {HttpResponseData}
     * @static
     */
    static serverError(error = "Internal Server Error!") {
        return HttpResponse.error(500, error);
    }

}

module.exports = { HttpResponse };