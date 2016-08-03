/****************************************************
*            Convert Celsius to Fahrenheit          *
****************************************************/
function convertToF(celsius) {
  var fahrenheit;
  fahrenheit = (5/9) * celsius + 32;
  return fahrenheit;
}

console.log(convertToF(0));
console.log(convertToF(-30));

/****************************************************
*         Escaping Literal Quotes in Strings        *
****************************************************/
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
