// Log In Button Functionality
document.querySelector('.login-btn').addEventListener('click', () => {
    window.location.href = 'login.html'; // Create a 'login.html' file for this page.
});

// Hero Button Functionality
document.querySelector('.hero-btn').addEventListener('click', () => {
    alert('Redirecting to learning modules... (Add navigation here)');
});

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
