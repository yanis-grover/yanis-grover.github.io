/* Add JavaScript code here, for example: */
// Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});
// Add event listeners for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});