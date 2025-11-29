// server/database/init.js
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const fs = require('fs');
const db = require('../db');

console.log('Environment variables loaded:');
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);

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
  
    const { shelters, pets } = require(path.join(__dirname, '../models/data'));
    
    console.log('Inserting shelters...');
    for (const shelter of shelters) {
        await db.query(
            'INSERT INTO shelters (id, name, location) VALUES ($1, $2, $3) ON CONFLICT (id) DO NOTHING',
            [shelter.id, shelter.name, shelter.location]
        );
    }
    
    console.log('Inserting pets...');
    for (const pet of pets) {
        await db.query(
            `INSERT INTO pets (id, shelter_id, name, species, breed, age, gender, description) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT (id) DO NOTHING`,
            [pet.id, pet.shelter_id, pet.name, pet.species, pet.breed, pet.age, pet.gender, pet.description]
        );
    }
}

initializeDatabase();