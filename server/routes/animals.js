// server/routes/animals.js
const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");
const authMiddleware = require("../middlewares/auth");

// CRUD routes 
router.get("/", animalsController.getAll);                    // Get all pets
router.get("/:id", animalsController.getById);                // Get one pet
router.post("/", (req, res, next) => { 
    if(!req.user || req.user.role !== "admin") {
        res.status(401).json({});
    }
    next();
}, animalsController.create);                   // Create pet
router.put("/:id", (req, res, next) => { 
    if(!req.user || req.user.role !== "admin") {
        res.status(401).json({});
    }
    next();
}, animalsController.update);                 // Update pet
router.delete("/:id", (req, res, next) => { 
    if(!req.user || req.user.role !== "admin") {
        res.status(401).json({});
    }
    next();
}, animalsController.delete);              // Delete pet

// Search route (special operation)
router.post("/search", animalsController.search);             // Search pets

// Get pets by shelter
router.get("/shelter/:shelter_id", animalsController.getByShelter); 

module.exports = router;