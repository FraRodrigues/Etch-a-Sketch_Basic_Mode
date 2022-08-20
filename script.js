const square = document.getElementById("main");

document.getElementById("gridSize").addEventListener("click", () => {
    let size = prompt("Choose grid size (number of squares by side)", 16);
    createGrid(size);
})

function makeSquare(newSqr) {
    newSqr = document.createElement("div");
    newSqr.style.cssText = `
    border: 1px solid black;
    width: auto;
    height: auto;
    `
    return newSqr;
}

function createGrid(gridSize) {
    for(let i = 0; i < gridSize; i++){
        let x = 0;
        console.log(gridSize)
        while(x < gridSize){
            const newSqr = makeSquare(newSqr);
            square.appendChild(newSqr);
            x++;
        }
        const breakLine = document.createElement("div");
        breakLine.innerHTML = "<br>";
    }
}

//document.getElementById("clean").addEventListener("click", createGrid)