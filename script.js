// Initialize particles.js after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js with an elegant theme
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
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
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
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
  const mainContent = document.querySelector('main');
  const headerArea = document.querySelector('.header-area');
  const navLinks = document.querySelectorAll('.nav-links li');
  const sections = document.querySelectorAll('section');

  if (mainContent && headerArea && navLinks.length > 0 && sections.length > 0) {
    // Create fade-in animations for all main content elements
    gsap.from(mainContent, {
      duration: 1,
      opacity: 0,
      delay: 0.5,
      ease: 'power2.inOut'
    });

    // Create fade-in and slide up animations for header area
    gsap.from(headerArea, {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
      ease: 'power2.inOut'
    });

    // Create fade-in and slide up animations for navigation links
    navLinks.forEach((link, index) => {
      gsap.from(link, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        delay: 0.5 + (index * 0.1),
        ease: 'power2.inOut'
      });
    });

    // Create fade-in and slide up animations for sections
    sections.forEach((section, index) => {
      gsap.from(section, {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 1 + (index * 0.5),
        ease: 'power2.inOut'
      });
    });
  } else {
    console.warn('Missing elements. Animations not initialized.');
  }
});