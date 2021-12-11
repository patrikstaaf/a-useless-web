const jokeText = document.querySelector('.joke-text');
const jokeButton = document.querySelector('.joke-button');
// const text = '';

const getJokes = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      newJoke(data.joke);
    });
};

// const storeJokes = (num) => {
//   let arrayJokes = [];
//   for (let i = 0; i < num; i++) {
//     arrayJokes.push(i);
//   }
//   // return arrayJokes;
//   console.log(arrayJokes);
// };

const newJoke = (joke) => {
  // Reset index
  i = 0;
  typewriter(joke); // Initiate a new joke
};

const typewriter = (text) => {
  // console.log(typewriter);
  if (i === 0) jokeText.textContent = ''; // Clear the html so it doesnt just add a joke after an already typed ine
  if (i < text.length) {
    // Compare i to the length of the fetched joke string and if it's greater, continue below
    jokeText.textContent += text.charAt(i); // Add each character of the fetched joke string for each iteration
    const audio = new Audio('./audio/softkey.mp3');
    audio.play();
    i++;
    timeout(text);
    jokeButton.removeEventListener('click', getJokes); // Remove eventlistener so the button can't be clicked before the full fetched joked is typed
    // const timeout = setTimeout(() => {
    //   typewriter(text);
    // }, Math.floor(Math.random() * 300) + 100); // Randomize the time intervals between the key clicks to make it sound more real (instead of a constant time interval)
  }
  if (i === text.length) {
    // Once all typed, make it possible to click the button active eventlistener
    jokeButton.addEventListener('click', getJokes);
  }
};

const timeout = (text) => {
  setTimeout(() => {
    typewriter(text);
  }, Math.floor(Math.random() * 300) + 100);
};

// const clearTimer = (timeout) => {
//   clearTimeout(timeout);
// };

jokeButton.addEventListener('click', getJokes);
