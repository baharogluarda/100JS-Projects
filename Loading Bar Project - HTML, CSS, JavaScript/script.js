(function () {
  let counter = document.getElementById("counter");
  let frontBarEl = document.getElementById("loading-bar-front");

  let progress = 0;

  const intervalId = setInterval(() => {
    if (progress >= 100) {
      clearInterval(intervalId);
    } else {
      progress++;
      counter.textContent = `${progress}%`;
      frontBarEl.style.width = `${progress}%`;
    }
  }, 20);
})();
