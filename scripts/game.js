let game = {
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
    score: 0,
};


function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    showScore();
    addTurn();
}


function showScore() {
    document.getElementById('score').innerText = game.score;
}

/*this function must:
1)Clear the playerMoves array
2)Randomly add a button ID to the currentGame array
3)Call showTurns() function*/

function addTurn() {
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() *4 ))]);
   // showTurns();
}

module.exports = { game, newGame, showScore, addTurn };