const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundUp(num) {
  return Math.round(num * 100) / 100;
}
function celsiusToFaranheitAndKelvin() {
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundUp(fTemp);
  kelvinInput.value = roundUp(kTemp);
}

function fahrenheitToCelsiusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = ((fTemp + 459.67) * 5) / 9;
  celsiusInput.value = roundUp(cTemp);
  kelvinInput.value = roundUp(kTemp);
}

function kelvinToCelsiusAndFahranheit() {
  const kTemp = parseFloat(kelvinInput.value);
  const cTemp = kTemp - 273.15;
  const fTemp = (9 / 5) * (kTemp - 273.15) + 32;
  celsiusInput.value = roundUp(cTemp);
  fahrenheitInput.value = roundUp(fTemp);
}
function main() {
  celsiusInput.addEventListener("input", celsiusToFaranheitAndKelvin);
  kelvinInput.addEventListener("input", kelvinToCelsiusAndFahranheit);
  fahrenheitInput.addEventListener("input", fahrenheitToCelsiusAndKelvin);
}
main();
