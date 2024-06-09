JavaScript:
function convertToCelsius() {
  const fahrenheit = document.getElementById('fahrenheit').value;
  const celsius = (fahrenheit - 32) * 5 / 9;
  const celsiusResult = document.getElementById('celsiusResult');
  celsiusResult.textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
}