const express = require('express');

const router = express.Router();
const { AuthController } = require('./controllers/auth/AuthController');
const { WorldController } = require('./controllers/world/WorldController');
const { BaseController } = require('./controllers/BaseController');
const { authMiddleware } = require('./middlewares/authMiddleware');

// Health Check
router.get('/ping', async (_, res) => {
    res.status(200).json({ message: 'pong!' });
});

// Auth
router.post('/register', (req, res) => BaseController.handle(req, res, AuthController.register));
router.post('/login', (req, res) => BaseController.handle(req, res, AuthController.login));
router.post('/refresh', (req, res) => BaseController.handle(req, res, AuthController.refresh));

// Worlds
router.post('/worlds', authMiddleware, (req, res) => BaseController.handle(req, res, WorldController.create));
router.get('/worlds', authMiddleware, async (req, res) => BaseController.handle(req, res, WorldController.getAll));
router.get('/worlds/:id', authMiddleware, async (req, res) => BaseController.handle(req, res, WorldController.getById));
router.put('/worlds/:id', authMiddleware, async (req, res) => BaseController.handle(req, res, WorldController.update));
router.delete('/worlds/:id', authMiddleware, async (req, res) => BaseController.handle(req, res, WorldController.delete));

module.exports = router;
