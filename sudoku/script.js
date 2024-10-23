const playButton = document.getElementById('play-game');
const skill = document.getElementsByName('skill');
const infoSpot = document.getElementById('info');
let game = new Game("easy");
let difficulty = "easy";

playButton.addEventListener('click', () => {
    playButton.innerHTML = "Play Another";
    infoSpot.innerHTML = "<br>";
    game.startNewGame();
});

skill.forEach(radio => {
    radio.addEventListener('change', () => {
        difficulty = radio.value;
        if (game) {
            game.changeDifficulty(difficulty);
        }
    });
});

