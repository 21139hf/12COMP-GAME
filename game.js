/*******************************************************/
// Blazing Blitz
// Written by Haider Faris 
/*******************************************************/


//Variables
var cooldown = 0;
var lives = 3;
 

const PLAYER_WIDTH = 25;
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
    
    rightPlatform = new Sprite(SCREEN_WIDTH, SCREEN_HEIGHT/2, SCREEN_WIDTH/3, 5, 'k');
    rightPlatform.color = 'black'
    rightPlatform.bounciness = 0;
    rightPlatform.friction = 0;
    
    middlePlatform1 = new Sprite(350, SCREEN_HEIGHT/2, 100, 5, 'k');
    middlePlatform1.color = 'black'
    middlePlatform1.bounciness = 0;
    middlePlatform1.friction = 0;
    
    middlePlatform2 = new Sprite(600, 350, 200, 5, 'k');
    middlePlatform2.color = 'black'
    middlePlatform2.bounciness = 0;
    middlePlatform2.friction = 0;
    
    middlePlatform3 = new Sprite(600, 50, 125, 5, 'k');
    middlePlatform3.color = 'black'
    middlePlatform3.bounciness = 0;
    middlePlatform3.friction = 0;
    
    topPlatform = new Sprite(0, -100, SCREEN_WIDTH, 5, 'k');
    topPlatform.color = 'black'
    topPlatform.bounciness = 0;
    topPlatform.friction = 0;
    
    //Walls
    wallLH  = new Sprite(0, height/8, 8, height*5, 'k');
    wallLH.color = 'black';
    wallLH.bounciness = 0;
    wallLH.friction = 0;
    
    wallRH  = new Sprite(width, height/8, 8, height*5, 'k');
    wallRH.color = 'black';
    wallRH.bounciness = 0;
    wallRH.friction = 0;
    
    //wallTop = new Sprite(width/2, 0, width, 8, 'k');
    //wallTop.color = 'black';
    //wallTop.bounciness = 0;
    //wallTop.friction = 0;
  
    //Player
    player = new Sprite(100,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_WIDTH, 'd');
    player.bounciness = 0;
    player.addImage(img);

    trap = new Sprite(200, -100, 150, 80, 'k');
    trap.bounciness = 0;
    trap.addImage(img3);
    player.collides(trap, playerHitTrap);


    //Keyboard imputs
    document.addEventListener("keydown", function(event) {
        if (event.code === 'ArrowLeft') {
            player.vel.x = -5;
        }
        else if (event.code === 'ArrowRight') {
            player.vel.x = 5; 
        }
        else if (event.code === 'ArrowUp' & cooldown > 0.45) {
            cooldown = cooldown - cooldown;
            player.vel.y = -30; 
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

function preload() {
    img = loadImage('/images/face.png');
    img2 = loadImage('images/heart.png');
    img3 = loadImage('images/spikes.png');
    
}

function draw(){
    background('grey')
    img.resize(PLAYER_WIDTH, PLAYER_WIDTH);
    img3.resize(200, 300);
    camera.y = player.y;
    cooldown = cooldown + 0.01;
    console.log(cooldown);
    
    for (let i = 0; i<lives;i++){
        image(img2, 35*i, 0);
        
    }
}

function playerHitTrap(_player,_trap){
    lives--
    //Dead code
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
