// server/models/animalsModel.js
const db = require("../db");

const Animals = {
  // Get all pets (he had this)
  getAll: async () => {
    const result = await db.query("SELECT * FROM pets ORDER BY id");
    return result.rows;
  },

  // Get pet by ID (NEW - you need this)
  getById: async (id) => {
    const result = await db.query("SELECT * FROM pets WHERE id = $1", [id]);
    return result.rows[0];
  },

  // Search with filters (UPDATED - more comprehensive than his)
  search: async ({ species, type, age, gender, breed, shelter_id, status }) => {
    // Support both 'species' and 'type' (for compatibility)
    const speciesFilter = species || type;
    
    const result = await db.query(
      `SELECT * FROM pets
       WHERE ($1 IS NULL OR species = $1)
       AND ($2 IS NULL OR age = $2)
       AND ($3 IS NULL OR gender = $3)
       AND ($4 IS NULL OR breed = $4)
       AND ($5 IS NULL OR shelter_id = $5)
       AND ($6 IS NULL OR status = $6)
       ORDER BY id`,
      [speciesFilter, age, gender, breed, shelter_id, status]
    );
    return result.rows;
  },

  // Create new pet (UPDATED - more fields than his)
  create: async (petData) => {
    const { 
      shelter_id, 
      name, 
      species, 
      type,  // Support both species and type
      breed, 
      age, 
      gender, 
      size, 
      description, 
      photos, 
      status 
    } = petData;
    
    // Use species if provided, otherwise use type
    const speciesValue = species || type;
    
    const result = await db.query(
      `INSERT INTO pets (shelter_id, name, species, breed, age, gender, size, description, photos, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        shelter_id || 1,  // Default to shelter 1 if not provided
        name, 
        speciesValue, 
        breed || 'Unknown', 
        age, 
        gender, 
        size, 
        description || 'No description provided', 
        photos || [], 
        status || 'available'
      ]
    );
    return result.rows[0];
  },

  // Update pet (NEW - you need this for CRUD)
  update: async (id, petData) => {
    const { 
      name, 
      species, 
      type,
      breed, 
      age, 
      gender, 
      size, 
      description, 
      photos, 
      status 
    } = petData;
    
    const speciesValue = species || type;
    
    const result = await db.query(
      `UPDATE pets 
       SET name = COALESCE($1, name),
           species = COALESCE($2, species),
           breed = COALESCE($3, breed),
           age = COALESCE($4, age),
           gender = COALESCE($5, gender),
           size = COALESCE($6, size),
           description = COALESCE($7, description),
           photos = COALESCE($8, photos),
           status = COALESCE($9, status),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $10 RETURNING *`,
      [name, speciesValue, breed, age, gender, size, description, photos, status, id]
    );
    return result.rows[0];
  },

  // Delete pet (NEW - you need this for CRUD)
  delete: async (id) => {
    const result = await db.query(
      "DELETE FROM pets WHERE id = $1 RETURNING *", 
      [id]
    );
    return result.rows[0];
  },

  // Get pets by shelter (NEW - useful feature)
  getByShelter: async (shelter_id) => {
    const result = await db.query(
      "SELECT * FROM pets WHERE shelter_id = $1 ORDER BY id", 
      [shelter_id]
    );
    return result.rows;
  }
};

module.exports = Animals;