/*******************************************************/
// Blazing Blitz
// Written by Haider Faris 
/*******************************************************/


//Variables
var cooldown = 0;
var lives = 3;
var newPlat;
var time = 0;
var timeInSeconds = 0;
var resetTime = 0;
let screenSelector = "start";

const PLAYER_WIDTH = 25;
const SCREEN_WIDTH = 1000;
const SCREEN_HEIGHT = 500;

//Platform creator
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
    
    //Platform 
    ground = makePlatform(SCREEN_WIDTH, SCREEN_WIDTH/2, SCREEN_HEIGHT);
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
    littlePlat5 = makePlatform(200,0,-1500);
    
    
    //Walls
    wallLH  = new Sprite(0, height/8, 8, height*10, 'k');
    wallLH.color = 'black';
    wallLH.bounciness = 0;
    wallLH.friction = 0;
    
    wallRH  = new Sprite(width, height/8, 8, height*10, 'k');
    wallRH.color = 'black';
    wallRH.bounciness = 0;
    wallRH.friction = 0;
    
  


    //Trap
    trap = new Sprite(200, -125, 150, 50, 'k');
    trap.bounciness = 0;
    trap.addImage(img3);
    
    trap2 = new Sprite(450, -625, 150, 50, 'k');
    trap2.bounciness = 0;
    trap2.addImage(img3);

    //Door
    door = new Sprite(25, -1538, 50, 70, 'k')
    door.bounciness = 0;
    door.addImage(img4);
    

    


    //Keyboard Inputs
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
    //Load image
    img = loadImage('/images/face.png');
    img2 = loadImage('images/heart.png');
    img3 = loadImage('images/spikes.png');
    img4 = loadImage('images/door.png');
}

document.addEventListener("keydown", playerInput);
function playerInput(event) {
    //ScreenSelector code 
    if(keyCode == 13 && screenSelector == "start"){
            screenSelector = "game"
            resetGame();
        } else if (keyCode == 13 && screenSelector == "end"){
            screenSelector = "game"
            resetGame();
        } else if (keyCode == 13 && screenSelector == "win"){
            screenSelector = "game"
            resetGame();
        }
}

function draw(){
    //Switching between screens 
    if(screenSelector=="game"){
        gameScreen();
    }else if(screenSelector=="end"){
        endScreen();
    }else if(screenSelector=="win"){
        winScreen();
    }else if(screenSelector=="start"){
        startScreen();
        //Display screen selector
    console.log("Start screen")
    }else{
        text("wrong screen - you shouldnt get here", 50, 50);
        console.log("wrong screen - you shouldnt get here")
    }
    
    //Resize images 
    img.resize(PLAYER_WIDTH, PLAYER_WIDTH);
    img3.resize(150, 50);
    img4.resize(50, 70);
    //Jump cooldown
    cooldown = cooldown + 0.01;
    //console.log(cooldown);
    
    
    
}

function ifPlayerHitsTrap(_player,_trap){
    lives--;
    //If player hits trap
}

function ifPlayerHitsTrap2(_player,_trap2){
    lives--;
    //If player hits trap
}

function checkIfDead(){
    if(lives == 0){
        //If lives are zero you die
        console.log("YouDied");
        screenSelector = "end";
        allSprites.visible = false;
        player.remove();
        lava.remove();
    }
}

function checkIfPlayerHitDoor(){
    if(player.collides(door, checkIfPlayerHitDoor)){
        //If player hits door you win
        screenSelector = "win";
        allSprites.visible = false;
        player.remove();
        lava.remove();
    }

}

function checkIfPlayerHitLava(){
    if(player.collides(lava, checkIfPlayerHitLava)){
        //If player hits lava lives are zero
        lives = 0;
        allSprites.visible = false;
        player.remove();
        lava.remove();
    }
}

//Start screen
function startScreen(){
    background('grey');
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to the Blazing Blits", 50, 50);
    textSize(24);
    text("Press enter to start", 50, 100);
    textSize(24);
    text("Controls", 50, 150);
    textSize(24);
    text("Up arrow to jump", 50, 200);
    textSize(24);
    text("Right arrow to move right", 50, 250);
    textSize(24);
    text("Left arrow to move left", 50, 300);
    playerInput();
    lives = 3;
}

//Game screen
function gameScreen(){
    background('grey');
    //Lives code
    for (let i = 0; i<lives;i++){
        image(img2, 35*i, 0);
    }
    allSprites.visible = true;
    //Time code
    time = millis() - resetTime
    timeInSeconds = time/1000;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Time: " + Math.floor(timeInSeconds) + " seconds", 600, 50);
    //Collision code
    player.collides(door, checkIfPlayerHitDoor);
    player.collides(lava, checkIfPlayerHitLava);
    player.collides(trap, ifPlayerHitsTrap);
    player.collides(trap2, ifPlayerHitsTrap2);
    console.log ("player.collides");
    console.log (door);
    // Camera follows players y
    camera.y = player.y;
    player.bounciness = 0;
    checkIfDead();


}

//End screen
function endScreen(){
    playerInput();
    background("grey");
    console.log("End screen")
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Press enter to try again", 50, 50);
}

//Win screen
function winScreen(){
    playerInput();
    background("grey");
    console.log("Win screen")
    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You won! Press enter to play again", 50, 50);
    textSize(24);
    text("Your time was: "+Math.floor(timeInSeconds) + " seconds",50, 100);
}

//Reset game
function resetGame(){
    time = 0;
    resetTime = millis();
    lives = 3;
    //Player
    player = new Sprite(100,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_WIDTH, 'd');
    player.bounciness = 0;
    player.addImage(img);
    player.x = 100;
    player.y = SCREEN_HEIGHT/2;
    //lava
    lava = new Sprite (500, 1250, 1000, 500, 'k' );
    lava.color = "red";
    lava.vel.y = -2;
    //Refresh player and lava 
}

/*******************************************************/
//  END OF APP
/*******************************************************/
