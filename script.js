// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLightMode = document.body.classList.contains('light-mode'); 
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
    updateThemeIcon(isLightMode);
}
// Update theme icon
function updateThemeIcon(isLightMode) {
    const themeicon = document.querySelector('.themeicon');
    if (!themeicon) return;
    themeicon.innerHTML = isLightMode ? '&#127774;' : '&#127773;';
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    updateThemeIcon(savedTheme === 'light');

    // animate on load
    fadeInOnScroll();
});

// Scroll Animation
function fadeInOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('is-visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll)