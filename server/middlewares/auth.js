const express = require('express');
const jwt = require('jsonwebtoken');

require("dotenv").config()

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        next();
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authMiddleware;