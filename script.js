window.onload = function() {
  // Fade in "Hello."
  const hello = document.getElementById('hello');
  hello.classList.add('fade-in');

  // Animate each word after a pause
  const words = document.querySelectorAll('.word');
  let delay = 1800; // ms before first word appears

  words.forEach((word, i) => {
    setTimeout(() => {
      word.style.opacity = '1';
    }, delay + i * 400); // 400ms between each word
  });
};
