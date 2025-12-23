/**
 * RICKY ANSARI PORTFOLIO - Interactive Scripts
 * =============================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initTypewriter();
    initNavigation();
    initScrollAnimations();
    initStatCounters();
    initSmoothScroll();
});

/**
 * Typewriter Effect
 */
function initTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;
    
    const phrases = [
        'Full-Stack Software Engineer',
        'Quantitative Developer',
        'Machine Learning Engineer',
        'Trading Systems Architect',
        'Python & JavaScript Expert'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            element.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            element.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Finished typing the phrase
        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000; // Pause at end
            isDeleting = true;
        }
        
        // Finished deleting the phrase
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before next phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing
    setTimeout(type, 1000);
}

/**
 * Navigation
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Mobile toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

/**
 * Scroll Animations (Intersection Observer)
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger children animations
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    child.style.animationDelay = `${index * 0.1}s`;
                    child.classList.add('animate-in');
                });
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('animate-ready');
        observer.observe(section);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.classList.add('animate-ready');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach((skill, index) => {
        skill.classList.add('animate-ready');
        skill.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(skill);
    });
    
    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.classList.add('animate-ready');
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });
}

/**
 * Stat Counter Animation
 */
function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
                observer.unobserve(stat);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = t => t * (2 - t);
    
    let frame = 0;
    
    const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(target * progress);
        
        element.textContent = currentCount;
        
        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = target;
        }
    }, frameDuration);
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Add CSS for animations
 */
const style = document.createElement('style');
style.textContent = `
    .animate-ready {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

/**
 * Console Easter Egg
 */
console.log(`
%c ╔═══════════════════════════════════════════════════╗
 ║                                                   ║
 ║   👋 Hey there, curious developer!                ║
 ║                                                   ║
 ║   Thanks for checking out the source code.        ║
 ║   Built with vanilla HTML, CSS & JS.              ║
 ║   No frameworks, no dependencies.                 ║
 ║                                                   ║
 ║   Let's connect: github.com/rickyansari           ║
 ║                                                   ║
 ╚═══════════════════════════════════════════════════╝
`, 'color: #00d4aa; font-family: monospace;');


