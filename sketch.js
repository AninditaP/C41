
var database;
var gameState=0;
var playerCount=0;
var form,player,game;
var allPlayers;
var canvas;
var car1,car2,car3,car4;
var cars;
var car_img,car2_img,car3_img,car4_img;
var track_img;
var gold_img,silver_img,bronze_img;
var finishedPlayers=0;
var passedFinish;

function preload(){
  
  car1_img=loadImage("../images/car1.png");
  car2_img=loadImage("../images/car2.png");
  car3_img=loadImage("../images/car3.png");
  car4_img=loadImage("../images/car4.png");
  track_img=loadImage("../images/track.jpg");
  gold_img=loadImage("../images/gold.png");
  silver_img=loadImage("../images/silver.png");
  bronze_img=loadImage("../images/bronze.png");


}
function setup(){  
    canvas = createCanvas(displayWidth-20,displayHeight-20);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
  background(200,200,255);

    if(playerCount===4 && finishedPlayers===0){
    game.update(1)
    }

    if(gameState===1){
        clear();
        game.play();
    }

    if(finishedPlayers===4){
     game.update(2);
    }
    if(gameState===2 && finishedPlayers===4){
      game.displayRanks();
    }
}


 