//Medidior de temperatura
const celsius = 24;
const fahrenheit = celsius * 9 / 5 + 32;   // de celsius a fahrenheit es c * 9/5 + 32
const kelvin =  celsius + 273.15;

console.log(`Celsius: ${celsius.toFixed(2)} °C | Fahrenheit: ${fahrenheit.toFixed(2)} °F | Kelvin: ${kelvin.toFixed(2)} K`);