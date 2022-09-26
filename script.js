const square = document.getElementById("main");

document.getElementById("gridSize").addEventListener("click", () => {
    if (!!document.getElementsByClassName("break") === true){
        while (square.hasChildNodes()){
            square.removeChild(square.lastChild);
        }
    }
    let size = prompt("Choose grid size (number of squares by side) (max 128)", 16);
    if (size > 128){
        alert("Maximum size is 128 squares!");
    } else {
    createGrid(size);
    }
})

document.getElementById("clean").addEventListener("click", cleanSketch);


function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++){
        let x = 0;
        let breakLine = document.createElement("div");
        styleBreakLine(breakLine,gridSize);
        breakLine.classList.add("break")
        while(x < gridSize){
            const newSqr = document.createElement("div");
            styleSquare(newSqr,gridSize);
            newSqr.classList.add("miniSquare")
            newSqr.addEventListener("mouseover", () => hover(newSqr))
            breakLine.appendChild(newSqr);
            x++;
        }
        square.appendChild(breakLine);

    }
    
}

function styleBreakLine (newDiv,gridSize){
    newDiv.style.width = (100/gridSize)+"%";
}

function styleSquare(sqrDiv,gridSize) {
    sqrDiv.style.border = "1px solid black";
    sqrDiv.style.height = (100/gridSize)+"%";
    sqrDiv.style.width = "100%";
    sqrDiv.style.backgroundColor = "white";
    sqrDiv.style.boxSizing = "border-box";
}

function cleanSketch() {
    document.querySelectorAll(".miniSquare").forEach( (miniSquare) => {
        miniSquare.style.backgroundColor = "white";
    }
)
}

function hover(square){
    square.style.backgroundColor= "black";
}