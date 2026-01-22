document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Remove e.preventDefault() so it actually submits to Formspree
    
    // Optional: Show thank you message immediately
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Optional: Disable button to prevent double submit
    document.querySelector('button[type="submit"]').textContent = 'Sending...';
    document.querySelector('button[type="submit"]').disabled = true;
});