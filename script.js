window.onload = function() {
  const hello = document.getElementById('hello');
  const words = document.querySelectorAll('.word');

  // Add fade-in class to "Hello." after a short delay
  setTimeout(() => {
    hello.classList.add('fade-in');
  }, 100);

  // Fade in each word in the sentence one by one after "Hello." appears
  let delay = 1800; // delay before first word appears (ms)
  words.forEach((word, i) => {
    setTimeout(() => {
      word.style.opacity = '1';
    }, delay + i * 400);
  });
};
