// how  to  pass  a  default value  in javascript
// ()= default value)
function calculateTax (cost, taxPercent = 0.1) {
  console.log(cost * taxPercent)
}
calculateTax(2000)

//convert To fahrenheit so take in celsius Params
function ConvertToFahrenheit (celsius) {
  return (celsius * 9) / 5 + 32
}

console.log('F is' + ConvertToFahrenheit(25))

function convertToCelsius (fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

console.log('Celsius is' + convertToCelsius(86))

//convert Celsius to F
function convertTemperature (number, unit) {
  let Temp = 0
  if (unit === 'C') {
    Temp = (number * 9) / 5 + 32
    return `'${Temp}F'`
  } else if (unit === 'F') {
    Temp = ((number - 32) * 5) / 9

    return `'${Temp}C'`
  } else {
    return 'the value is  not a valid Temperature'
  }
}

console.log(convertTemperature(25, 'C'))
console.log(convertTemperature(86, 'F'))
