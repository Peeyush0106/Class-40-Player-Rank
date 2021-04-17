var database;

// Important contents of the Game
var form, game, player;

var playerCount = 0;

var gameState = 0;

var allPlayers;

var car1, car2, car3, car4;
var cars;

var car1Img, car2Img, car3Img, car4Img, trackImg;
var ranks;

function preload() {
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");
}

function setup() {
    var canvas = createCanvas(displayWidth, displayHeight);
    canvas.position(-210, -100);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    background("red");
    if (playerCount === 4) {
        // gameState = 1;
        game.updateState(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if (gameState === 2) {
        clear();
        background("blue");
        game.end();
    }
}