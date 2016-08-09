//Use Bracket Notation to Find the Last Character in a String
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName);

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


//Nest one Array within Another Array
var ourArray = [["the universe", 42], ["everthing", 101010]];

//Access Array Data with Indexes
var ourArray = [1,2,3];
var ourData = ourArray[0];

//Access MultiDimensional Arrays With Indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
console.log(myArray[2][1]);

//Manipulate Arrays With push
var  myArray = [["John, 23"], ["cat", 2]];
myArray.push(["dog", 3])
console.log(myArray[2][0]);

//Manipulate Arrays With pop
var oneDown = [1,4,6].pop();
console.log(oneDown);

var three = [1,2,3];
console.log(three);
var aNum = three.pop();
console.log(aNum);

//Manipulate Arrays With pop
