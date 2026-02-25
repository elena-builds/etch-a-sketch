const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return { r, g, b };
}

function makeGrid(size) {
  container.innerHTML = "";

  const totalSquares = size * size;
  const squareSize = 960 / size;

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.dataset.darkness = "0";

    square.addEventListener("mouseover", () => {
      if (!square.dataset.r) {
        const { r, g, b } = randomRGB();
        square.dataset.r = String(r);
        square.dataset.g = String(g);
        square.dataset.b = String(b);
      }

      let darkness = Number(square.dataset.darkness);
      if (darkness < 10) darkness += 1;

      square.dataset.darkness = String(darkness);
      const alpha = darkness / 10;
      square.style.backgroundColor = `rgba(${square.dataset.r}, ${square.dataset.g}, ${square.dataset.b}, ${alpha})`;
    });

    container.appendChild(square);
  }
}

makeGrid(16);

resizeBtn.addEventListener("click", () => {
  const input = prompt("How many squares per side? (max 100)");

  if (input === null) return;

  const size = Number(input);

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  makeGrid(size);
});
