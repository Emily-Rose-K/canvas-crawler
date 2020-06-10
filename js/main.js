/* -------- DOM References ------*/
//movement display - diplays x and y coordinates
let movementDisplay = document.getElementById("movement");
//game status - win or lose conditions
let gameStatus = document.getElementById("statuds");
//canvas itself - game board
let game = document.getElementById("game");
game.width = 800;
game.height = 400;

/*------ Drawing on the Canvas ------*/
let ctx = game.getContext("2d");



//DRAW A RECTANGLE

function drawBox(x, y, size, color) {
//call the fill rectangle function (fills in the rectangle)
ctx.fillStyle = color; 

ctx.fillRect(x, y, size, size)
}



/*------ Dramatis Personae ------*/

//constructor function - it creates objects! like my hero and my ogre that are v similar
function Crawler(x, y, color, width, height) { // these are all the things that change
  this.x = x;
  this.y = y;
  this.color = color; 
  this.width = width;
  this.height = height;
  this.alive = true;
  this.render = function() {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}


let hero = new Crawler(0, 0, "#E6007E", 50, 100);

let ogre = new Crawler(500, 100, "#a2be00", 100, 150);


/*------ Game Loop Stuff ------*/

const gameTick = () => {
  //clear the canvas
  ctx.clearRect(0, 0, game.width, game.height)
  //display hero x/y
  movementDisplay.innerText = `X:${hero.x} Y:${hero.y}`
  //is ogre alive?
  if (ogre.alive) {
    detectHit()
    }
    else {
    //stop the game
    endGame();
  }
   //set hero x and y (or display, or nothing, wasd)
   hero.render();
   ogre.render();
}

const detectHit = () => {
    //if colision
    // if hero right side is > ogre left side
    //if heros left side is < ogres right side
    if(hero.x + hero.width > ogre.x 
        && hero.x < ogre.x + ogre.width
        && hero.y < ogre.y + ogre.height
        && hero.y + hero.height > ogre.y) {
        ogre.alive = false
        gameStatus.innerText = "Shrek is ded";
    }
}


const endGame = () => {
    console.log("ending the game")
    clearInterval(gameLoop);
}

let gameLoop = setInterval(gameTick, 60); //17 millisonds is slightly faster than 60 frames p/s


/*----- Movement Stuff ------*/

const movementHandler = (e) => {
 switch(e.key) {
    case "w":
        hero.y -= 13;
    break;
    case "a":
        hero.x -= 13;
    break;
    case "s":
        hero.y += 13;
    break;
    case "d":
        hero.x += 13;
 }
}

document.addEventListener("keydown", movementHandler);





/*------ ARCHIVE ------*/

//a box is drawn
// drawBox(e.offsetX, e.offsetY, 60, "blue");

// drawBox(10, 200, 150, "yellow");
//fill color
// ctx.fillStyle = "white";
//line color
// ctx.strokeStyle = "red";
// //line width
// ctx.lineWidth = 5; // defaults to pixels


//call the strocke rectange funtion (fills in the border)
// ctx.strokeRect(x,y, size, size)

//OUR HERO!
// let hero = {
//     x: 0,
//     y: 0,
//     color: "#E6007E",
//     width: 20,
//     height: 20,
//     alive: true,
//     render: function() {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }

// //OUR OGRE!!

// let ogre = {
//     x: 0,
//     y: 0,
//     color: "#a2be00",
//     width: 50,
//     height: 75,
//     alive: true,
//     render: function() {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
// }

//Add an event listener so that on every click, a box is drawn at that click
// game.addEventListener("click", (e)=> {
//     //clear the board
//     ctx.clearRect(0, 0, game.width, game.height)
    
//     //at a click location
    
//     hero.x = e.offsetX;
//     hero.y = e.offsetY;
//     //render hero
//     hero.render();
//     ogre.render();
    
//     })
    