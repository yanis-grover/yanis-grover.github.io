// Initialize after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Particles Background
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });

    // Set particles options
    particlesJS('particles-js', {
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
                    "enable": true, // Changed from false to true
                    "speed": 1,
                    "opacity_min": 0.1
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true, // Changed from false to true
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
                "speed": 6,
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
                    "enable": true,
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
    });

    // Text Animations
    const mainContentElements = document.querySelectorAll('main *');
    const tl = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2
        }
    });

    mainContentElements.forEach((element) => {
        if (element.tagName !== 'MAIN') {
            tl.from(element, {
                y: 20,
                opacity: 0
            });
        }
    });

    // Add animation functionality to elements
    const animatableElements = document.querySelectorAll('.animatable');
    animatableElements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            gsap.to(element, {
                duration: 0.5,
                scale: 1.1,
                ease: 'power2.inOut'
            });
        });

        element.addEventListener('mouseout', () => {
            gsap.to(element, {
                duration: 0.5,
                scale: 1,
                ease: 'power2.inOut'
            });
        });
    });

    // Error Handling
    if (!mainContentElements.length) {
        console.warn('No main content elements found.');
    }

    if (!animatableElements.length) {
        console.warn('No animatable elements found.');
    }
});