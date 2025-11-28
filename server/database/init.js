// server/database/init.js
const fs = require('fs');
const path = require('path');
const db = require('../db');

async function initializeDatabase() {
    try {
        console.log('Initializing database...');
        
        // Read and execute schema
        const schemaPath = path.join(__dirname, 'schema.sql');
        const schema = fs.readFileSync(schemaPath, 'utf8');
        await db.query(schema);
        
        console.log('Database schema created successfully');
        
        // Insert sample data
        await insertSampleData();
        
        console.log('Database initialized successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

async function insertSampleData() {
    // Insert shelters from data.js
    const { shelters, pets } = require('../models/data');
    
    console.log('Inserting shelters...');
    for (const shelter of shelters) {
        await db.query(
            'INSERT INTO shelters (id, name, location) VALUES ($1, $2, $3)',
            [shelter.id, shelter.name, shelter.location]
        );
    }
    
    console.log('Inserting pets...');
    for (const pet of pets) {
        await db.query(
            `INSERT INTO pets (id, shelter_id, name, species, breed, age, gender, description) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [pet.id, pet.shelter_id, pet.name, pet.species, pet.breed, pet.age, pet.gender, pet.description]
        );
    }
}

initializeDatabase();