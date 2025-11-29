// backend/models/data.js

let shelters = [
    { id: 1, name: "Imagine Peace for Pups", location: "Kenmore, WA" },
    { id: 2, name: "Meow Cat Rescue", location: "Kirkland, WA" },
    { id: 3, name: "PAWS Cat City", location: "Seattle, WA" },
    { id: 4, name: "Patty's Animal Rescue", location: "Woodinville, WA" },
    { id: 5, name: "Seattle Area Feline Rescue", location: "Shoreline, WA" },
    { id: 6, name: "Resilient Hearts Animal Sanctuary", location: "Seattle, WA" },
    { id: 7, name: "Seattle Humane", location: "Bellevue, WA" },
    { id: 8, name: "Forever Home Dog Rescue", location: "Lynnwood, WA" },
    { id: 9, name: "Seattle Animal Shelter", location: "Seattle, WA" },
    { id: 10, name: "Sammamish Animal Sanctuary", location: "Renton, WA" }
];

let pets = [
    // Imagine Peace for Pups — Kenmore, WA
    { id: 1, name: "Buddy", species: "Dog", breed: "Golden Retriever", age: 3, gender: "Male", description: "Friendly and energetic", shelter_id: 1 },
    { id: 2, name: "Max", species: "Dog", breed: "Labrador Mix", age: 4, gender: "Male", description: "Loves playing fetch", shelter_id: 1 },
    { id: 3, name: "Bella", species: "Dog", breed: "Beagle", age: 2, gender: "Female", description: "Curious and sweet", shelter_id: 1 },
    { id: 4, name: "Daisy", species: "Dog", breed: "Poodle Mix", age: 5, gender: "Female", description: "Great with kids", shelter_id: 1 },
    { id: 5, name: "Rocky", species: "Dog", breed: "German Shepherd", age: 3, gender: "Male", description: "Very loyal", shelter_id: 1 },
    { id: 6, name: "Lucy", species: "Dog", breed: "Cocker Spaniel", age: 4, gender: "Female", description: "Loves cuddles", shelter_id: 1 },
    { id: 7, name: "Charlie", species: "Dog", breed: "Boxer", age: 6, gender: "Male", description: "Playful and energetic", shelter_id: 1 },
    { id: 8, name: "Molly", species: "Dog", breed: "Shih Tzu", age: 2, gender: "Female", description: "Gentle and calm", shelter_id: 1 },
    { id: 9, name: "Toby", species: "Dog", breed: "Husky Mix", age: 3, gender: "Male", description: "High energy and smart", shelter_id: 1 },
    { id: 10, name: "Sadie", species: "Dog", breed: "Bulldog", age: 5, gender: "Female", description: "Friendly and laid-back", shelter_id: 1 },

    // Meow Cat Rescue — Kirkland, WA
    { id: 11, name: "Luna", species: "Cat", breed: "Siamese", age: 1, gender: "Female", description: "Affectionate and playful", shelter_id: 2 },
    { id: 12, name: "Simba", species: "Cat", breed: "Maine Coon", age: 3, gender: "Male", description: "Gentle giant", shelter_id: 2 },
    { id: 13, name: "Milo", species: "Cat", breed: "Domestic Short Hair", age: 2, gender: "Male", description: "Curious and sweet", shelter_id: 2 },
    { id: 14, name: "Chloe", species: "Cat", breed: "Persian", age: 4, gender: "Female", description: "Loves attention", shelter_id: 2 },
    { id: 15, name: "Oliver", species: "Cat", breed: "Bengal", age: 1, gender: "Male", description: "Energetic and playful", shelter_id: 2 },
    { id: 16, name: "Daisy", species: "Cat", breed: "Calico", age: 3, gender: "Female", description: "Sweet and calm", shelter_id: 2 },
    { id: 17, name: "Leo", species: "Cat", breed: "Ragdoll", age: 2, gender: "Male", description: "Loves cuddles", shelter_id: 2 },
    { id: 18, name: "Nala", species: "Cat", breed: "Siberian", age: 4, gender: "Female", description: "Playful and friendly", shelter_id: 2 },
    { id: 19, name: "Shadow", species: "Cat", breed: "Russian Blue", age: 1, gender: "Male", description: "Quiet and observant", shelter_id: 2 },
    { id: 20, name: "Cleo", species: "Cat", breed: "British Shorthair", age: 5, gender: "Female", description: "Loves sunbathing", shelter_id: 2 },

    // PAWS Cat City — Seattle, WA
    { id: 21, name: "Smokey", species: "Cat", breed: "Domestic Short Hair", age: 3, gender: "Male", description: "Playful and friendly", shelter_id: 3 },
    { id: 22, name: "Whiskers", species: "Cat", breed: "Tabby", age: 2, gender: "Male", description: "Curious and sweet", shelter_id: 3 },
    { id: 23, name: "Misty", species: "Cat", breed: "Siamese", age: 1, gender: "Female", description: "Affectionate", shelter_id: 3 },
    { id: 24, name: "Pumpkin", species: "Cat", breed: "Calico", age: 4, gender: "Female", description: "Friendly and calm", shelter_id: 3 },
    { id: 25, name: "Tiger", species: "Cat", breed: "Bengal", age: 2, gender: "Male", description: "Energetic and playful", shelter_id: 3 },
    { id: 26, name: "Lily", species: "Cat", breed: "Persian", age: 3, gender: "Female", description: "Sweet and calm", shelter_id: 3 },
    { id: 27, name: "Oscar", species: "Cat", breed: "Maine Coon", age: 4, gender: "Male", description: "Gentle giant", shelter_id: 3 },
    { id: 28, name: "Sophie", species: "Cat", breed: "Ragdoll", age: 1, gender: "Female", description: "Affectionate and calm", shelter_id: 3 },
    { id: 29, name: "Leo", species: "Cat", breed: "Siberian", age: 2, gender: "Male", description: "Friendly and playful", shelter_id: 3 },
    { id: 30, name: "Bella", species: "Cat", breed: "British Shorthair", age: 5, gender: "Female", description: "Loves naps", shelter_id: 3 },

    // Patty's Animal Rescue — Woodinville, WA
    { id: 31, name: "Max", species: "Dog", breed: "Labrador", age: 3, gender: "Male", description: "Friendly", shelter_id: 4 },
    { id: 32, name: "Lucy", species: "Dog", breed: "Beagle", age: 4, gender: "Female", description: "Playful", shelter_id: 4 },
    { id: 33, name: "Charlie", species: "Dog", breed: "Cocker Spaniel", age: 2, gender: "Male", description: "Energetic", shelter_id: 4 },
    { id: 34, name: "Daisy", species: "Dog", breed: "Golden Retriever", age: 5, gender: "Female", description: "Calm and gentle", shelter_id: 4 },
    { id: 35, name: "Luna", species: "Cat", breed: "Siamese", age: 2, gender: "Female", description: "Affectionate", shelter_id: 4 },
    { id: 36, name: "Milo", species: "Cat", breed: "Tabby", age: 3, gender: "Male", description: "Curious", shelter_id: 4 },
    { id: 37, name: "Chloe", species: "Cat", breed: "Persian", age: 1, gender: "Female", description: "Calm", shelter_id: 4 },
    { id: 38, name: "Leo", species: "Cat", breed: "Ragdoll", age: 4, gender: "Male", description: "Loves cuddles", shelter_id: 4 },
    { id: 39, name: "Nala", species: "Cat", breed: "Maine Coon", age: 5, gender: "Female", description: "Gentle giant", shelter_id: 4 },
    { id: 40, name: "Coco", species: "Rabbit", breed: "Mini Lop", age: 1, gender: "Female", description: "Soft and gentle", shelter_id: 4 },
    { id: 41, name: "Benny", species: "Guinea Pig", breed: "American", age: 2, gender: "Male", description: "Loves veggies", shelter_id: 4 },
    { id: 42, name: "Pip", species: "Ferret", breed: "Domestic", age: 3, gender: "Male", description: "Very playful", shelter_id: 4 },
    { id: 43, name: "Kiwi", species: "Parrot", breed: "Cockatiel", age: 2, gender: "Female", description: "Talkative", shelter_id: 4 },
    { id: 44, name: "Snowy", species: "Rabbit", breed: "Lionhead", age: 1, gender: "Female", description: "Gentle and soft", shelter_id: 4 },

    // Seattle Area Feline Rescue — Shoreline, WA 
    { id: 45, name: "Rocky", species: "Dog", breed: "Beagle", age: 3, gender: "Male", description: "Friendly and active", shelter_id: 5 },
    { id: 46, name: "Bella", species: "Dog", breed: "Cocker Spaniel", age: 4, gender: "Female", description: "Loves to play", shelter_id: 5 },
    { id: 47, name: "Duke", species: "Dog", breed: "Golden Retriever", age: 5, gender: "Male", description: "Calm and gentle", shelter_id: 5 },
    { id: 48, name: "Lily", species: "Cat", breed: "Siamese", age: 2, gender: "Female", description: "Affectionate", shelter_id: 5 },
    { id: 49, name: "Simba", species: "Cat", breed: "Tabby", age: 3, gender: "Male", description: "Curious", shelter_id: 5 },
    { id: 50, name: "Nala", species: "Cat", breed: "Persian", age: 4, gender: "Female", description: "Gentle", shelter_id: 5 },
    { id: 51, name: "Shadow", species: "Cat", breed: "Maine Coon", age: 5, gender: "Male", description: "Loves cuddles", shelter_id: 5 },
    { id: 52, name: "Coco", species: "Rabbit", breed: "Mini Lop", age: 1, gender: "Female", description: "Soft and gentle", shelter_id: 5 },
    { id: 53, name: "Benny", species: "Guinea Pig", breed: "American", age: 2, gender: "Male", description: "Friendly and curious", shelter_id: 5 },
    { id: 54, name: "Kiwi", species: "Parrot", breed: "Cockatiel", age: 3, gender: "Female", description: "Talkative", shelter_id: 5 },
    { id: 55, name: "Pip", species: "Ferret", breed: "Domestic", age: 2, gender: "Male", description: "Very playful", shelter_id: 5 },

    // Resilient Hearts Animal Sanctuary — Seattle, WA 
    { id: 56, name: "Max", species: "Dog", breed: "Labrador", age: 3, gender: "Male", description: "Energetic and friendly", shelter_id: 6 },
    { id: 57, name: "Luna", species: "Dog", breed: "Golden Retriever", age: 4, gender: "Female", description: "Loves attention", shelter_id: 6 },
    { id: 58, name: "Charlie", species: "Dog", breed: "Beagle", age: 2, gender: "Male", description: "Curious and playful", shelter_id: 6 },
    { id: 59, name: "Milo", species: "Cat", breed: "Siamese", age: 1, gender: "Male", description: "Affectionate and calm", shelter_id: 6 },
    { id: 60, name: "Chloe", species: "Cat", breed: "Persian", age: 3, gender: "Female", description: "Loves cuddles", shelter_id: 6 },
    { id: 61, name: "Leo", species: "Cat", breed: "Maine Coon", age: 4, gender: "Male", description: "Gentle giant", shelter_id: 6 },
    { id: 62, name: "Nala", species: "Cat", breed: "Ragdoll", age: 5, gender: "Female", description: "Friendly and playful", shelter_id: 6 },
    { id: 63, name: "Coco", species: "Rabbit", breed: "Lionhead", age: 1, gender: "Female", description: "Soft and gentle", shelter_id: 6 },
    { id: 64, name: "Benny", species: "Guinea Pig", breed: "American", age: 2, gender: "Male", description: "Curious and playful", shelter_id: 6 },
    { id: 65, name: "Kiwi", species: "Parrot", breed: "Cockatiel", age: 3, gender: "Female", description: "Talkative", shelter_id: 6 },
    { id: 66, name: "Pip", species: "Ferret", breed: "Domestic", age: 2, gender: "Male", description: "Playful and mischievous", shelter_id: 6 },

    // Seattle Humane — Bellevue, WA 
    { id: 67, name: "Rocky", species: "Dog", breed: "German Shepherd", age: 4, gender: "Male", description: "Loyal and protective", shelter_id: 7 },
    { id: 68, name: "Bella", species: "Dog", breed: "Golden Retriever", age: 3, gender: "Female", description: "Friendly and calm", shelter_id: 7 },
    { id: 69, name: "Daisy", species: "Dog", breed: "Labrador", age: 5, gender: "Female", description: "Playful and energetic", shelter_id: 7 },
    { id: 70, name: "Simba", species: "Cat", breed: "Maine Coon", age: 2, gender: "Male", description: "Curious and friendly", shelter_id: 7 },
    { id: 71, name: "Lily", species: "Cat", breed: "Siamese", age: 1, gender: "Female", description: "Affectionate", shelter_id: 7 },
    { id: 72, name: "Leo", species: "Cat", breed: "Ragdoll", age: 3, gender: "Male", description: "Gentle and playful", shelter_id: 7 },
    { id: 73, name: "Nala", species: "Cat", breed: "Persian", age: 4, gender: "Female", description: "Loves cuddles", shelter_id: 7 },
    { id: 74, name: "Coco", species: "Rabbit", breed: "Mini Lop", age: 1, gender: "Female", description: "Soft and gentle", shelter_id: 7 },
    { id: 75, name: "Benny", species: "Guinea Pig", breed: "American", age: 2, gender: "Male", description: "Friendly", shelter_id: 7 },
    { id: 76, name: "Kiwi", species: "Parrot", breed: "Cockatiel", age: 3, gender: "Female", description: "Talkative", shelter_id: 7 },
    { id: 77, name: "Pip", species: "Ferret", breed: "Domestic", age: 2, gender: "Male", description: "Playful and curious", shelter_id: 7 },

    // Forever Home Dog Rescue — Lynnwood, WA 
    { id: 78, name: "Buddy", species: "Dog", breed: "Labrador", age: 3, gender: "Male", description: "Friendly and energetic", shelter_id: 8 },
    { id: 79, name: "Max", species: "Dog", breed: "Golden Retriever", age: 4, gender: "Male", description: "Loves fetch", shelter_id: 8 },
    { id: 80, name: "Lucy", species: "Dog", breed: "Beagle", age: 2, gender: "Female", description: "Playful and curious", shelter_id: 8 },
    { id: 81, name: "Charlie", species: "Dog", breed: "Poodle Mix", age: 5, gender: "Male", description: "Friendly and calm", shelter_id: 8 },
    { id: 82, name: "Daisy", species: "Dog", breed: "Cocker Spaniel", age: 3, gender: "Female", description: "Loves cuddles", shelter_id: 8 },
    { id: 83, name: "Rocky", species: "Dog", breed: "Boxer", age: 4, gender: "Male", description: "Energetic", shelter_id: 8 },
    { id: 84, name: "Molly", species: "Dog", breed: "Shih Tzu", age: 2, gender: "Female", description: "Gentle and friendly", shelter_id: 8 },
    { id: 85, name: "Toby", species: "Dog", breed: "Husky Mix", age: 3, gender: "Male", description: "Smart and playful", shelter_id: 8 },
    { id: 86, name: "Sadie", species: "Dog", breed: "Bulldog", age: 5, gender: "Female", description: "Calm and loving", shelter_id: 8 },
    { id: 87, name: "Lucy", species: "Dog", breed: "Golden Retriever", age: 4, gender: "Female", description: "Friendly and playful", shelter_id: 8 },

    // Seattle Animal Shelter — Seattle, WA
    { id: 88, name: "Max", species: "Dog", breed: "Golden Retriever", age: 3, gender: "Male", description: "Friendly and energetic", shelter_id: 9 },
    { id: 89, name: "Bella", species: "Dog", breed: "Labrador", age: 4, gender: "Female", description: "Playful and loving", shelter_id: 9 },
    { id: 90, name: "Charlie", species: "Dog", breed: "Beagle", age: 2, gender: "Male", description: "Curious and active", shelter_id: 9 },
    { id: 91, name: "Lucy", species: "Dog", breed: "Poodle Mix", age: 5, gender: "Female", description: "Gentle and calm", shelter_id: 9 },
    { id: 92, name: "Daisy", species: "Cat", breed: "Siamese", age: 1, gender: "Female", description: "Affectionate and calm", shelter_id: 9 },
    { id: 93, name: "Leo", species: "Cat", breed: "Maine Coon", age: 3, gender: "Male", description: "Friendly and playful", shelter_id: 9 },
    { id: 94, name: "Nala", species: "Cat", breed: "Ragdoll", age: 4, gender: "Female", description: "Loves cuddles", shelter_id: 9 },
    { id: 95, name: "Simba", species: "Cat", breed: "Persian", age: 2, gender: "Male", description: "Gentle and calm", shelter_id: 9 },
    { id: 96, name: "Coco", species: "Rabbit", breed: "Mini Lop", age: 1, gender: "Female", description: "Soft and gentle", shelter_id: 9 },
    { id: 97, name: "Benny", species: "Guinea Pig", breed: "American", age: 2, gender: "Male", description: "Friendly and curious", shelter_id: 9 },
    { id: 98, name: "Kiwi", species: "Parrot", breed: "Cockatiel", age: 3, gender: "Female", description: "Talkative and social", shelter_id: 9 },
    { id: 99, name: "Pip", species: "Ferret", breed: "Domestic", age: 2, gender: "Male", description: "Playful", shelter_id: 9 },
    { id: 100, name: "Snowy", species: "Rabbit", breed: "Lionhead", age: 1, gender: "Female", description: "Gentle and soft", shelter_id: 9 }

];

module.exports = {
    shelters,
    pets
};
