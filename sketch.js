var myForm;
var database;
var myPlayer,myGame,myGameState;

function setup(){
    createCanvas(500,500);
   

   database = firebase.database();
   console.log("database connected")
  myGame=new Game();
  myGame.getGameState();

   //myForm=new Form();
    
}

function draw(){
    background("white");

  //myForm.display();
  
    drawSprites();
}


