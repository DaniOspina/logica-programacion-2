function convertirTemperatura() {
    let temperaturaCelsius = prompt("Introduce la temperatura en grados Celsius:");
  
    // Validar que la entrada es un número
    while (isNaN(temperaturaCelsius) || temperaturaCelsius === null || temperaturaCelsius.trim() === "") {
      temperaturaCelsius = prompt("Entrada no válida. Por favor introduce un número para la temperatura en grados Celsius:");
    }
  
    temperaturaCelsius = parseFloat(temperaturaCelsius);
  
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;
  
    console.log(`Grados Kelvin: ${temperaturaKelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);
  
    document.getElementById("resultados").innerHTML = `
      Grados Kelvin: ${temperaturaKelvin.toFixed(2)} <br>
      Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}
    `;
  }
  
  convertirTemperatura();
  