document.getElementById('interestForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let principal = parseFloat(document.getElementById('principal').value);
    let rate = parseFloat(document.getElementById('rate').value);
    let time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers.');
        return;
    }

    let simpleInterest = (principal * rate * time) / 100;
    let totalAmount = principal + simpleInterest;

    document.getElementById('result').innerHTML = `
        <p>Simple Interest: $${simpleInterest.toFixed(2)}</p>
        <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;
});
