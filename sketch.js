var question;
var question1, question2, question3;
var database;
var gameState = 0;
var game;
var allPlayers;
var form;
var playerCount;
var player;
var backgroundImage;
var yes, no;
var yesImage, noImage, question1Image, question2Image, question3Image;
var score;
var next, next2, next3;
var nextImage, nextImage2, nextImage3;
var currentQuestion = 0;
console.log("Beginning of sketch.");
var maxQuestion = 5;

function preload(){
   backgroundImage = loadImage("newbackground.png");
   yesImage = loadImage("Yes.png");
   noImage = loadImage("No.png");
   question1Image = loadImage("Question1.png");
   question2Image = loadImage("Question2.png");
   question3Image = loadImage("Question3.png");
   nextImage = loadImage("Next.png");
   nextImage2 = loadImage("Next2.png");
   nextImage3 = loadImage("Next3.png");
}

function setup(){
 console.log("Setup.");
 createCanvas(displayWidth, displayHeight);
 database = firebase.database();
 game = new Game;
 game.getGameState();
 game.start();
 console.log(currentQuestion);

}

 function draw(){
 background(backgroundImage);

 if(playerCount === 2){
    game.update(1);
    currentQuestion = currentQuestion + 1;
    game.displayQuestion(currentQuestion);
 }

}

