document.addEventListener('DOMContentLoaded', () => {
    // 1. নেভিগেশন মেনু টগল
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // মেনু আইটেমে ক্লিক করলে মেনু বন্ধ করা
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }


    // 2. টাইপিং এফেক্ট
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        const roles = ["ফুল স্ট্যাক ডেভেলপার", "ওয়েব ডিজাইনার", "ব্যাক-এন্ড এক্সপার্ট", "টেক লিড"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        let deletionSpeed = 75;
        let pauseTime = 1500;

        function type() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                // মুছে ফেলা
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // লেখা
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? deletionSpeed : typingSpeed;

            if (!isDeleting && charIndex === currentRole.length) {
                // লেখা শেষ, বিরতি নিয়ে মোছা শুরু
                speed = pauseTime;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // মোছা শেষ, পরের রোলে যাওয়া
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 500; // পরের শব্দ লেখার আগে হালকা বিরতি
            }

            setTimeout(type, speed);
        }

        type();
    }


    // 3. কন্টাক্ট ফর্ম জমা দেওয়া (সাধারণ JavaScript উদাহরণ)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // বাস্তব প্রজেক্টে এইখানে AJAX/Fetch ব্যবহার করে ব্যাক-এন্ডে ডেটা পাঠাতে হবে।
            // ডেমোর জন্য একটি সফল বার্তা দেখানো হলো:

            formMessage.textContent = 'বার্তাটি সফলভাবে পাঠানো হয়েছে! আমি দ্রুতই আপনার সাথে যোগাযোগ করব।';
            formMessage.style.color = '#28a745';
            contactForm.reset();

            // ৫ সেকেন্ড পর বার্তাটি মুছে ফেলা
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
        });
    }

});