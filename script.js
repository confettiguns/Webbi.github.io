window.onload = function() {
  const helloText = document.getElementById('hello-text');
  const helloWrapper = document.getElementById('hello-wrapper');
  const headerText = document.getElementById('header-text');
  const introOverlay = document.getElementById('intro-overlay');
  const header = document.getElementById('main-header');

  // Step 1: Place "Hello!" in the center of the screen using transform
  function centerHello() {
    // Get viewport center
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Get the position of helloText in the header
    const helloRect = helloText.getBoundingClientRect();

    // Calculate the offset to center of screen
    const dx = (vw / 2) - (helloRect.left + helloRect.width / 2);
    const dy = (vh / 2) - (helloRect.top + helloRect.height / 2);

    // Move the text to the center
    helloText.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  // Step 2: Animate "Hello!" back to its header position
  function moveHelloToHeader() {
    helloText.style.transform = `translate(0, 0)`;
  }

  // Step 3: Fade in the rest of the sentence
  function fadeInHeaderText() {
    headerText.style.opacity = '1';
  }

  // Step 4: Fade out the overlay
  function hideOverlay() {
    introOverlay.classList.add('hide');
  }

  // Initial setup
  headerText.style.opacity = '0';
  setTimeout(() => {
    centerHello();
    // Show overlay for intro
    introOverlay.style.opacity = '1';
    // Animate "Hello!" to header after pause
    setTimeout(() => {
      moveHelloToHeader();
      // Fade out overlay just as "Hello!" arrives
      setTimeout(() => {
        hideOverlay();
        fadeInHeaderText();
      }, 1000); // Match the transition duration
    }, 1300); // How long "Hello!" stays in center
  }, 100);

  // Responsiveness: recenter on resize if still in intro
  window.addEventListener('resize', () => {
    if (introOverlay.style.opacity !== '0') centerHello();
  });
};
