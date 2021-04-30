var player, form, game , playerCount
var gameState = 0 
var db 

function setup(){
    createCanvas(500,500);

    db = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
   

}
