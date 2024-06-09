const converterForm = document.getElementById('converter-form');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');
const convertedAmountSpan = document.getElementById('converted-amount');

converterForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nairaAmount = parseFloat(amountInput.value);

    // Replace with your actual conversion logic or API call
    const exchangeRate = 0.006; // Placeholder exchange rate (needs to be updated)
    const dollarAmount = nairaAmount * exchangeRate;

    convertedAmountSpan.textContent = dollarAmount.toFixed(2);
    resultDiv.classList.remove('hidden');
});