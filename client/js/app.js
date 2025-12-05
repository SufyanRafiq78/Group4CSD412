// Global state
let allPets = [];
let filteredPets = [];

// DOM Elements
const petsGrid = document.getElementById('petsGrid');
const loadingSpinner = document.getElementById('loadingSpinner');
const noPetsMessage = document.getElementById('noPetsMessage');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const speciesFilter = document.getElementById('speciesFilter');
const genderFilter = document.getElementById('genderFilter');
const ageFilter = document.getElementById('ageFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const petModal = document.getElementById('petModal');
const closeModal = document.querySelector('.close');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadAllPets();
    setupEventListeners();
});

// Load all pets
async function loadAllPets() {
    showLoading();
    try {
        allPets = await api.getAllAnimals();
        filteredPets = allPets;
        displayPets(filteredPets);
    } catch (error) {
        showError('Failed to load pets. Please try again later.');
    }
}

// Display pets in grid
function displayPets(pets) {
    hideLoading();
    petsGrid.innerHTML = '';

    if (pets.length === 0) {
        showNoPetsMessage();
        return;
    }

    hideNoPetsMessage();

    pets.forEach(pet => {
        const petCard = createPetCard(pet);
        petsGrid.appendChild(petCard);
    });
}

// Create pet card element
function createPetCard(pet) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.onclick = () => showPetDetails(pet.id);

    const statusClass = `badge-${pet.status || 'available'}`;
    const petIcon = getPetIcon(pet.species);

    card.innerHTML = `
        <div class="pet-image">
            ${petIcon}
        </div>
        <div class="pet-info">
            <div class="pet-name">${pet.name}</div>
            <div class="pet-details">${pet.species} | ${pet.breed}</div>
            <div class="pet-details">${pet.age} year${pet.age !== 1 ? 's' : ''} old | ${pet.gender}</div>
            <div class="pet-description">${pet.description}</div>
            <span class="pet-badge ${statusClass}">${(pet.status || 'available').toUpperCase()}</span>
        </div>
    `;

    return card;
}

// Get icon for pet species (simple text icons)
function getPetIcon(species) {
    const iconMap = {
        'Dog': '🐕',
        'dog': '🐕',
        'Cat': '🐈',
        'cat': '🐈',
        'Rabbit': '🐰',
        'Guinea Pig': '🐹',
        'Ferret': '🦦',
        'Parrot': '🦜'
    };
    return iconMap[species] || species.charAt(0).toUpperCase();
}

// Show pet details in modal
async function showPetDetails(petId) {
    try {
        const pet = await api.getAnimalById(petId);
        const petDetails = document.getElementById('petDetails');
        const petIcon = getPetIcon(pet.species);
        const statusClass = `badge-${pet.status || 'available'}`;

        petDetails.innerHTML = `
            <div style="text-align: center; font-size: 5rem; margin-bottom: 20px;">
                ${petIcon}
            </div>
            <h2 style="text-align: center; color: #2c3e50;">${pet.name}</h2>
            <div style="text-align: center; margin-bottom: 20px;">
                <span class="pet-badge ${statusClass}">${(pet.status || 'available').toUpperCase()}</span>
            </div>
            <hr style="margin: 20px 0;">
            <p><strong>Species:</strong> ${pet.species}</p>
            <p><strong>Breed:</strong> ${pet.breed}</p>
            <p><strong>Age:</strong> ${pet.age} year${pet.age !== 1 ? 's' : ''} old</p>
            <p><strong>Gender:</strong> ${pet.gender}</p>
            <p><strong>Size:</strong> ${pet.size || 'Not specified'}</p>
            <hr style="margin: 20px 0;">
            <p><strong>Description:</strong></p>
            <p>${pet.description}</p>
            <hr style="margin: 20px 0;">
            <p><strong>Shelter ID:</strong> ${pet.shelter_id}</p>
            <div style="text-align: center; margin-top: 30px;">
                <button class="btn btn-primary" onclick="alert('Adoption feature coming soon!')">
                    Adopt ${pet.name}
                </button>
            </div>
        `;

        petModal.style.display = 'block';
    } catch (error) {
        alert('Failed to load pet details');
    }
}

// Apply filters
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const species = speciesFilter.value;
    const gender = genderFilter.value;
    const age = ageFilter.value;

    filteredPets = allPets.filter(pet => {
        const matchesSearch = !searchTerm || 
            pet.name.toLowerCase().includes(searchTerm) ||
            pet.breed.toLowerCase().includes(searchTerm) ||
            pet.description.toLowerCase().includes(searchTerm);

        const matchesSpecies = !species || pet.species === species;
        const matchesGender = !gender || pet.gender === gender;
        const matchesAge = !age || pet.age.toString() === age || (age === '5' && pet.age >= 5);

        return matchesSearch && matchesSpecies && matchesGender && matchesAge;
    });

    displayPets(filteredPets);
}

// Clear all filters
function clearAllFilters() {
    searchInput.value = '';
    speciesFilter.value = '';
    genderFilter.value = '';
    ageFilter.value = '';
    filteredPets = allPets;
    displayPets(filteredPets);
}

// Event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', applyFilters);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });

    speciesFilter.addEventListener('change', applyFilters);
    genderFilter.addEventListener('change', applyFilters);
    ageFilter.addEventListener('change', applyFilters);
    clearFiltersBtn.addEventListener('click', clearAllFilters);

    closeModal.addEventListener('click', () => {
        petModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === petModal) {
            petModal.style.display = 'none';
        }
    });
}

// Helper functions
function showLoading() {
    loadingSpinner.style.display = 'block';
    petsGrid.style.display = 'none';
    noPetsMessage.style.display = 'none';
}

function hideLoading() {
    loadingSpinner.style.display = 'none';
    petsGrid.style.display = 'grid';
}

function showNoPetsMessage() {
    noPetsMessage.style.display = 'block';
}

function hideNoPetsMessage() {
    noPetsMessage.style.display = 'none';
}

function showError(message) {
    hideLoading();
    petsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
            <p style="font-size: 1.3rem; color: #e74c3c;">${message}</p>
        </div>
    `;
}