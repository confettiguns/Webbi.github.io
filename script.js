window.onload = function() {
  // Wait 2 seconds, then animate "Hello!" up
  setTimeout(() => {
    document.getElementById('intro-text').classList.add('fly-up');
  }, 2000);

  // After animation, hide intro and show header
  setTimeout(() => {
    document.getElementById('intro-screen').classList.add('hidden');
    const header = document.getElementById('main-header');
    header.classList.remove('hidden');
    setTimeout(() => {
      header.classList.add('visible');
    }, 70); // Small delay for fade-in effect
  }, 2800);
};
