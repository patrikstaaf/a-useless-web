const beerButton = document.querySelector('.beer-button');
const beerCounter = document.querySelector('.beer-counter');
const beerVideo = document.querySelector('.beer-video');
let count = 0;

const countDblclicks = () => {
  // When dblclicked, do the following below
  displayVideo();
  const beeraudio = new Audio('./audio/open-can.mp3');
  beeraudio.play();
  count++; // Increment the variable count for each click
  countBeers();
};

const countBeers = () => {
  // Display the amount of "beer donations" and display correct grammar, lol...
  if (count === 1) {
    beerCounter.textContent = `Cheers for the ${count} beer!`;
  }
  if (count > 1) {
    beerCounter.textContent = `Cheers for the ${count} beers!`;
  }
};

const displayVideo = () => {
  // Make the video visible and apply its styling
  beerVideo.classList.add('active');
};

beerButton.addEventListener('dblclick', countDblclicks);
