const input = document.getElementById("inputText");
const message = document.getElementById("responseText");
const new_game = document.getElementById("new-game-btn");
const guess = document.getElementById("guess-btn");
const image = document.getElementById("driverImage");

const drivers = [
  { name: "lewis hamilton", team: "ferrari", number: 44, image: "images/hamilton.webp" },
  { name: "charles leclerc", team: "ferrari", number: 16, image: "images/leclerc.webp" },

  { name: "lando norris", team: "mclaren", number: 1, image: "images/norris.webp" },
  { name: "oscar piastri", team: "mclaren", number: 81, image: "images/piastri.webp" },

  { name: "george russell", team: "mercedes", number: 63, image: "images/russell.webp" },
  { name: "kimi antonelli", team: "mercedes", number: 12, image: "images/antonelli.webp" },

  { name: "max verstappen", team: "red bull", number: 3, image: "images/verstappen.webp" },
  { name: "isack hadjar", team: "red bull", number: 6, image: "images/hadjar.webp" },

  { name: "fernando alonso", team: "aston martin", number: 14, image: "images/alonso.webp" },
  { name: "lance stroll", team: "aston martin", number: 18, image: "images/stroll.webp" },

  { name: "pierre gasly", team: "alpine", number: 10, image: "images/gasly.webp" },
  { name: "franco colapinto", team: "alpine", number: 43, image: "images/colapinto.webp" },

  { name: "esteban ocon", team: "haas", number: 31, image: "images/ocon.webp" },
  { name: "oliver bearman", team: "haas", number: 87, image: "images/bearman.webp" },

  { name: "liam lawson", team: "racing bulls", number: 30, image: "images/lawson.webp" },
  { name: "arvid lindblad", team: "racing bulls", number: 41, image: "images/lindblad.webp" },

  { name: "nico hulkenberg", team: "audi", number: 27, image: "images/hulkenberg.webp" },
  { name: "gabriel bortoleto", team: "audi", number: 5, image: "images/bortoleto.webp" },

  { name: "sergio perez", team: "cadillac", number: 11, image: "images/perez.webp" },
  { name: "valtteri bottas", team: "cadillac", number: 77, image: "images/bottas.webp" },

  { name: "alexander albon", team: "williams", number: 23, image: "images/albon.webp" },
  { name: "carlos sainz", team: "williams", number: 55, image: "images/sainz.webp" }
];

let lives = 5;
function updateLives() {
    const livesDisplay = document.getElementById('lives');
    livesDisplay.textContent = lives;
};

updateLives();

let gameOver = false;
//console.log("Lives: " + lives);

let answer = "";
answer = drivers[Math.floor(Math.random() * drivers.length)];
//console.log(answer);

input.addEventListener("keydown", (e) => {
    if (gameOver) {return;} // using a flag to signal end of game

    if (e.key === "Enter") {
        const userInput = input.value.trim().toLowerCase();

        if (userInput === "") {
            message.textContent = "Please enter a name.";

        } else if (answer.name === userInput) {
            message.textContent = `You're correct. The Driver was ${answer.name.toUpperCase()}`;

            image.src = answer.image;
            image.style.display = "block";

            input.disabled = true; // prevent user from input, self-explanatory
            gameOver = true;

        } else {
            message.textContent = "You're wrong. Try again!";
            lives -= 1;
            updateLives();
            console.log("Lives: " + lives);

            if (lives === 0) {
                message.textContent = "You Lost. The Driver was " + answer.name.toUpperCase();

                image.src = answer.image;
                image.style.display = "block";

                input.disabled = true;
                gameOver = true;

            } else if (lives === 3) {
                message.textContent = "Hint: " + answer.team;
            } else if (lives === 1) {
                message.textContent = "Hint: " + answer.number;
            }
        }

        input.value = "";
    }
});

guess.addEventListener('click', () => {
    if (gameOver) {return;} // using a flag to signal end of game

    const userInput = input.value.trim().toLowerCase();

    if (userInput === "") {
        message.textContent = "Please enter a name.";

    } else if (answer.name === userInput) {
        message.textContent = `You're correct. The Driver was ${answer.name.toUpperCase()}`;

        image.src = answer.image;
        image.style.display = "block";

        input.disabled = true; // prevent user from input, self-explanatory
        gameOver = true;

    } else {
        message.textContent = "You're wrong. Try again!";
        lives -= 1;
        updateLives();

        console.log("Lives: " + lives);

        if (lives === 0) {
            message.textContent = "You Lost. The Driver was " + answer.name.toUpperCase();

            image.src = answer.image;
            image.style.display = "block";

            input.disabled = true;
            gameOver = true;

        } else if (lives === 3) {
            message.textContent = "Hint: " + answer.team;
        } else if (lives === 1) {
            message.textContent = "Hint: " + answer.number;
        }
    }

    input.value = "";
});

function newGame() {
    lives = 5;
    updateLives();

    gameOver = false;
    answer = drivers[Math.floor(Math.random() * drivers.length)];

    message.textContent = "";
    input.value = "";
    image.style.display = "none";
    image.src = "";
    input.disabled = false;
    
};

new_game.addEventListener('click', newGame);