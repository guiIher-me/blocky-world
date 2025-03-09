const routeHandle = (method) => async (req, res, next) => {
    try {
        const { statusCode, body } = await method(req, res);
        return res.status(statusCode).json(body);
    } catch (error) {
        return next(error);
    }
};

module.exports = { routeHandle };
