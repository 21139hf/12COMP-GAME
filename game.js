/*******************************************************/
// Blazing Blitz
// Written by Haider Faris 
/*******************************************************/


//Variables


const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;
/*******************************************************/
// setup()
/*******************************************************/
function setup(){
    console.log("setup: ");
    cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    world.gravity.y = 80;
    
    wallLH  = new Sprite(0, height/2, 8, height, 'k');
    wallLH.color = 'black';
    wallLH.bounciness = 0;
    wallLH.friction = 0;
    
    wallRH  = new Sprite(width, height/2, 8, height, 'k');
    wallRH.color = 'black';
    wallRH.bounciness = 0;
    wallRH.friction = 0;
    
    wallTop = new Sprite(width/2, 0, width, 8, 'k');
    wallTop.color = 'black';
    wallTop.bounciness = 0;
    wallTop.friction = 0;
  
    player = new Sprite(100,  SCREEN_HEIGHT/2, 25, 25, 'd');
    player.bounciness = 0;
    player.color = 'lightblue';
    
    document.addEventListener("keydown", function(event) {
        if (event.code === 'ArrowLeft') {
            player.vel.x = -5;
        }
        else if (event.code === 'ArrowRight') {
            player.vel.x = 5; 
        }
        else if (event.code === 'ArrowUp') {
            player.vel.y = -20; 
        }
});

    document.addEventListener("keyup", function(event) {
        if (event.code === 'ArrowLeft') {
            player.vel.x = 0;
        // Set sprite's velocity to the left
        }
        else if (event.code === 'ArrowRight') {
            player.vel.x = 0; 
        }
    });
}

   
/*******************************************************/
// draw()
/*******************************************************/
function draw(){
      background('grey')

    
}

function startScreen(){

}

function gameScreen(){
       background('grey')
}

function endScreen(){
    background('white')
}

function resetGame(){
    background('white')
}

/*******************************************************/
//  END OF APP
/*******************************************************/
