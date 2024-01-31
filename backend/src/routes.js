const express = require("express");
const router = express.Router();
const { WorldController } = require("./controllers/world/WorldController");
const { BaseController } = require("./controllers/BaseController");

const handler = new BaseController();
const worldController = new WorldController();

// Worlds
router.post("/worlds", (req, res, next) => handler.handle(req, res, worldController.create));
router.get("/worlds", async (req, res, next) => handler.handle(req, res, worldController.getAll));
router.get("/worlds/:id", async (req, res, next) => handler.handle(req, res, worldController.getById));
router.put("/worlds/:id", async (req, res, next) => handler.handle(req, res, worldController.update));
router.delete("/worlds/:id", async (req, res, next) => handler.handle(req, res, worldController.delete));

// Test
router.get("/", async (req, res) => {
  res.status(200).json({ message: "It's Working!" });
});

module.exports = router;
