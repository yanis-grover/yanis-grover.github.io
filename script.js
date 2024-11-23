// Initialize particles.js after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  // Particles.js initialization with elegant dark theme
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });

  // Check if main content elements exist before animating
  const mainContentElements = document.querySelectorAll('.text-content > *');
  if (mainContentElements.length === 0) {
    console.warn('Missing main content elements for animation');
    return;
  }

  // GSAP animation setup
  gsap.registerPlugin(ScrollTrigger);

  // Create sequential fade-in animations for all main content elements
  mainContentElements.forEach((element, index) => {
    gsap.from(element, {
      duration: 1,
      delay: index * 0.5,
      y: 20,
      autoAlpha: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reset'
      }
    });
  });

  // Check if profile picture element exists before animating
  const profilePicture = document.querySelector('.profile-pic-container img');
  if (profilePicture) {
    // GSAP animation for profile picture
    gsap.from(profilePicture, {
      duration: 1,
      delay: mainContentElements.length * 0.5,
      scale: 0.5,
      autoAlpha: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: profilePicture,
        start: 'top 80%',
        toggleActions: 'play none none reset'
      }
    });
  } else {
    console.warn('Missing profile picture element for animation');
  }

  // Initialize particles.js with an elegant dark theme
  particlesJS.particles.number.value = 80;
  particlesJS.particles.color.value = '#ffffff';
  particlesJS.particles.shape.type = 'circle';
  particlesJS.particles.size.value = 4;
  particlesJS.particles.size.random = true;
  particlesJS.particles.size.anim.speed = 2;
  particlesJS.particles.size.anim.sync = true;
  particlesJS.particles.line_linked.color = '#ffffff';
  particlesJS.particles.line_linked.width = 1;
  particlesJS.particles.line_linked.opacity = 0.5;
  particlesJS.particles.move.speed = 2;
  particlesJS.particles.move.direction = 'none';
  particlesJS.particles.move.random = true;
  particlesJS.particles.move.straight = false;
  particlesJS.particles.move.out_mode = 'out';
  particlesJS.interactivity.events.onhover.mode = 'grab';
  particlesJS.interactivity.events.onhover.speed = 5;
  particlesJS.interactivity.events.resize = true;
});