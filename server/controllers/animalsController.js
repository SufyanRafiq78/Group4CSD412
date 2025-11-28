// server/controllers/animalsController.js
const Animals = require("../models/animalsModel");

const animalsController = {
  // Get all pets
  getAll: async (req, res) => {
    try {
      const animals = await Animals.getAll();
      res.json(animals);
    } catch (err) {
      console.error("Error getting all animals:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get single pet by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const animal = await Animals.getById(id);
      
      if (!animal) {
        return res.status(404).json({ error: "Pet not found" });
      }
      
      res.json(animal);
    } catch (err) {
      console.error("Error getting animal info by ID:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Search pets with filters
  search: async (req, res) => {
    try {
      const filters = req.body;
      const animals = await Animals.search(filters);
      res.json(animals);
    } catch (err) {
      console.error("Error searching animals:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Create new pet
  create: async (req, res) => {
    try {
      // Validate required fields
      const { name, species, type, age, gender } = req.body;
      
      if (!name || (!species && !type) || !age || !gender) {
        return res.status(400).json({ 
          error: "Missing required fields: name, species/type, age, gender" 
        });
      }

      const newAnimal = await Animals.create(req.body);
      res.status(201).json(newAnimal);
    } catch (err) {
      console.error("Error creating animal info:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Update existing pet
  update: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Check if pet exists
      const existing = await Animals.getById(id);
      if (!existing) {
        return res.status(404).json({ error: "Pet not found" });
      }

      const updatedAnimal = await Animals.update(id, req.body);
      res.json(updatedAnimal);
    } catch (err) {
      console.error("Error updating animal:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Delete pet
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      const deletedAnimal = await Animals.delete(id);
      
      if (!deletedAnimal) {
        return res.status(404).json({ error: "Pet not found" });
      }
      
      res.json({ message: "Pet info deleted successfully", pet: deletedAnimal });
    } catch (err) {
      console.error("Error deleting animal:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get pets by shelter
  getByShelter: async (req, res) => {
    try {
      const { shelter_id } = req.params;
      const animals = await Animals.getByShelter(shelter_id);
      res.json(animals);
    } catch (err) {
      console.error("Error getting animals by shelter:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = animalsController;