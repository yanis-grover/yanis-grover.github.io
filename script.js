// Initialize particles.js with an elegant theme
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Create particles.json file with the following content
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
//         "opacity_min": 0.1
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1
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
//       "speed": 6,
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

// Initialize GSAP animations after DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if elements exist before animating
    const profilePicContainer = document.querySelector('.profile-pic-container');
    const profilePic = document.querySelector('.profile-pic');
    const mainHeading = document.querySelector('h1');
    const role = document.querySelector('.role');
    const aboutMeSection = document.querySelector('#about-me');
    const getInTouchSection = document.querySelector('#get-in-touch');

    if (!profilePicContainer || !profilePic || !mainHeading || !role || !aboutMeSection || !getInTouchSection) {
        console.warn('Missing elements. Animations will not be executed.');
        return;
    }

    // Create sequential fade-in animations for all main content elements
    const timeline = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.5
        }
    });

    timeline
        .from(profilePicContainer, { y: 50, opacity: 0 })
        .from(profilePic, { scale: 0.5, opacity: 0 }, '<')
        .from(mainHeading, { y: 50, opacity: 0 }, '<')
        .from(role, { y: 50, opacity: 0 }, '<')
        .from(aboutMeSection, { y: 50, opacity: 0 }, '<')
        .from(getInTouchSection, { y: 50, opacity: 0 }, '<');

    // Optimize animation performance
    gsap.config({ nullTargetWarn: false });
});