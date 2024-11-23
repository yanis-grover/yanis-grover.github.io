// Initialize after DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
  // Particles Background
  particlesJS.load("particles-js", "particles.json", function () {
    console.log("particles.json loaded");
  });

  // Set particles.json configuration
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
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
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
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

  // Text Animations
  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    const timeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    timeline.from(".profile-pic", { y: 50, opacity: 0, duration: 0.5 });
    timeline.from("h1", { y: 30, opacity: 0, duration: 0.5 }, "-=0.2");
    timeline.from(".role", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3");
    timeline.from("section", { y: 30, opacity: 0, duration: 0.4, stagger: 0.2 }, "-=0.2");

    timeline.from(".nav-bar a", { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, "-=1");
  } else {
    console.warn("Missing .main-content element");
  }

  // Error Handling
  const navBar = document.querySelector(".nav-bar");
  if (!navBar) {
    console.warn("Missing .nav-bar element");
  }

  const particlesContainer = document.querySelector("#particles-js");
  if (!particlesContainer) {
    console.warn("Missing #particles-js element");
  }
});