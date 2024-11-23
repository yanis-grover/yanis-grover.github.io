// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Initialize particles.js with an elegant dark theme
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded');
  });

  // Create particles.json configuration file content
  // You can customize this to your liking
  // Make sure to create a particles.json file in the same directory as your HTML file
  // and paste the following content into it
  // {
  //   "particles": {
  //     "number": {
  //       "value": 80,
  //       "density": {
  //         "enable": true,
  //         "value_area": 800
  //       }
  //     },
  //     "color": {
  //       "value": "#ffffff"
  //     },
  //     "shape": {
  //       "type": "circle",
  //       "stroke": {
  //         "width": 0,
  //         "color": "#000000"
  //       },
  //       "polygon": {
  //         "nb_sides": 5
  //       },
  //       "image": {
  //         "src": "img/github.svg",
  //         "width": 100,
  //         "height": 100
  //       }
  //     },
  //     "opacity": {
  //       "value": 0.5,
  //       "random": false,
  //       "anim": {
  //         "enable": false,
  //         "speed": 1,
  //         "opacity_min": 0.1,
  //         "sync": false
  //       }
  //     },
  //     "size": {
  //       "value": 3,
  //       "random": true,
  //       "anim": {
  //         "enable": false,
  //         "speed": 40,
  //         "size_min": 0.1,
  //         "sync": false
  //       }
  //     },
  //     "line_linked": {
  //       "enable": true,
  //       "distance": 150,
  //       "color": "#ffffff",
  //       "opacity": 0.4,
  //       "width": 1
  //     },
  //     "move": {
  //       "enable": true,
  //       "speed": 2,
  //       "direction": "none",
  //       "random": false,
  //       "straight": false,
  //       "out_mode": "out",
  //       "bounce": false,
  //       "attract": {
  //         "enable": false,
  //         "rotateX": 600,
  //         "rotateY": 1200
  //       }
  //     }
  //   },
  //   "interactivity": {
  //     "detect_on": "canvas",
  //     "events": {
  //       "onhover": {
  //         "enable": true,
  //         "mode": "repulse"
  //       },
  //       "onclick": {
  //         "enable": true,
  //         "mode": "push"
  //       },
  //       "resize": true
  //     },
  //     "modes": {
  //       "grab": {
  //         "distance": 400,
  //         "line_linked": {
  //           "opacity": 1
  //         }
  //       },
  //       "bubble": {
  //         "distance": 400,
  //         "size": 40,
  //         "duration": 2,
  //         "opacity": 8,
  //         "speed": 3
  //       },
  //       "repulse": {
  //         "distance": 200,
  //         "duration": 0.4
  //       },
  //       "push": {
  //         "particles_nb": 4
  //       },
  //       "remove": {
  //         "particles_nb": 2
  //       }
  //     }
  //   },
  //   "retina_detect": true
  // }

  // Use GSAP for animations
  gsap.registerPlugin(ScrollTrigger);

  // Create sequential fade-in animations for all main content elements
  const elements = document.querySelectorAll('.profile h1, .profile .role, .profile .bio, .get-in-touch h2, .get-in-touch ul');
  elements.forEach((element, index) => {
    if (element) {
      gsap.from(element, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.2,
        ease: 'power2.out',
      });
    } else {
      console.warn(`Missing element: ${index}`);
    }
  });
});