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
    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    }
});

});