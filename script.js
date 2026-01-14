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

window.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    updateThemeIcon(savedTheme === 'light');

    // animate on load
    fadeInOnScroll();

    // form validation
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;
    
    // Input fields variables
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Error divs variables
    let nameError, emailError, messageError;

    // Create error divs
    function createErrorDiv(input) {
        const error = document.createElement('div');
        error.className = 'invalid-feedback';
        error.style.color = '#dc3545';
        error.style.fontSize = '0.875rem';
        error.style.marginTop = '0.25rem';
        input.parentElement.appendChild(error);
        return error;
    }
    // Initialize error divs
    nameError    = createErrorDiv(name);
    emailError   = createErrorDiv(email);
    messageError = createErrorDiv(message);

    // Helper functions
    function showError(el, msg) {
        el.textContent = msg;
        el.parentElement.querySelector('input, textarea').classList.add('is-invalid');
    }

    function clearError(el) {
        el.textContent = '';
        el.parentElement.querySelector('input, textarea').classList.remove('is-invalid');
    }

    // name validation
    function validateName() {
        const val = name.value.trim();
        if (!val) return showError(nameError, 'Name is required'), false;
        if (val.length < 4) return showError(nameError, 'Name too short'), false;
        clearError(nameError);
        return true;
    }

    // Email validation
    function validateEmail() {
        const val = email.value.trim();
        const regex = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;
        if (!val) return showError(emailError, 'Email is required'), false;
        if (!regex.test(val)) return showError(emailError, 'Invalid email format'), false;
        clearError(emailError);
        return true;
    }

    // Message sanitization and validation
    function sanitizeAndValidateMessage() {
        const val = message.value.trim();

        // Basic validation
        if (!val) {
            showError(messageError, 'Message is required');
            return { valid: false, sanitized: '' };
        }

        if (val.length < 10) {
            showError(messageError, 'Message too short (min 10 chars)');
            return { valid: false, sanitized: '' };
        }

        if (val.length > 2000) {
            showError(messageError, 'Message too long (max 2000 chars)');
            return { valid: false, sanitized: '' };
        }

        // SECURE SANITIZATION: Escape ALL HTML special characters
        const sanitized = val.replace(/[&<>"']/g, function(match) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[match];
        });

        clearError(messageError);
        message.classList.remove('is-invalid');

        return { valid: true, sanitized };
    }

    // Event listeners for real-time validation
    name.addEventListener('change', validateName);
    name.addEventListener('input', () => { if (name.classList.contains('is-invalid')) validateName(); });

    email.addEventListener('blur', validateEmail);
    email.addEventListener('input', () => { if (email.classList.contains('is-invalid')) validateEmail(); });

    message.addEventListener('blur', () => sanitizeAndValidateMessage());
    message.addEventListener('input', () => { if (message.classList.contains('is-invalid')) sanitizeAndValidateMessage(); });

    // Form submit event
    contactForm.addEventListener('submit', (e) => {
        const nameOk    = validateName();
        const emailOk   = validateEmail();
        const msgResult = sanitizeAndValidateMessage();

        if (!nameOk || !emailOk || !msgResult.valid) {
            e.preventDefault();
            // focus first invalid field
            if (!nameOk) name.focus();
            else if (!emailOk) email.focus();
            else message.focus();
            return false;
        }

        // disable button during submit
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            // submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        // Form will submit to Netlify 
    });
});

window.addEventListener('scroll', fadeInOnScroll)