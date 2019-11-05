// Grab HTML Elements
const monthlyPayment = document.getElementById('monthlyPayment');
const totAmtPaid = document.getElementById('totAmtPaid');
const monthlyIntCharge = document.getElementById('monthlyIntCharge');
const calculations = document.getElementById('calculations');
const calcForm = document.getElementById('calcForm');

// Add Event Listener to Form
calcForm.addEventListener('submit', calculate);

// Event Listener Callback
function calculate(e) {
    e.preventDefault();

    // Grab Input Values
    let principal = document.getElementById('principal').value;
    let nominalAPR = document.getElementById('nominalAPR').value;
    let duration = document.getElementById('duration').value;

    // Create A Couple Values
    let monthlyIntRate = (nominalAPR / 100) / 12;

    // Make Calculations
    monthlyInt = monthlyIntRate * principal;
    monthlyPay = monthlyInt + (principal / duration);
    totalAmt = Math.round(monthlyPay * duration);

    // Add Calculations to HTML
    monthlyIntCharge.innerHTML = monthlyInt;
    monthlyPayment.innerHTML = monthlyPay;
    totAmtPaid.innerHTML = totalAmt;
    
    // Show Calculations Div
    calculations.style.display = 'block';
}

console.log(typeof principal.value);