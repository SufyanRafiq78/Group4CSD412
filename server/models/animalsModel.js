const db = require("../db");

const Animals = {
  getAll: async () => {
    const result = await db.query("SELECT * FROM animals");
    return result.rows;
  },
  search: async ({ type, age, gender }) => {
    const result = await db.query(
      `SELECT * FROM animals
       WHERE ($1 IS NULL OR type = $1)
       AND ($2 IS NULL OR age = $2)
       AND ($3 IS NULL OR gender = $3)`,
      [type, age, gender]
    );
    return result.rows;
  },
  create: async ({ name, type, age, gender }) => {
    const result = await db.query(
      `INSERT INTO animals (name, type, age, gender)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, type, age, gender]
    );
    return result.rows[0];
  }
};

module.exports = Animals;
