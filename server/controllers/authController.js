const Users = require("../models/usersModel");
const { bcrypt } = require("bcryptjs");
const jwt = require('jsonwebtoken');

require("dotenv").config()

const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await Users.getByUsername(username);
            if (await bcrypt.compare(password, user.password_hash)) {
                const token = jwt.sign({id: user.id, username: user.username, role: user.role, shelter_id: user.shelter_id}, process.env.JWT_SECRET);
                res.json({token})
            }
            res.status(401).json({})
        } catch (err) {
            res.status(500).json({})
        }
    }
}

module.exports = authController;