const express = require('express');

const router = express.Router();
const { AuthController } = require('./controllers/auth/AuthController');
const { WorldController } = require('./controllers/world/WorldController');
const { UserController } = require('./controllers/user/UserController');
const { adminMiddleware } = require('./middlewares/adminMiddleware');
const { authMiddleware } = require('./middlewares/authMiddleware');
const { routeHandle } = require('./utils/routeHandle');

// Health Check
router.get('/ping', async (_, res) => {
    res.status(200).json({ message: 'pong!' });
});

// User
router.post('/register', routeHandle(AuthController.register));
router.get('/user', authMiddleware, routeHandle(UserController.get));

// Auth
router.post('/login', routeHandle(AuthController.login));
router.post('/refresh', routeHandle(AuthController.refresh));
router.post('/logout', authMiddleware, routeHandle(AuthController.logout));

// Admin
router.post('/admin/revoke', adminMiddleware, routeHandle(AuthController.revoke));
router.post('/admin/promote', adminMiddleware, routeHandle(AuthController.promote));

// Worlds
router.route('/worlds')
    .post(authMiddleware, routeHandle(WorldController.create))
    .get(authMiddleware, routeHandle(WorldController.getAll));

router.route('/worlds/:id')
    .get(authMiddleware, routeHandle(WorldController.getById))
    .put(authMiddleware, routeHandle(WorldController.update))
    .delete(authMiddleware, routeHandle(WorldController.delete));

router.patch('/worlds/:id/name', authMiddleware, routeHandle(WorldController.updateName));

module.exports = router;
