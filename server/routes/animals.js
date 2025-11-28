// server/routes/animals.js
const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");

// CRUD routes 
router.get("/", animalsController.getAll);                    // Get all pets
router.get("/:id", animalsController.getById);                // Get one pet
router.post("/", animalsController.create);                   // Create pet
router.put("/:id", animalsController.update);                 // Update pet
router.delete("/:id", animalsController.delete);              // Delete pet

// Search route (special operation)
router.post("/search", animalsController.search);             // Search pets

// Get pets by shelter
router.get("/shelter/:shelter_id", animalsController.getByShelter); 

module.exports = router;