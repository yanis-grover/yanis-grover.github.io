// Initialize after DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  // Particles Background
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded');
  });

  // Fallback for particles.json not found
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.json loaded');
  }, function() {
    console.error('particles.json not found');
  });

  // Text Animations using GSAP
  const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power2.inOut' } });

  // Check if elements exist before animating
  const profilePic = document.querySelector('.profile-pic');
  const mainHeading = document.querySelector('main h1');
  const mainParagraphs = document.querySelectorAll('main p');
  const getInTouchHeading = document.querySelector('#get-in-touch h2');
  const getInTouchListItems = document.querySelectorAll('#get-in-touch ul li');

  // Add animations to timeline
  if (profilePic) {
    tl.from(profilePic, { y: 20, opacity: 0 });
  } else {
    console.warn('Profile picture element not found');
  }

  if (mainHeading) {
    tl.from(mainHeading, { y: 20, opacity: 0 }, '<');
  } else {
    console.warn('Main heading element not found');
  }

  mainParagraphs.forEach((paragraph, index) => {
    if (paragraph) {
      tl.from(paragraph, { y: 20, opacity: 0 }, `<${index * 0.1}`);
    } else {
      console.warn(`Main paragraph ${index + 1} element not found`);
    }
  });

  if (getInTouchHeading) {
    tl.from(getInTouchHeading, { y: 20, opacity: 0 }, '<');
  } else {
    console.warn('Get in touch heading element not found');
  }

  getInTouchListItems.forEach((listItem, index) => {
    if (listItem) {
      tl.from(listItem, { y: 20, opacity: 0 }, `<${index * 0.1}`);
    } else {
      console.warn(`Get in touch list item ${index + 1} element not found`);
    }
  });
});