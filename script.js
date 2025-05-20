window.onload = function() {
  const introHello = document.getElementById('intro-hello');
  const headerHello = document.getElementById('header-hello');
  const introScreen = document.getElementById('intro-screen');

  // Wait 1.5 seconds, then animate Hello! into the header
  setTimeout(() => {
    // Get positions
    const introRect = introHello.getBoundingClientRect();
    const headerRect = headerHello.getBoundingClientRect();

    // Calculate the distance to move
    const dx = headerRect.left - introRect.left;
    const dy = headerRect.top - introRect.top;

    // Set CSS variables for the animation
    introHello.style.setProperty('--dx', dx + 'px');
    introHello.style.setProperty('--dy', dy + 'px');

    // Start the animation
    introHello.classList.add('bounce-to-header');

    // After animation, hide intro, show header Hello!
    setTimeout(() => {
      introScreen.classList.add('hide');
      headerHello.textContent = 'Hello!';
    }, 850);
  }, 1500);
};
