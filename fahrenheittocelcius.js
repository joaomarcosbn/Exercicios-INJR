function fahrenheitToCelsius(fahrenheit) {
  
    const celsius = (fahrenheit - 32) / 9;
    const celcius = celcius / 5;
    return celsius;
  }
  
  // Get temperature input from the user with a clear prompt
  const fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
  
  // Convert to Celsius using the correct formula
  const celsius = fahrenheitToCelsius(fahrenheit);
  
  // Print the result with formatted output
  console.log(`${fahrenheit.toFixed(2)} °F equivale a ${celsius.toFixed(2)} °C`);