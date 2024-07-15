const container = document.querySelector(".container");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

let counter = 0;

function createGrid(dimension) {
    // creates each row
    for (let i = 0; i < dimension; i++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "row";
        // creates each cell in the row
        for (let j = 0; j < dimension; j++) {
            let cell = document.createElement("div");
            row.appendChild(cell).className = "cell";
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("load", createGrid(16));

let cells = document.querySelectorAll(".cell");

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseenter", () => {
        cells[i].style.backgroundColor = `rgb(${getRandomInt(255) + 1}, ${getRandomInt(255) + 1}, ${getRandomInt(255) + 1})`;
        let opacityHolder = +cells[i].style.opacity + .1
        cells[i].style.opacity = opacityHolder;
    });
}

button.addEventListener("click", () => {
    while(container.firstChild) { 
        container.removeChild(container.firstChild); 
    } 
    output.textContent = "";
    let inputVal = input.value;
    if (inputVal > 100) {
        output.textContent = "Sorry, 100 x 100 is the max!";
        inputVal = 100;
    }
    input.value = "";
    createGrid(inputVal);

    cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseenter", () => {
            cells[i].style.backgroundColor = `rgb(${getRandomInt(255) + 1}, ${getRandomInt(255) + 1}, ${getRandomInt(255) + 1})`;
            let opacityHolder = +cells[i].style.opacity + .1
            cells[i].style.opacity = opacityHolder;
        });
    }
});