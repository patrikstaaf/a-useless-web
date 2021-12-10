const splashScreen = document.querySelector('.splash-screen');
const splashSiteName = document.querySelector('.splash-site-name');
const splashSpan = document.querySelectorAll('.splash-span');

window.addEventListener('DOMContentLoaded', () => {
  // Trigger nested functions when the DOM has been fully loaded
  setTimeout(() => {
    // Set timer for animation
    splashSpan.forEach((span, idx) => {
      // Nodelist index (console.log(splashSpan)), apply animation seperatly, foreach through the spans
      setTimeout(() => {
        span.classList.add('active');
      }, (idx + 1) * 400); // Add a delay for first node, 1 sec * 400ms, loop through
    });

    setTimeout(() => {
      // Remove the active class
      splashSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50);
      });
    }, 2500); // How long it will stay on page before fade up

    setTimeout(() => {
      // Animation for the splash screen to fade up
      splashScreen.style.top = '-100vh';
    }, 2800);
  });
});
