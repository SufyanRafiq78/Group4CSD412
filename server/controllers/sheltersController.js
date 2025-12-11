// server/controllers/sheltersController.js
require("dotenv").config();

const axios = require("axios");
//const Shelters = require("../models/sheltersModel");

const sheltersController = {
  // Get all shelters from database
  getAll: async (req, res) => {
    try {
      const shelters = await Shelters.getAll();
      res.json(shelters);
    } catch (err) {
      console.error("Error getting all shelters:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get single shelter by ID
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const shelter = await Shelters.getById(id);
      
      if (!shelter) {
        return res.status(404).json({ error: "Shelter not found" });
      }
      
      res.json(shelter);
    } catch (err) {
      console.error("Error getting shelter by ID:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get nearby shelters using Google Places API 
  getNearby: async (req, res) => {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: "City required" });
    }

    try {
      const response = await axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
        params: {
          query: `animal shelter in ${city}`,
          key: process.env.GOOGLE_API_KEY
        }
      });

      const shelters = response.data.results.map(s => ({
        name: s.name,
        address: s.formatted_address,
        location: s.geometry?.location,
        rating: s.rating,
        place_id: s.place_id
      }));

      res.json(shelters);
    } catch (err) {
      console.error("Error fetching nearby shelters:", err);
      res.status(500).json({ error: "External API error" });
    }
  },

  // Create new shelter in database
  create: async (req, res) => {
    try {
      const { name, location } = req.body;
      
      // Validate required fields
      if (!name || !location) {
        return res.status(400).json({ 
          error: "Missing required fields: name, location" 
        });
      }

      const newShelter = await Shelters.create(req.body);
      res.status(201).json(newShelter);
    } catch (err) {
      console.error("Error creating shelter:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Update existing shelter
  update: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Check if shelter exists
      const existing = await Shelters.getById(id);
      if (!existing) {
        return res.status(404).json({ error: "Shelter not found" });
      }

      const updatedShelter = await Shelters.update(id, req.body);
      res.json(updatedShelter);
    } catch (err) {
      console.error("Error updating shelter:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Delete shelter
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      
      const deletedShelter = await Shelters.delete(id);
      
      if (!deletedShelter) {
        return res.status(404).json({ error: "Shelter not found" });
      }
      
      res.json({ message: "Shelter deleted successfully", shelter: deletedShelter });
    } catch (err) {
      console.error("Error deleting shelter:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  // Get all pets from a specific shelter
  getPets: async (req, res) => {
    try {
      const { id } = req.params;
      
      // Check if shelter exists
      const shelter = await Shelters.getById(id);
      if (!shelter) {
        return res.status(404).json({ error: "Shelter not found" });
      }

      // Use the Animals model to get pets by shelter
      const Animals = require("../models/animalsModel");
      const pets = await Animals.getByShelter(id);
      
      res.json({
        shelter: shelter,
        pets: pets,
        pet_count: pets.length
      });
    } catch (err) {
      console.error("Error getting shelter pets:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = sheltersController;
