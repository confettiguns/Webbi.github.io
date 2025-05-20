window.onload = function() {
  const hello = document.getElementById('hello');
  const words = document.querySelectorAll('.word');

  // Fade in "Hello."
  setTimeout(() => {
    hello.classList.add('fade-in');
  }, 100); // Small delay to trigger transition

  // Animate each word after "Hello." fades in and pauses
  let delay = 1800; // ms before first word appears

  words.forEach((word, i) => {
    setTimeout(() => {
      word.style.opacity = '1';
    }, delay + i * 400);
  });
};
