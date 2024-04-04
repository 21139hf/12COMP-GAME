/*******************************************************/
// Blazing Blitz
// Written by Haider Faris 
/*******************************************************/


//Variables
var cooldown = 0;
var lives = 3;
var newPlat;
    

const PLAYER_WIDTH = 25;
const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;

//oplatform creator
function makePlatform(_length, _x, _y){

    newPlat = new Sprite(_x,_y,_length,5,'k');
    newPlat.color = 'black'
    newPlat.bounciness = 0;
    newPlat.friction = 0;
    return (newPlat);
}
/*******************************************************/
// setup()
/*******************************************************/
function setup(){
    console.log("setup: ");
    cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    world.gravity.y = 80;
    
    //Ground 
    ground = makePlatform(SCREEN_WIDTH, SCREEN_WIDTH/2, SCREEN_HEIGHT);
    

    
    // Platforms
    startPlat = makePlatform( SCREEN_WIDTH/4, 0, SCREEN_HEIGHT/1.5);

    rightPlatform = makePlatform(SCREEN_WIDTH/3, SCREEN_WIDTH, SCREEN_HEIGHT/2);

    middlePlat = makePlatform(100, 350, SCREEN_HEIGHT/2);
    
    middlePlat2 = makePlatform(200, 600, 350);
    middlePlat3 = makePlatform(125, 600, 50);
    firstLVPlat = makePlatform(SCREEN_WIDTH, 0, -100,);
    spikePlat = makePlatform(50,260, -160);
    leftPlat = makePlatform(SCREEN_WIDTH/8, 0, -250);
    leftPlat2 = makePlatform(SCREEN_WIDTH/8, 0, -500);
    middlePlat4 = makePlatform(SCREEN_WIDTH*1.1,800,-600);
    rightPlat2 = makePlatform(SCREEN_WIDTH/8,1000,-800);
    rightPlat3 = makePlatform(SCREEN_WIDTH/8,1000,-1000);
    littlePlat = makePlatform(50,800,-1100);
    littlePlat2 = makePlatform(50,600,-1200);
    littlePLat3 = makePlatform(50,400,-1300);
    littlePlat4 = makePlatform(50,200,-1400);
    littlePlat5 = makePlatform(100,0,-1500);
    
    
    //Walls
    wallLH  = new Sprite(0, height/8, 8, height*10, 'k');
    wallLH.color = 'black';
    wallLH.bounciness = 0;
    wallLH.friction = 0;
    
    wallRH  = new Sprite(width, height/8, 8, height*10, 'k');
    wallRH.color = 'black';
    wallRH.bounciness = 0;
    wallRH.friction = 0;
    
  
    //Player
    player = new Sprite(100,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_WIDTH, 'd');
    player.bounciness = 0;
    player.addImage(img);

    //Trap
    trap = new Sprite(200, -125, 150, 50, 'k');
    trap.bounciness = 0;
    trap.addImage(img3);
    player.collides(trap, playerHitTrap);
    
    trap2 = new Sprite(450, -625, 150, 50, 'k');
    trap2.bounciness = 0;
    trap2.addImage(img3);
    player.collides(trap2, playerHitTrap2);


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
    img3.resize(150, 50);
    camera.y = player.y;
    cooldown = cooldown + 0.01;
    //console.log(cooldown);
    
    
    for (let i = 0; i<lives;i++){
        image(img2, 35*i, 0);
        
    }
}

function playerHitTrap(_player,_trap){
    lives--;
    //Dead code
}

function playerHitTrap2(_player,_trap2){
    lives--;
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
