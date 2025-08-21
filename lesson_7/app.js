// function declaration
function calculateIndex3(height, weight) {
  return 0;
}

// function expression
const calculateIndex2 = function (height, weight) {
  return 0;
};

// function expression
// arrow function
const calculateIndex = (height, weight) => {
  if (!height || !weight) return -1;
  const heightInMeters = height / 100;
  const index = weight / heightInMeters ** 2;
  return Number(index.toFixed(1));
};

const convertIndexToText = (index) => {
  if (index < 18.5) return "Дефицит массы тела";
  if (index >= 18.5 && index < 25) return "Нормальная масса тела";
  if (index >= 25 && index < 30) return "Увеличение массы тела";
  if (index >= 30 && index < 35) return "Ожирение 1 степени";
  if (index >= 35 && index < 40) return "Ожирение 2 степени";
  if (index >= 40) return "Ожирение 3 степени";
};

const convertIndexToColor = (index) => {
  if (index < 18.5) return "yellow";
  if (index >= 18.5 && index < 25) return "green";
  if (index >= 25 && index < 30) return "yellow";
  if (index >= 30 && index < 40) return "red";
  if (index >= 40) return "brown";
};

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const indexInput = document.querySelector("#index");
const result = document.querySelector("#result-text");

const heightRange = document.querySelector("#height-range");
const weightRange = document.querySelector("#weight-range");

const handleIndexChange = () => {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);
  const index = calculateIndex(height, weight);
  if (index < 0) {
    result.innerText = "";
    indexInput.value = "";
    indexInput.style.border = `none`;
    return;
  }
  indexInput.value = index;
  const resultText = convertIndexToText(index);
  result.innerText = resultText;
  const indexColor = convertIndexToColor(index);
  indexInput.style.color = indexColor;
  indexInput.style.border = `4px solid ${indexColor}`;
};

// heightInput.onchange = handleIndexChange;
// weightInput.onchange = handleIndexChange;

heightInput.oninput = handleIndexChange;
weightInput.oninput = handleIndexChange;

heightRange.oninput = () => {
    const height = heightRange.value;
    heightInput.value = height;
    heightInput.dispatchEvent(new Event("input"));
}

weightRange.onchange = () => {
    const weight = weightRange.value;
    weightInput.value = weight;
    weightInput.dispatchEvent(new Event("input"));
}
