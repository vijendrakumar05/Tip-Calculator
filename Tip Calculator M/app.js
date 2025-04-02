const btnEl = document.getElementById("calculate");
const clearBtnEl = document.getElementById("clear");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal(e) {
    e.preventDefault();

  if (billInput.value === "") {
    totalSpan.textContent = "Please Provide Bill Amount!";
     return;
 }

 if (tipInput.value === "") {
  totalSpan.textContent = "Please Provide Tip % !";
   return;
}

  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * ( 1 + tipValue / 100);
  totalSpan.innerText = `Your Total Bill Amount is: ₹${totalValue.toFixed(2)}`;
}

// Function to clear inputs and total
function clearFields() {
  billInput.value = "";
  tipInput.value = "";
  totalSpan.textContent = ""; // Clear the result
}

btnEl.addEventListener("click", calculateTotal);
clearBtnEl.addEventListener("click", clearFields);
