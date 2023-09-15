let count = 0;

$(document).ready(() => {
  console.log("ready");
  setupButtonClick();
});

const updateCounter = (value) => {
  $("#value").text(value);
};

const updateCounterValue = (by) => {
  count = count + by;
  updateCounter(count);
};

function setupButtonClick() {
  $("#plus-button").on("click", () => {
    updateCounterValue(+1);
  });
  $("#minus-button").on("click", () => {
    updateCounterValue(-1);
  });
}
