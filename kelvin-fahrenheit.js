// constante do valor de kelvin
const kelvin = 0 

// conversao de celsius para kelvin
const celsius = kelvin - 273

// conversao de celsius para fahrenheit
var fahrenheit = celsius * (9/5) + 32 

// transformar em numero inteiro, math = objeto embutido e .floor = função
fahrenheit = Math.floor(fahrenheit) 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
