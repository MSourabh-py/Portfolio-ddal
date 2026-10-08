/**
 * SOURABH PORTFOLIO - MAIN INTERACTION SCRIPT
 * Minimal, lightweight & dependency-free
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isExpanded = navLinks.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. Animate Skill Meter Bars smoothly
  const meterFills = document.querySelectorAll('.meter-fill');
  if (meterFills.length > 0) {
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fill = entry.target;
            const progress = fill.getAttribute('data-progress') || '50';
            fill.style.width = `${progress}%`;
            obs.unobserve(fill);
          }
        });
      }, { threshold: 0.15 });

      meterFills.forEach(fill => observer.observe(fill));
    } else {
      // Fallback: animate immediately
      meterFills.forEach(fill => {
        const progress = fill.getAttribute('data-progress') || '50';
        fill.style.width = `${progress}%`;
      });
    }
  }

  // 3. Contact Form Submission Feedback (Demo Simulation)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      // Temporary loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        
        // Show success alert
        formFeedback.style.display = 'block';
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto hide after 6 seconds
        setTimeout(() => {
          formFeedback.style.display = 'none';
        }, 6000);
      }, 700);
    });
  }

  // 4. Download Resume Prompt Toast/Feedback
  const resumeDownloadBtn = document.getElementById('downloadResumeBtn');
  if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', () => {
      console.log('Downloading Sourabh Resume...');
    });
  }
});
