document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close the menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }


    // 2. Typing Effect for the Home Section
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const roles = ["Full Stack Developer", "Web Designer", "Back-End Expert", "Tech Lead"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 150;
        const deletionSpeed = 75;
        const pauseTime = 1500;

        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // Delete characters
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Type characters
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? deletionSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentRole.length) {
                // Typing complete, pause before deleting
                speed = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Deletion complete, move to next role
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500; 
            }

            setTimeout(type, speed);
        }

        type();
    }


    // 3. Contact Form Submission (Simple Example)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real project, you would use AJAX/Fetch here to send data to a backend server.
            // For a demo, display a success message:

            formMessage.textContent = 'Message sent successfully! I will get back to you shortly.';
            formMessage.style.color = '#28a745';
            contactForm.reset();

            // Clear the message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

});