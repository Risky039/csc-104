JavaScript:
function calculate() {
  const principal = document.getElementById('principal').value;
  const interest = document.getElementById('interest').value / 100;
  const years = document.getElementById('years').value;

  const amount = principal * Math.pow(1 + interest, years);
  const interestEarned = amount - principal;

  const result = document.getElementById('result');
  result.textContent = `Total amount: $${amount.toFixed(2)} (Interest earned: $${interestEarned.toFixed(2)})`;
}