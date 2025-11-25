const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");
const sheltersController = require("../controllers/sheltersController");

// CRUD routes
router.get("/", animalsController.getAll);
router.post("/search", animalsController.search);
router.post("/", animalsController.create);
router.get("/nearby", sheltersController.getNearby);

module.exports = router;
