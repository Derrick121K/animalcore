document.getElementById('register').addEventListener('click', function() {
    // Handle user registration
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Send data to the server for registration
});

// Function to fetch animal information
async function fetchAnimalInfo(category) {
    const response = await fetch(`https://api.example.com/animals?category=${category}`);
    const data = await response.json();
    // Display data on the page
}
