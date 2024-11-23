// Initialize particles.js with an elegant dark theme
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
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

// Initialize GSAP animations after DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check if elements exist before animating
  const mainContent = document.querySelector("main");
  const profileContainer = document.querySelector(".profile-container");
  const profilePic = document.querySelector(".profile-pic");
  const heading = document.querySelector("h1");
  const role = document.querySelector(".role");
  const bio = document.querySelector(".bio");
  const getInTouch = document.querySelector(".get-in-touch");

  if (!mainContent || !profileContainer || !profilePic || !heading || !role || !bio || !getInTouch) {
    console.warn("Missing elements. Animations will not be triggered.");
    return;
  }

  // Create sequential fade-in animations for all main content elements
  const timeline = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: "power1.out",
    },
  });

  timeline
    .from(profileContainer, { y: 20, opacity: 0 })
    .from(profilePic, { scale: 0.5, opacity: 0 }, "-=0.3")
    .from(heading, { y: 20, opacity: 0 })
    .from(role, { y: 20, opacity: 0 }, "-=0.2")
    .from(bio, { y: 20, opacity: 0 }, "-=0.2")
    .from(getInTouch, { y: 20, opacity: 0 }, "-=0.2");

  // Ensure smooth interaction between particles and animations
  const particlesCanvas = document.querySelector("canvas");
  if (particlesCanvas) {
    particlesCanvas.style.zIndex = "-1";
  }
});