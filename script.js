window.onload = function() {
  const movingHello = document.getElementById('moving-hello');
  const headerHello = document.getElementById('header-hello');
  const headerText = document.getElementById('header-text');
  const introScreen = document.getElementById('intro-screen');
  const mainHeader = document.getElementById('main-header');

  // Wait a bit before animating
  setTimeout(() => {
    // Get the position of headerHello relative to the viewport
    const helloRect = movingHello.getBoundingClientRect();
    const headerRect = headerHello.getBoundingClientRect();

    // Calculate the difference
    const dx = headerRect.left - helloRect.left;
    const dy = headerRect.top - helloRect.top;

    // Move the movingHello to the headerHello position
    movingHello.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px)`;

    // After the animation
    setTimeout(() => {
      // Hide the intro screen
      introScreen.classList.add('hide');
      // Set the headerHello text to "Hello!" (seamless, same style/size)
      headerHello.textContent = 'Hello!';
      // Fade in the rest of the header text
      headerText.style.opacity = '1';
    }, 1000); // Match the transition duration
  }, 1500);
};
