// Initialize after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js with an elegant dark theme
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
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
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
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
                speed: 1,
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
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
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
    const elements = ['h1', 'h2', '.professional-subtitle', 'p', '.profile-pic-container'];
    const textContent = document.querySelector('.text-content');
    const profilePicContainer = document.querySelector('.profile-pic-container');

    if (!textContent) {
        console.warn('Missing text content element');
        return;
    }

    elements.forEach((element, index) => {
        const elem = textContent.querySelector(element);
        if (!elem) {
            console.warn(`Missing element: ${element}`);
            return;
        }

        // Create sequential fade-in animations for all main content elements
        gsap.from(elem, {
            duration: 1,
            opacity: 0,
            y: 20,
            ease: 'power2.out',
            delay: index * 0.5,
            onComplete: () => {
                // Ensure elements don't disappear after animation
                elem.style.opacity = 1;
                elem.style.transform = 'none';
            }
        });
    });

    // Animate profile picture container
    if (profilePicContainer) {
        gsap.from(profilePicContainer, {
            duration: 1,
            opacity: 0,
            scale: 0.5,
            ease: 'power2.out',
            delay: elements.length * 0.5,
            onComplete: () => {
                profilePicContainer.style.opacity = 1;
                profilePicContainer.style.transform = 'none';
            }
        });
    }
});