// Store user information in localStorage for simplicity
let users = [];

// Toggle between Login and Signup forms
function toggleForm(formType) {
    if (formType === 'signup') {
        document.getElementById('login-form-container').style.display = 'none';
        document.getElementById('signup-form-container').style.display = 'block';
    } else {
        document.getElementById('login-form-container').style.display = 'block';
        document.getElementById('signup-form-container').style.display = 'none';
    }
}

// Signup functionality
function signupUser(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const newUser = { name, email, password, history: [] };

    // Save user to users array (in a real app, save to server)
    users.push(newUser);

    alert('Account created successfully!');
    toggleForm('login');
}

// Login functionality
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user)); // Store user data in localStorage
        displayProfile(user);
    } else {
        alert('Invalid email or password.');
    }
}

// Display the user profile after login
function displayProfile(user) {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('signup-form-container').style.display = 'none';
    document.getElementById('profile-container').style.display = 'block';

    document.getElementById('profile-name').textContent = user.name;
}

// Update Profile functionality
function updateProfile() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const newName = prompt('Enter new name:', user.name);
    if (newName) {
        user.name = newName;
        localStorage.setItem('currentUser', JSON.stringify(user)); // Update user in localStorage
        alert('Profile updated!');
        displayProfile(user); // Re-display updated profile
    }
}

// View History functionality (just a placeholder for now)
function viewHistory() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    alert(`Viewing history for ${user.name}...`);
}

// Change Settings functionality (just a placeholder for now)
function changeSettings() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    alert(`Changing settings for ${user.name}...`);
}

// Logout functionality
function logout() {
    localStorage.removeItem('currentUser');
    document.getElementById('profile-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
}

// Submit chosen plan
function choosePlan() {
    const plan = document.querySelector('input[name="plan"]:checked');
    if (plan) {
        alert(`You have chosen the ${plan.value} plan.`);
    } else {
        alert('Please select a plan.');
    }
}
