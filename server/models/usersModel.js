const db = require("../db");

const Users = {
    getById: async (id) => {
        const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        return result.rows[0];
    },

    getByUsername: async (username) => {
        const result = await db.query("SELECT * FROM users WHERE username = $1", [username]);
        return result.rows[0];
    },

    getByEmail: async (email) => {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        return result.rows[0];
    },

    create: async (userData) => {
        const {
            username, email, password_hash
        } = userData;
    },

    update: async (id, userData) => {
        const {
            username, email, password_hash, role, shelter_id, is_active
        } = userData;

        const result = await db.query(
            `UPDATE users
            SET username = COALESCE($1, username),
                email = COALESCE($2, email),
                password_hash = COALESCE($3, password_hash),
                role = COALESCE($4, role),
                shelter_id = COALESCE($5, sheleter_id),
                is_active = COALESCE($6, is_active),
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $7 RETURNING *`,
            [username, email, password_hash, role, shelter_id, is_active, id]
        );
        return result.rows[0];
    },

    delete: async (id) => {
        const result = await db.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [id]
        );
        return result.rows[0];
    },

    getByShelter: async (shelter_id) => {
        const result = await db.query(
            "SELECT * FROM users WHERE shelter_id = $1 ORDER BY id",
            [shelter_id]
        );
        return result.rows;
    }
}

module.exports = Users;