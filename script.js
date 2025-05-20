window.onload = function() {
  const helloText = document.getElementById('hello-text');
  const headerText = document.getElementById('header-text');
  const introOverlay = document.getElementById('intro-overlay');

  headerText.style.opacity = '0';
  introOverlay.style.opacity = '1'; // Ensure overlay is visible

  // Center "Hello!" initially
  function centerHello() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const helloRect = helloText.getBoundingClientRect();

    const dx = (vw / 2) - (helloRect.left + helloRect.width / 2);
    const dy = (vh / 2) - (helloRect.top + helloRect.height / 2);

    helloText.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  // Animate "Hello!" back to header position
  function moveHelloToHeader() {
    helloText.style.transform = `translate(0, 0)`;
  }

  // Fade in rest of the text
  function fadeInHeaderText() {
    headerText.style.opacity = '1';
  }

  // Fade out overlay
  function hideOverlay() {
    introOverlay.style.opacity = '0';
    setTimeout(() => {
      introOverlay.style.display = 'none';
    }, 600); // Match transition duration
  }

  setTimeout(() => {
    centerHello();

    setTimeout(() => {
      moveHelloToHeader();

      setTimeout(() => {
        hideOverlay();
        fadeInHeaderText();
      }, 1000);
    }, 1300);
  }, 100);

  window.addEventListener('resize', () => {
    if (introOverlay.style.opacity !== '0') centerHello();
  });
};
