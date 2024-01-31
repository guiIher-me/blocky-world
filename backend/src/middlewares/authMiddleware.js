require('dotenv').config();

const verifyAuthorization = (req, res, next) => {
    const expectedAuthToken = process.env.AUTH_TOKEN;
  
    const providedAuthToken = req.headers.authorization;
    if (!providedAuthToken || providedAuthToken !== expectedAuthToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    next();
};
  
module.exports = verifyAuthorization;