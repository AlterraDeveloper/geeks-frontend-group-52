/* <div class="cell"></div> */
function createCell() {
  const div = document.createElement("div"); // <div></div>
  div.classList.add("cell");
  return div;
}

const board = document.querySelector("#board");

function createBoard(size) {
  let cellsCount = 0;

  switch (size) {
    case "S":
      cellsCount = 200;
      break;
    case "M":
      cellsCount = 400;
      break;
    case "L":
      cellsCount = 600;
      break;
  }

  board.innerHTML = "";

  for (let i = 0; i < cellsCount; i++) {
    const cell = createCell();
    board.appendChild(cell);
  }
}

const options = document.querySelectorAll("#options input[type=radio]");

for (const option of options) {
  option.onchange = function () {
    const id = option.id;
    const size = id.slice(-1).toUpperCase();
    createBoard(size);
  };
}

// board.addEventListener("mousemove")
board.onmousemove = function (event) {
  const cell = event.target;
  if (!cell.classList.contains("cell")) return;

  cell.style.transition = "none";
  cell.style.backgroundColor = getRandomColor();

  setTimeout(function () {
    cell.style.transition = "all 0.75s ease-in-out";
    cell.style.backgroundColor = "#777";
  }, 800);
};

function getRandomColor(){
    const colors = ["lime", "red", "orange", "yellow", "purple", "cyan"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
