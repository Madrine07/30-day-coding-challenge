// Optional JavaScript for smooth scrolling (if needed for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll behavior
        });
    });
});
