const square = document.getElementById("main");
const hoverPaint = document.querySelectorAll(".miniSquare");

document.getElementById("gridSize").addEventListener("click", () => {
    let size = prompt("Choose grid size (number of squares by side)", 16);
    createGrid(size);
})

document.getElementById("clean").addEventListener("click", cleanSketch);

hoverPaint.forEach( (miniSquare) => {
        miniSquare.addEventListener("onmouseover", (miniSquare) => {
                miniSquare.style.backgroundColor = "black";
            }
        )
    }
)

function styleSquare(sqrDiv,gridSize) {
    sqrDiv.style.border = "1px solid black";
    sqrDiv.style.height = (100/gridSize)+"%";
    sqrDiv.style.width = "100%";
    sqrDiv.style.backgroundColor = "white";
    sqrDiv.style.boxSizing = "border-box";
}

function styleBreakLine (newDiv,gridSize){
    newDiv.style.width = (100/gridSize)+"%";
}

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++){
        let x = 0;
        let breakLine = document.createElement("div");
        styleBreakLine(breakLine,gridSize);
        while(x < gridSize){
            let newSqr = document.createElement("div");
            styleSquare(newSqr,gridSize);
            newSqr.classList.add("miniSquare")
            breakLine.appendChild(newSqr);
            x++;
        }
        square.appendChild(breakLine);

    }
}

function cleanSketch() {
    document.querySelectorAll(".miniSquare").forEach( (miniSquare) => {
        miniSquare.style.backgroundColor = "white";
    }
)
}
//document.getElementById("clean").addEventListener("click", createGrid)