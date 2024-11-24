// Example animal data with additional information
const animals = [
    {
        name: 'WhiteLion',
        image: 'assets/whitelion.jpg',
        description: 'King of the Jungle. Very Rare.',
        category: 'very-rare',
        species: 'Panthera leo',
        location: 'Africa, India',
        food: 'Carnivore, mainly large ungulates',
        cause: 'Habitat loss, poaching',
        youtubeLink: 'https://youtu.be/mYkrHymFvtU?si=j2MmzsW6CEcGXMXf' // Example YouTube link
    },
    {
        name: 'Liger',
        image: 'assets/liger.jpg',
        description: 'A powerful big cat. Very Rare.',
        category: 'very-rare',
        species: 'Panthera leo x Panthera tigris',
        location: 'Zoo locations worldwide',
        food: 'Carnivore, beef, chicken',
        cause: 'Hybridization',
        youtubeLink: 'https://youtu.be/qAdWRSLzdBQ?si=VPDeGPi72unNjDPg'
    },
    {
        name: 'Elephant',
        image: 'assets/elephant.jpg',
        description: 'The largest land animal. Rare.',
        category: 'rare',
        species: 'Loxodonta africana',
        location: 'Africa, Asia',
        food: 'Herbivore, grasses, fruits, bark',
        cause: 'Poaching, habitat loss',
        youtubeLink: 'https://youtu.be/FwOoC0QdeG4?si=ziZGtGooWalIoMke'
    },
    {
        name: 'Giraffe',
        image: 'assets/giraffe.jpg',
        description: 'Tall and graceful. Rare.',
        category: 'rare',
        species: 'Giraffa camelopardalis',
        location: 'Africa',
        food: 'Herbivore, leaves, fruits',
        cause: 'Habitat loss, human-wildlife conflict',
        youtubeLink: 'https://youtu.be/ITsQaC49_is?si=59lXQ1HnRcx9Na9b'
    },
    {
        name: 'Panda',
        image: 'assets/panda.jpg',
        description: 'Endangered species. Super Rare.',
        category: 'super-rare',
        species: 'Ailuropoda melanoleuca',
        location: 'China',
        food: 'Herbivore, bamboo',
        cause: 'Habitat loss, low reproduction rate',
        youtubeLink: 'https://youtu.be/yYp_Shk7XcI?si=_mhqswB3WRkIcTMO'
    },
    {
        name: 'Kangaroo',
        image: 'assets/kangaroo.jpg',
        description: 'Native to Australia. Rare.',
        category: 'rare',
        species: 'Macropus',
        location: 'Australia',
        food: 'Herbivore, grasses, shrubs',
        cause: 'Habitat destruction, hunting',
        youtubeLink: 'https://youtu.be/QDrSuudakBE?si=6a0RRQZHYGyIq-TR'
    }
];

// Function to open the animal info pop-up
function openAnimalPopup(animal) {
    document.getElementById('animal-name').textContent = animal.name;
    document.getElementById('animal-popup-img').src = animal.image;
    document.getElementById('animal-species').textContent = animal.species;
    document.getElementById('animal-location').textContent = animal.location;
    document.getElementById('animal-food').textContent = animal.food;
    document.getElementById('animal-cause').textContent = animal.cause;
    document.getElementById('animal-video-frame').src = animal.youtubeLink;
    document.getElementById('animal-popup').style.display = 'block';
}

// Function to close the animal info pop-up
function closeAnimalPopup() {
    document.getElementById('animal-popup').style.display = 'none';
}

// Function to filter animals by selected plan
function filterAnimalsByPlan(plan) {
    switch (plan) {
        case 'trial':
            return animals.filter(animal => animal.category === 'rare');
        case 'basic':
            return animals.filter(animal => animal.category === 'rare' || animal.category === 'very-rare');
        case 'pro':
            return animals.filter(animal => animal.category === 'rare' || animal.category === 'very-rare' || animal.category === 'super-rare');
        case 'pro-plus':
            return animals;  // All animals for Pro+ plan
        default:
            return [];
    }
}

// Function to display the filtered animals
function displayAnimals() {
    const selectedPlan = localStorage.getItem('selectedPlan');
    const gallery = document.querySelector('.animal-cards');
    const filteredAnimals = filterAnimalsByPlan(selectedPlan);

    filteredAnimals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');
        animalCard.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
            <p>${animal.description}</p>
        `;

        // Add click event to open the pop-up with detailed info
        animalCard.addEventListener('click', () => openAnimalPopup(animal));

        gallery.appendChild(animalCard);
    });
}

// Close button event listener for pop-up
document.querySelector('.close-btn').addEventListener('click', closeAnimalPopup);

// Event listener for the "Visit Animal" button in the pop-up
document.getElementById('visit-animal-btn').addEventListener('click', () => {
    const animalName = document.getElementById('animal-name').textContent;
    alert(`You will now be directed to the location of the ${animalName}.`); // You can add your offline map logic here
});

// Call the function to display the animals when the page is ready
document.addEventListener('DOMContentLoaded', displayAnimals);

function goToAnimalGallery(plan) {
    // Check if the user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        // If no user is logged in, redirect to login/signup page
        alert('You need to log in or sign up to select a plan.');
        window.location.href = 'loginorSignup.html'; // Ensure this file exists
    } else {
        // If logged in, store the selected plan and redirect to the gallery
        localStorage.setItem('selectedPlan', plan);
        alert(`You selected the ${plan} plan. Redirecting to the gallery...`);
        window.location.href = 'animalGallery.html'; // Ensure this file exists
    }
}


