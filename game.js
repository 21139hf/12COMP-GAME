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
    player = new Sprite(100,  SCREEN_HEIGHT/2, 10, 10, 'd');
      document.addEventListener("keydown", function(event) {

  if (event.code === 'ArrowLeft') {
player.vel.x = -1;
  }
  else if (event.code === 'ArrowRight') {
player.vel.x = 1; 
}
else if (event.code === 'ArrowDown') {
player.vel.y = 1; 
}
else if (event.code === 'ArrowUp') {
player.vel.y = -1; 
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
else if (event.code === 'ArrowDown') {
player.vel.y = 0; 
}
else if (event.code === 'ArrowUp') {
player.vel.y = 0; 
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
    
}

function endScreen(){
    
}

function resetGame(){
    
}

/*******************************************************/
//  END OF APP
/*******************************************************/
