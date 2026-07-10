/* ==========================================================================
   Krish's Portfolio Interactions & Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initTypingEffect();
  initProjectsFilter();
  initScrollAnimations();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   Theme Management (Light / Dark Mode)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  
  // Check for saved theme, otherwise check system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  
  const currentTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  
  // Apply current theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* ==========================================================================
   Mobile Menu Toggle
   ========================================================================== */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Toggle menu icon
      const icon = menuToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
}

/* ==========================================================================
   Hero Typing Effect
   ========================================================================== */
function initTypingEffect() {
  const typingText = document.getElementById('typing-text');
  const phrases = [
    "Full-Stack Software Engineer",
    "Creative UI Designer",
    "Solutions Architect",
    "Creative Problem Solver"
  ];
  
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentPhrase = phrases[phraseIdx];
    
    if (isDeleting) {
      typingText.textContent = currentPhrase.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 50; // faster deleting
    } else {
      typingText.textContent = currentPhrase.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 120; // normal typing speed
    }
    
    // Determine state switches
    if (!isDeleting && charIdx === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2000; // pause before deleting
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingSpeed = 500; // pause before typing next
    }
    
    setTimeout(type, typingSpeed);
  }
  
  if (typingText) {
    type();
  }
}

/* ==========================================================================
   Projects Dynamic Tag Filter
   ========================================================================== */
function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active state from all filters
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active state to clicked button
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        // Custom card transition styling
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.9)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300); // match CSS transitions
        }
      });
    });
  });
}

/* ==========================================================================
   Scroll Animations & Active Link Tracker (Scrollspy)
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Intersection Observer for scroll reveals
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        
        // Trigger skill bars animations if we enter skills section
        if (entry.target.id === 'skills') {
          animateSkillBars();
        }
        
        // Once revealed, we don't need to observe it again
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
  
  // Scrollspy logic: Highlight current nav link
  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150; // offset for nav header height
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Function to animate skill progress bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = `${percent}%`;
  });
}

/* ==========================================================================
   Contact Form Validation & Simulation
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('portfolio-contact-form');
  const submitBtn = contactForm.querySelector('.submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const loader = submitBtn.querySelector('.submit-loader');
  const alertSuccess = document.getElementById('form-alert-success');
  const alertError = document.getElementById('form-alert-error');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide previous alerts
    alertSuccess.style.display = 'none';
    alertError.style.display = 'none';
    
    // Form fields
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim();
    const message = document.getElementById('form-message').value.trim();
    
    // Simple Validation
    if (!name || !email || !subject || !message) {
      showFormAlert(alertError, "Please fill in all fields.");
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormAlert(alertError, "Please enter a valid email address.");
      return;
    }
    
    // Loading State
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    loader.style.display = 'inline-block';
    
    // Simulate API Call
    setTimeout(() => {
      submitBtn.disabled = false;
      btnText.style.display = 'inline-block';
      loader.style.display = 'none';
      
      // Success feedback
      showFormAlert(alertSuccess, "Thank you! Your message has been sent successfully.");
      contactForm.reset();
    }, 1800);
  });
}

function showFormAlert(alertEl, message) {
  alertEl.textContent = message;
  alertEl.style.display = 'block';
  
  // Auto-scroll slightly to show the message on mobile
  alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
