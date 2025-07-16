 // Mobile Navigation
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const mobileNav = document.querySelector('.mobile-nav');
 const mobileNavClose = document.querySelector('.mobile-nav-close');
 const overlay = document.querySelector('.overlay');
 
 mobileMenuBtn.addEventListener('click', () => {
     mobileNav.classList.add('active');
     overlay.classList.add('active');
     document.body.style.overflow = 'hidden';
 });
 
 mobileNavClose.addEventListener('click', () => {
     mobileNav.classList.remove('active');
     overlay.classList.remove('active');
     document.body.style.overflow = 'auto';
 });
 
 overlay.addEventListener('click', () => {
     mobileNav.classList.remove('active');
     overlay.classList.remove('active');
     document.body.style.overflow = 'auto';
 });
 
 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
             
             // Close mobile menu if open
             mobileNav.classList.remove('active');
             overlay.classList.remove('active');
             document.body.style.overflow = 'auto';
         }
     });
 });
 
 // Form submission
 const contactForm = document.getElementById('contactForm');
 if (contactForm) {
     contactForm.addEventListener('submit', function(e) {
         e.preventDefault();
         
         // Get form values
         const name = document.getElementById('name').value;
         const email = document.getElementById('email').value;
         const subject = document.getElementById('subject').value;
         const message = document.getElementById('message').value;
         
         // Here you would typically send the form data to a server
         // For demonstration, we'll just show an alert
         alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
         
         // Reset form
         contactForm.reset();
     });
 }
 
 // Sticky header
 window.addEventListener('scroll', function() {
     const header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 0);
 });