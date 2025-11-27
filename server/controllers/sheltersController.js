require("dotenv").config();

const axios = require("axios");


const sheltersController = {
  getNearby: async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ error: "City required" });

    try {
      const response = await axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json", {
        params: {
          query: `animal shelter in ${city}`,
          key: process.env.GOOGLE_API_KEY
        }
      });

      const shelters = response.data.results.map(s => ({
        name: s.name,
        address: s.formatted_address
      }));

      res.json(shelters);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "External API error" });
    }
  }
};

module.exports = sheltersController;
