window.onload = function() {
  const introHello = document.getElementById('intro-hello');
  const headerHello = document.getElementById('header-hello');
  const headerText = document.getElementById('header-text');
  const introScreen = document.getElementById('intro-screen');

  setTimeout(() => {
    const introRect = introHello.getBoundingClientRect();
    const headerRect = headerHello.getBoundingClientRect();

    const dx = headerRect.left - introRect.left;
    const dy = headerRect.top - introRect.top;

    introHello.style.setProperty('--dx', dx + 'px');
    introHello.style.setProperty('--dy', dy + 'px');

    introHello.classList.add('linear-move');

    // After animation completes
    setTimeout(() => {
      introScreen.classList.add('hide');
      headerHello.textContent = 'Hello!';
      headerText.style.opacity = '1'; // Fade in the rest of the text
    }, 800); // Match animation duration
  }, 1500);
};
