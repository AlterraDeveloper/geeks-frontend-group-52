const original = [4, 7, 8, 2, 9, 5, 6];

function createCircle(value) {
  const div = document.createElement("div");
  div.classList.add("array-item");
  div.textContent = value;
  return div;
}

function fillOriginal(array) {
  const container = document.querySelector("#original .array");
  container.innerHTML = "";
  for (const item of array) {
    const circle = createCircle(item);
    container.appendChild(circle);
  }
}

function fillUpdated(array) {
  const container = document.querySelector("#updated .array");
  container.innerHTML = "";
  const updated = array.map(function (item) {
    return createCircle(item);
  });

  container.append(...updated);
  // container.append([1,2,3]);
  // container.append(1,2,3)
}

// map filter reduce

fillOriginal(original);

function map5() {
  const updated = original.map(function (item) {
    return item + 5;
  });
  fillUpdated(updated);
}

function mapX2() {
  const updated = original.map(function (item) {
    return item * 2;
  });
  fillUpdated(updated);
}

function filterMoreThan5() {
  const updated = original.filter(function (item) {
    return item >= 5;
  });
  fillUpdated(updated);
}

function filterEvens(){
    const updated = original.filter(function (item){
        return item % 2 === 0;
    });
    fillUpdated(updated);
}

function sliceTop3(){
    const updated = original.slice(0, 3);
    fillUpdated(updated)
}

function sliceLast4(){
    const updated = original.slice(-4);
    // const updated = original.slice(original.length - 4);
    fillUpdated(updated)
}

function reverse(){
    const copy = [...original];  
    // const copy = original.map(x => x);
    // const copy = original.filter(x => true);
    const updated = copy.reverse();
    fillUpdated(updated);
}

function sortAsc(){
    const copy = Array.from(original)
    const sorted = copy.sort(function(a,b){
        return a - b;
    });
    fillUpdated(sorted);
}

function sortDesc(){
    const copy = Array.from(original);
    const sorted = copy.sort(function(a,b){
        return b - a;
    });
    fillUpdated(sorted);
}
