let plusButton, minusButton, counterValue;
let count = 0;

document.addEventListener("readystatechange", (event) => {
  if (document.readyState === "complete") {
    initElements();
    updateCounter(0);
    setupButtonClick();
  }
});

const updateCounter = (value) => {
  counterValue.innerHTML = value;
};

const updateCounterValue = (by) => {
  count = count + by;
  updateCounter(count);
};

function initElements() {
  plusButton = document.querySelector("#plus-button");
  minusButton = document.querySelector("#minus-button");
  counterValue = document.querySelector("#value");
}

function setupButtonClick() {
  plusButton.addEventListener("click", () => {
    updateCounterValue(+1);
  });
  minusButton.addEventListener("click", () => {
    updateCounterValue(-1);
  });
}
