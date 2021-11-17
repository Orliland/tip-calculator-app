const inputBill = document.getElementById("input-bill");
const inputTip = document.getElementById("input-tip");
const inputPeople = document.getElementById("input-people");

const personTipEl = document.getElementById("person-tip-el");
const personAmountEl = document.getElementById("person-amount-el");

const resetButton = document.getElementById("reset-button");

let tipPercent = 0;

function clearFormButtons() {
  const formButtons = document.getElementsByClassName("form__button");

  for (const button of formButtons) {
    button.classList.remove("button__accent");
  }
}

function selectTip(event, percent) {
  clearFormButtons();
  if (event.classList.contains("button__accent")) {
    event.classList.remove("button__accent");
    tipPercent = 0;
  } else {
    event.classList.add("button__accent");
    tipPercent = percent;
  }
  calculateTips();
}

function selectTipManual() {
  clearFormButtons();
  if (inputTip.value === "") {
    tipPercent = 0;
  } else {
    tipPercent = parseInt(inputTip.value);
  }
  calculateTips();
}

function calculateTips() {
  const bill = parseFloat(inputBill.value);
  const people = parseInt(inputPeople.value);
  const totalTip = (bill * tipPercent) / 100;
  const personTip = totalTip / people;
  const totalAmount = bill + totalTip;
  const personAmount = totalAmount / people;

  personTipEl.textContent = `$ ${personTip.toFixed(2)}`;
  personAmountEl.textContent = `$ ${personAmount.toFixed(2)}`;
}

function resetCalculator() {
  inputBill.value = "";
  clearFormButtons();
  tipPercent = 0;
  inputTip.value = "";
  inputPeople.value = 1;
  personTipEl.textContent = "$ 0.00";
  personAmountEl.textContent = "$ 0.00";
}

inputBill.addEventListener("keyup", calculateTips);
inputPeople.addEventListener("keyup", calculateTips);

inputTip.addEventListener("keyup", selectTipManual);

inputTip.addEventListener("focus", selectTipManual);

resetButton.addEventListener("click", resetCalculator);
