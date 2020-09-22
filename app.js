const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const cancleBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');

let total = 0;

const clear = () => {
  inputReason.value = '';
  inputAmount.value = '';
};

confirmBtn.addEventListener('click', () => {
  const enteredReason = inputReason.value;
  const enteredAmount = inputAmount.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }

  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `<b> ${enteredReason}</b> &nbsp; : &nbsp; ${enteredAmount}`;
  //   newItem.textContent = enteredReason + ' :' + enteredAmount;

  expensesList.appendChild(newItem);

  total += +enteredAmount;

  totalExpenses.textContent = total;

  clear();
});

cancleBtn.addEventListener('click', clear);
