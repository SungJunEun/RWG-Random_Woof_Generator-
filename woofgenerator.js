const fetch = require("node-fetch");

async function woof(breed) {
    fetch(`https://www.reddit.com/r/${breed}/new/.json`)
      .then(response => response.json())
      .then(res => displaywoof(res))
      .then(console.log);
};

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function displaywoof(res) {
  while(true) {
          let number = generateRandomInteger(24);
          const data = res.data.children[number].data;
          if(data.post_hint === 'image') {
            return data.url;
            }
  }
}

woof("samoyeds"); // husky, shiba, germanshepards,...
