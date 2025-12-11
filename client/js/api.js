// API configuration
const API_BASE_URL = 'http://ec2-3-238-180-196.compute-1.amazonaws.com';

// API helper functions
const api = {
    // Get all animals
    async getAllAnimals() {
        try {
            const response = await fetch(`${API_BASE_URL}/animals`);
            if (!response.ok) throw new Error('Failed to fetch animals');
            return await response.json();
        } catch (error) {
            console.error('Error fetching animals:', error);
            throw error;
        }
    },

    // Get animal by ID
    async getAnimalById(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/animals/${id}`);
            if (!response.ok) throw new Error('Failed to fetch animal');
            return await response.json();
        } catch (error) {
            console.error('Error fetching animal:', error);
            throw error;
        }
    },

    // Search animals with filters
    async searchAnimals(filters) {
        try {
            const response = await fetch(`${API_BASE_URL}/animals/search`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filters)
            });
            if (!response.ok) throw new Error('Failed to search animals');
            return await response.json();
        } catch (error) {
            console.error('Error searching animals:', error);
            throw error;
        }
    }
};