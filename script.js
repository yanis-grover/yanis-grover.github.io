// Initialize after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Particles Background
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded - callback');
    });

    // Initialize particles.json
    particlesJS.particles = {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
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
            color: '#ffffff',
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
    };

    // Text Animations
    const mainContentElements = document.querySelectorAll('main > *');
    if (mainContentElements.length === 0) {
        console.warn('No main content elements found');
        return;
    }

    const tl = gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: 'power2.inOut'
        }
    });

    mainContentElements.forEach((element, index) => {
        if (element.tagName === 'H1' || element.tagName === 'P' || element.tagName === 'SECTION') {
            tl.from(element, {
                y: 20,
                opacity: 0
            }, index * 0.5);
        }
    });

    // Error Handling
    if (!window.particlesJS) {
        console.error('particles.js not loaded');
    }

    if (!window.gsap) {
        console.error('GSAP not loaded');
    }
});