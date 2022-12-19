/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore, addTurn } = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

/*testing our newGame function -> it should :
1) Reset the score to zero
2) Clear the playerMoves array
3) Clear the currentGame array */

describe("newGame works correctly", () => {
   
    beforeAll(() => {
         //setting up the game with some fake values
        game.score = 42;
        //we are going to write some fake datas also the 2) and 3)
        game.playerMoves = ['button1', 'button2'];
        game.currentGame = ['button3', 'button4'];
        document.getElementById('score').innerText = '42'; //adding this to check if newGame will reset it to zero
        newGame();
    });
    test("should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    /* we used the below to test showScore...we are now removing it to check addTurn
    test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    }); */ 
    test("should be one move in the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    
    test("should clear playerMoves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should display 0 for the element with id of score", () => {
        expect(document.getElementById('score').innerText).toEqual(0);
    });
});

/*the newGame function resets everything, but it doesn't start a new game.
We must create new functions! -> showScore and addTurn*/