function convertTemperatures() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
  
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    var kelvin = celsius + 273.15;
  
    fahrenheitInput.value = isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2);
    kelvinInput.value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
  }
  
