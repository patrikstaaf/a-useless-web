const beerButton = document.querySelector('.beer-button');
const beerCounter = document.querySelector('.beer-counter');
let count = 0;

const countDblclicks = () => {
  const beeraudio = new Audio('./audio/open-bottle.mp3');
  beeraudio.play();
  count++;
  countBeers();
};

const countBeers = () => {
  if (count === 1) {
    beerCounter.textContent = `Cheers for the ${count} beer!`;
  }
  if (count > 1) {
    beerCounter.textContent = `Cheers for the ${count} beers!`;
  }
};

beerButton.addEventListener('dblclick', countDblclicks);

// store in localstorage?

// display some svg beer, cheers?
