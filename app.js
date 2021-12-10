const jokeText = document.querySelector('.joke-text');
const jokeButton = document.querySelector('.joke-button');
let i = 0;
const text = '';

const newJoke = (joke) => {
  // reset idx
  i = 0;
  typewriter(joke);
};

const typewriter = (text) => {
  if (i === 0) jokeText.textContent = '';
  if (i < text.length) {
    jokeText.textContent += text.charAt(i);
    const audio = new Audio('./audio/softkey.mp3');
    audio.play();
    i++;
    setTimeout(() => {
      typewriter(text);
    }, Math.floor(Math.random() * 300) + 100);
  }
};

const getJokes = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      newJoke(data.joke);
    });
};

jokeButton.addEventListener('click', getJokes);
