// app.js

// Form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! We will contact you soon.`);
    // Optionally send this data to the server via an API
});

// Fetch animal data dynamically (placeholder example)
const fetchAnimals = async () => {
    try {
        const response = await fetch('https://api.example.com/animals'); // Replace with your API URL
        const animals = await response.json();

        const animalContainer = document.querySelector('.animal-cards');
        animals.forEach((animal) => {
            const animalCard = document.createElement('div');
            animalCard.className = 'animal-card';
            animalCard.innerHTML = `
                <img src="${animal.image}" alt="${animal.name}">
                <p>${animal.name}</p>
            `;
            animalContainer.appendChild(animalCard);
        });
    } catch (err) {
        console.error('Error fetching animal data:', err);
    }
};

// Fetch animal data on page load
fetchAnimals();

// Function to handle the plan selection and redirect the user to the Animal Gallery page
function goToAnimalGallery(plan) {
    // Save the selected plan to localStorage so that it can be used on the Animal Gallery page
    localStorage.setItem('selectedPlan', plan);

    // Redirect the user to the Animal Gallery page
    window.location.href = 'animal-gallery.html';  // Replace with the actual path to your Animal Gallery page
}

