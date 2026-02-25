const container = document.querySelector("#container");

function makeGrid(size) {
  container.innerHTML = "";

  const totalSquares = size * size;
  const squareSize = 960 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    container.appendChild(square);
  }
}

makeGrid(16);
