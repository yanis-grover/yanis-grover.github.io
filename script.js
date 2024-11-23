// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js with an elegant dark theme
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#1a1d23',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#1a1d23',
        opacity: 0.4,
        width: 1,
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
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });

  // Check if elements exist before animating
  const textElements = document.querySelectorAll('.text-content h1, .text-content h2, .text-content p');
  if (textElements.length === 0) {
    console.warn('No text elements found for animation.');
    return;
  }

  // Create sequential fade-in animations for all main content elements
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.inOut',
    },
  });

  textElements.forEach((element, index) => {
    tl.from(element, {
      y: 20,
      autoAlpha: 0,
      delay: index * 0.2,
    });
  });

  // Optimize animation performance
  tl.play();
});