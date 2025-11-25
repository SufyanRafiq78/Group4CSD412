const Animals = require("../models/animalsModel");

const animalsController = {
  getAll: async (req, res) => {
    try {
      const animals = await Animals.getAll();
      res.json(animals);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  search: async (req, res) => {
    try {
      const filters = req.body;
      const animals = await Animals.search(filters);
      res.json(animals);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  create: async (req, res) => {
    try {
      const newAnimal = await Animals.create(req.body);
      res.status(201).json(newAnimal);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = animalsController;
