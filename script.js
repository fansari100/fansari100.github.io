/**
 * RICKY ANSARI - PERSONAL PORTFOLIO
 * JavaScript Interactions & Animations
 */

// ============================================
// TYPING EFFECT
// ============================================

class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.txt = '';
        this.isDeleting = false;
        this.type();
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.textContent = this.txt;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll behavior
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile menu on link click
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// CURSOR GLOW EFFECT
// ============================================

function initCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    
    if (!cursorGlow || window.innerWidth < 768) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        const dx = mouseX - currentX;
        const dy = mouseY - currentY;
        
        currentX += dx * 0.1;
        currentY += dy * 0.1;
        
        cursorGlow.style.left = currentX + 'px';
        cursorGlow.style.top = currentY + 'px';
        
        requestAnimationFrame(animate);
    }

    animate();

    // Hide on mouse leave
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursorGlow.style.opacity = '0.5';
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const animatedElements = document.querySelectorAll(
        '.section-header, .about-content, .about-image, .skill-category, ' +
        '.project-card, .timeline-item, .contact-card'
    );

    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.classList.add(`stagger-${Math.min(index % 6 + 1, 6)}`);
        observer.observe(el);
    });
}

// ============================================
// ACTIVE NAV LINK
// ============================================

function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = counter.textContent;
                const numMatch = target.match(/\d+/);
                
                if (numMatch) {
                    const num = parseInt(numMatch[0]);
                    const suffix = target.replace(/\d+/, '');
                    let current = 0;
                    const increment = num / 50;
                    const duration = 1500;
                    const stepTime = duration / 50;

                    const updateCounter = () => {
                        current += increment;
                        if (current < num) {
                            counter.textContent = Math.ceil(current) + suffix;
                            setTimeout(updateCounter, stepTime);
                        } else {
                            counter.textContent = target;
                        }
                    };

                    updateCounter();
                    observer.unobserve(counter);
                }
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ============================================
// SKILL TAGS HOVER EFFECT
// ============================================

function initSkillHover() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.background = 'rgba(99, 102, 241, 0.2)';
            tag.style.color = '#6366f1';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.background = '';
            tag.style.color = '';
        });
    });
}

// ============================================
// PROJECT CARDS TILT EFFECT
// ============================================

function initTiltEffect() {
    const cards = document.querySelectorAll('.project-card');
    
    if (window.innerWidth < 768) return;

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

function initParallax() {
    const hero = document.querySelector('.hero');
    const orbs = document.querySelectorAll('.gradient-orb');

    if (!hero || window.innerWidth < 768) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;

        if (scrolled < heroHeight) {
            orbs.forEach((orb, index) => {
                const speed = 0.3 + (index * 0.1);
                orb.style.transform = `translateY(${scrolled * speed}px)`;
            });
        }
    });
}

// ============================================
// EASTER EGG - KONAMI CODE
// ============================================

function initKonamiCode() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.code === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg activated!
                document.body.style.animation = 'rainbow 2s linear';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

// ============================================
// FORM HANDLING (if you add a contact form)
// ============================================

function initContactForm() {
    const form = document.querySelector('.contact-form');
    
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        submitBtn.textContent = 'Sent!';
        form.reset();

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// INITIALIZE ALL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing effect
    const typingElement = document.getElementById('typingText');
    if (typingElement) {
        const words = [
            'Quantitative Developer',
            'Full-Stack Software Engineer',
            'Machine Learning Engineer',
            'Problem Solver'
        ];
        new TypeWriter(typingElement, words, 2000);
    }

    // Initialize all features
    initNavigation();
    initCursorGlow();
    initScrollAnimations();
    initActiveNavLink();
    animateCounters();
    initSkillHover();
    initTiltEffect();
    initParallax();
    initKonamiCode();
    initContactForm();

    // Log a welcome message
    console.log(
        '%c👋 Hey there! Welcome to my portfolio!',
        'font-size: 16px; font-weight: bold; color: #6366f1;'
    );
    console.log(
        '%c🔍 Curious about the code? Check out the source!',
        'font-size: 12px; color: #a0a0b0;'
    );
});

// Handle resize events with debounce
window.addEventListener('resize', debounce(() => {
    // Reinitialize cursor glow on resize
    if (window.innerWidth >= 768) {
        initCursorGlow();
    }
}, 250));

// Add rainbow animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);
