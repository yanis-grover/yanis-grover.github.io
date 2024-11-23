// Initialize after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js with an elegant dark theme
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#333'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#333',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

  // Check if elements exist before animating
  const textContent = document.querySelector('.text-content');
  const profilePicContainer = document.querySelector('.profile-pic-container');
  const navLinks = document.querySelectorAll('.nav a');
  const contentElements = document.querySelectorAll('.text-content h1, .text-content p, .text-content h2, .text-content ul');

  if (!textContent || !profilePicContainer || !navLinks || !contentElements) {
    console.warn('Missing elements. Animations will not be applied.');
    return;
  }

  // Create sequential fade-in animations for all main content elements
  const timeline = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: 'power1.out',
      opacity: 0,
    }
  });

  // Animate each element sequentially
  contentElements.forEach((element, index) => {
    timeline.to(element, { y: -10, opacity: 1 }, index * 0.5);
  });

  // Animate navigation links
  navLinks.forEach((link, index) => {
    timeline.to(link, { x: -10, opacity: 1 }, index * 0.5);
  });

  // Animate profile picture container
  timeline.to(profilePicContainer, { x: 10, opacity: 1 }, contentElements.length * 0.5);

  // Ensure elements don't disappear after animation
  timeline.to(contentElements, { opacity: 1, duration: 0 });
  timeline.to(navLinks, { opacity: 1, duration: 0 });
  timeline.to(profilePicContainer, { opacity: 1, duration: 0 });

  // Optimize animation performance
  gsap.config({ nullTargetWarn: false });
});