-- server/database/schema.sql

-- Drop tables if they exist
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS shelters;

-- Create Shelters table
CREATE TABLE shelters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Pets table (converted from your Sequelize model)
CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    shelter_id INTEGER NOT NULL REFERENCES shelters(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    species VARCHAR(100) NOT NULL,
    breed VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(20) NOT NULL,
    size VARCHAR(20) CHECK (size IN ('small', 'medium', 'large')),
    description TEXT NOT NULL,
    photos TEXT[], -- Array of photo URLs
    status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'pending', 'adopted')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_pets_shelter_id ON pets(shelter_id);
CREATE INDEX idx_pets_species ON pets(species);
CREATE INDEX idx_pets_status ON pets(status);
