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
    
    //Ground 
    ground = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 5, 'k');
    ground.color = 'black'
    ground.bounciness = 0;
    ground.friction = 0;
    
    // Platforms
    startPlatform = new Sprite(0, SCREEN_HEIGHT/1.5, SCREEN_WIDTH/4, 5, 'k');
    startPlatform.color = 'black'
    startPlatform.bounciness = 0;
    startPlatform.friction = 0;
    
    rightPlatform = new Sprite(SCREEN_WIDTH, SCREEN_HEIGHT/2, SCREEN_WIDTH/4, 5, 'k');
    rightPlatform.color = 'black'
    rightPlatform.bounciness = 0;
    rightPlatform.friction = 0;
    
    middlePlatform1 = new Sprite(350, SCREEN_HEIGHT/2, 100, 5, 'k');
    middlePlatform1.color = 'black'
    middlePlatform1.bounciness = 0;
    middlePlatform1.friction = 0;
    
    middlePlatform2 = new Sprite(600, 350, 100, 5, 'k');
    middlePlatform2.color = 'black'
    middlePlatform2.bounciness = 0;
    middlePlatform2.friction = 0;
    
    //Walls
    wallLH  = new Sprite(0, height/8, 8, height*3, 'k');
    wallLH.color = 'black';
    wallLH.bounciness = 0;
    wallLH.friction = 0;
    wallRH  = new Sprite(width, height/8, 8, height*3, 'k');
    wallRH.color = 'black';
    wallRH.bounciness = 0;
    wallRH.friction = 0;
    
    //wallTop = new Sprite(width/2, 0, width, 8, 'k');
    //wallTop.color = 'black';
    //wallTop.bounciness = 0;
    //wallTop.friction = 0;
  
    //Player
    player = new Sprite(100,  SCREEN_HEIGHT/2, 25, 25, 'd');
    player.bounciness = 0;
    img = loadImage('/images/face.png');
    player.addImage(img);


    //Keyboard imputs
    document.addEventListener("keydown", function(event) {
        if (event.code === 'ArrowLeft') {
            player.vel.x = -5;
        }
        else if (event.code === 'ArrowRight') {
            player.vel.x = 5; 
        }
        else if (event.code === 'ArrowUp') {
            player.vel.y = -25; 
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
    img.resize(25, 25);
    camera.y = player.y;
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
