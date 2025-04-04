// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Header hide/show on scroll
let lastScroll = 0;
const header = document.querySelector('header');

function handleScroll() {
  const currentScroll = window.pageYOffset;
  
  // Show/hide header
  if (currentScroll <= 0) {
    header.classList.remove('hidden');
  } else if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
    header.classList.add('hidden');
  } else if (currentScroll < lastScroll && header.classList.contains('hidden')) {
    header.classList.remove('hidden');
  }
  
  lastScroll = currentScroll;
  
  // Reveal elements
  reveal();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Initialize animations
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', reveal);

// Form submission animation
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    const button = this.querySelector('button[type="submit"]');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = '';
    }, 200);
  });
}

// Skill cards hover effect
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = '';
  });
});