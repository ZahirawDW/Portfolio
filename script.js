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
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});