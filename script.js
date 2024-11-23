// Initialize after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  // Particles Background
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded');
  });

  // Set particles options
  particlesJS('particles-js', {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
        image: { src: 'img.svg', width: 100, height: 100 }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1 }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1 }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: false, mode: 'repulse' },
        onclick: { enable: false, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  // Text Animations
  const profilePic = document.querySelector('.profile-pic');
  const profileHeader = document.querySelector('h1');
  const profileRole = document.querySelector('.role');
  const profileBio = document.querySelector('.bio');
  const getInTouchHeader = document.querySelector('.get-in-touch h2');
  const getInTouchList = document.querySelector('.get-in-touch ul');

  // Check if elements exist before animating
  if (!profilePic || !profileHeader || !profileRole || !profileBio || !getInTouchHeader || !getInTouchList) {
    console.warn('Missing elements, skipping animations');
    return;
  }

  // Create sequential fade-in animations for all main content elements
  const timeline = gsap.timeline({ delay: 0.5 });
  timeline
    .from(profilePic, { duration: 1, y: 20, opacity: 0, ease: 'power2.inOut' })
    .from(profileHeader, { duration: 1, y: 20, opacity: 0, ease: 'power2.inOut' }, '-=0.5')
    .from(profileRole, { duration: 1, y: 20, opacity: 0, ease: 'power2.inOut' }, '-=0.5')
    .from(profileBio, { duration: 1, y: 20, opacity: 0, ease: 'power2.inOut' }, '-=0.5')
    .from(getInTouchHeader, { duration: 1, y: 20, opacity: 0, ease: 'power2.inOut' }, '-=0.5')
    .from(getInTouchList, { duration: 1, y: 20, opacity: 0, ease: 'power2.inOut', stagger: 0.2 }, '-=0.5');
});