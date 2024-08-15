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

document.querySelector(".reset").addEventListener("click", resetSquares);