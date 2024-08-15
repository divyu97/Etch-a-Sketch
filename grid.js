function createSquares(n) {
    for (let i = 0; i < n ** 2; i++) {
        const square = document.createElement("div");
        const grid = document.querySelector(".grid-container");
        square.setAttribute("class", "grid-square");
        square.style.cssText = `width: ${500 / n}px; height: ${500 / n}px`;
        grid.appendChild(square);
    }
}