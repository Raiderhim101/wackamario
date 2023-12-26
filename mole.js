let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver =  false;


window.onload = function() {
    setGame();
}

function setGame(){
    // set up the grid for the game board 
    for (let i =0; i < 9; i++ ){  //i goes from 0 to 8, stops at 9 because i < 9
        //<div id = "0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);

    }
    setInterval(setMole,1000); //1000 milisecond = 1 second 
    setInterval(setPlant,2000); //2000 milisecond = 2 second 
}

function getRandomTile(){
    // math.random returns (0-9) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random()* 9);
    return  num.toString();
}
function setMole(){

    
    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    
    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
    
}


function setPlant(){
    
    if (currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img")
    plant.src = "./piranha-plant.png";
 
    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
   
   

}

function selectTile(){
    if (gameOver){
        return;
    }

    if (this == currMoleTile) {
        score  += 10;
        document.getElementById("score").innerText = score.toString();

    }
    else if (this == currPlantTile){
        document.getElementById("score").innerText = "Game over: " + score.toString();
        gameOver = true();
    }
}