// ===================================
// Navigation & Mobile Menu
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Active Navigation Link on Scroll
// ===================================

const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// ===================================
// Smooth Scrolling
// ===================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Animated Counters
// ===================================

const statNumbers = document.querySelectorAll('.stat-number');
let animated = false;

function animateCounters() {
    if (animated) return;
    
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection) return;
    
    const statsPosition = statsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (statsPosition < screenPosition) {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.ceil(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target + '+';
                }
            };
            
            updateCounter();
        });
        
        animated = true;
    }
}

window.addEventListener('scroll', animateCounters);
animateCounters(); // Check on page load

// ===================================
// Gallery Filters
// ===================================

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        galleryCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filterValue === 'all' || cardCategory === filterValue) {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                }, 300);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===================================
// Scroll to Top Button
// ===================================

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:n.khaltsov@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
});

// ===================================
// Parallax Effect for Gradient Balls
// ===================================

const gradientBalls = document.querySelectorAll('.gradient-ball');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    gradientBalls.forEach((ball, index) => {
        const speed = (index + 1) * 0.05;
        const x = (window.innerWidth * mouseX * speed);
        const y = (window.innerHeight * mouseY * speed);
        
        ball.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===================================
// Scroll Reveal Animation
// ===================================

const revealElements = document.querySelectorAll('.about-card, .skill-category, .project-case, .gallery-card, .info-card');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('fade-in', 'visible');
        }
    });
}

// Debounce function for performance
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply scroll reveal with debounce
window.addEventListener('scroll', debounce(revealOnScroll));
revealOnScroll(); // Check on page load

// ===================================
// Add Transition to Gallery Cards
// ===================================

galleryCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease';
});

// ===================================
// Intersection Observer for Better Performance
// ===================================

if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.about-card, .skill-category, .role-item, .feature-item, .showcase-item, .banner-item, .process-item').forEach(el => {
        observer.observe(el);
    });
}

// ===================================
// Image Lazy Loading (if needed)
// ===================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ===================================
// Add hover effects to project covers
// ===================================

const projectCovers = document.querySelectorAll('.case-cover');

projectCovers.forEach(cover => {
    cover.addEventListener('mouseenter', function() {
        const overlay = this.querySelector('.cover-overlay');
        if (overlay) {
            overlay.style.background = 'linear-gradient(to top, rgba(15, 15, 30, 1), rgba(15, 15, 30, 0.5))';
        }
    });
    
    cover.addEventListener('mouseleave', function() {
        const overlay = this.querySelector('.cover-overlay');
        if (overlay) {
            overlay.style.background = 'linear-gradient(to top, rgba(15, 15, 30, 0.95), transparent)';
        }
    });
});

// ===================================
// Initialize animations on page load
// ===================================

window.addEventListener('load', () => {
    // Trigger initial animations
    revealOnScroll();
    updateActiveLink();
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    console.log('Portfolio loaded successfully!');
});

// ===================================
// Keyboard Navigation Enhancement
// ===================================

// Enable keyboard navigation for gallery filters
filterButtons.forEach((button, index) => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const nextIndex = e.key === 'ArrowRight' 
                ? (index + 1) % filterButtons.length 
                : (index - 1 + filterButtons.length) % filterButtons.length;
            filterButtons[nextIndex].focus();
            filterButtons[nextIndex].click();
        }
    });
});

// ===================================
// Performance Monitoring
// ===================================

if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}