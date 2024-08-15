do {
    var gridSize = prompt("Grid Size (Max: 100)");
}
while (isNaN(gridSize) || !Number.isInteger(parseFloat(gridSize)) || gridSize > 100);

function createSquares(n) {
    for (let i = 0; i < n ** 2; i++) {
        const square = document.createElement("div");
        const grid = document.querySelector(".grid-container");
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
    for (const sqr of squares) {
        sqr.style.backgroundColor = "white";
    }
}

function createRainbowSquares() {
    const grid = document.querySelector(".grid-container");
    const squares = document.querySelectorAll(".grid-square");
    grid.removeChild(squares);
    for (let i = 0; i < gridSize ** 2; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        square.style.cssText = `width: ${500 / n}px; height: ${500 / n}px`;
        grid.appendChild(square);
        square.addEventListener("mouseover", () => {
            const r = Math.round(Math.random() * 100);
            const g = Math.round(Math.random() * 100);
            const b = Math.round(Math.random() * 100);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }   
}

document.querySelector(".reset").addEventListener("click", resetSquares);

createSquares(gridSize);