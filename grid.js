do {
    var gridSize = prompt("Grid Size (Max: 100)");
}
while (isNaN(gridSize) || !Number.isInteger(parseFloat(gridSize)) || gridSize > 100 || gridSize <= 0);

const grid = document.querySelector(".grid-container");

function createSquares(n) {
    for (let i = 0; i < n ** 2; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        square.style.cssText = `width: ${500 / n}px; height: ${500 / n}px`;
        grid.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#f58231";
        });
    }
}

function resetSquares() {
    const squares = document.querySelectorAll(".grid-square");
    for (const sqre of squares) {
        grid.removeChild(sqre);
    }
    createSquares(gridSize);
}

function createRainbowSquares() {
    const squares = document.querySelectorAll(".grid-square");
    for (const squre of squares) {
        grid.removeChild(squre);
    }
    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        square.style.cssText = `width: ${500 / gridSize}px; height: ${500 / gridSize}px`;
        grid.appendChild(square);
        square.addEventListener("mouseover", () => {
            const r = Math.round(Math.random() * 255);
            const g = Math.round(Math.random() * 255);
            const b = Math.round(Math.random() * 255);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }   
}

document.querySelector(".reset").addEventListener("click", resetSquares);
document.querySelector(".rainbow").addEventListener("click", createRainbowSquares);

createSquares(gridSize);