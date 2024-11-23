// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js
  particlesJS.load('particles-js', 'particles.json', function () {
    console.log('particles.js loaded - callback');
  });

  // Define particles.json configuration
  const particlesConfig = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  // Check if elements exist before animating
  function checkElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      console.warn(`Element not found: ${selector}`);
      return null;
    }
    return element;
  }

  // Define elements for animation
  const profilePic = checkElement('.profile-pic');
  const profileHeading = checkElement('h1');
  const profileRole = checkElement('.role');
  const profileText = checkElement('.profile p');
  const getInTouchHeading = checkElement('.get-in-touch h2');
  const getInTouchList = checkElement('.get-in-touch ul');

  // Create sequential fade-in animations using GSAP
  const tl = gsap.timeline({
    delay: 0.5,
    ease: 'power2.inOut'
  });

  tl.to(profilePic, {
    y: -20,
    opacity: 1,
    duration: 0.5
  });

  tl.to(profileHeading, {
    y: -20,
    opacity: 1,
    duration: 0.5
  }, '-=0.2');

  tl.to(profileRole, {
    y: -20,
    opacity: 1,
    duration: 0.5
  }, '-=0.2');

  tl.to(profileText, {
    y: -20,
    opacity: 1,
    duration: 0.5
  }, '-=0.2');

  tl.to(getInTouchHeading, {
    y: -20,
    opacity: 1,
    duration: 0.5
  }, '-=0.2');

  tl.to(getInTouchList, {
    y: -20,
    opacity: 1,
    duration: 0.5
  }, '-=0.2');

  // Initialize particles.js with defined configuration
  particlesJS('particles-js', particlesConfig);
});