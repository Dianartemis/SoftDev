/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
    	have questions about,
    		or otherwise deem notable.
    		
    		Write with your future self or teammates in mind.
    		
    		If you find yourself falling out of flow mode, consult 
    		other teams
    		MDN

   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// Team Dark Lord Chuckles the Silly Pig :: Lauren Lee, Thomas Zhang, Diana Akhmedova  
// SoftDev pd7
// K28 -- Getting more comfortable with the dev console and the DOM
// 2023-04-05w
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)

console.log("AYO"); // prints "AYO" in the console

var i = "hello"; // creates a variable i with the String "hello"
var j = 20; // creates a variable j with the integer 20


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30; // creates a variable j with the integer 30
  return j+x; // returns the sum of j and x
};


//instantiate an object
var o = { 'name' : 'Thluffy',               // creates a dictionary object o, containing...
          age : 1024,                       // an integer value for the age
          items : [10, 20, 30, 40],         // an array of items
          morestuff : {a : 1, b : 'ayo'},   // a dictionary of morestuff
          func : function(x) {              // a function func that returns the sum of x and 30
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist"); // gets the ordered list with the id "thelist" and sets it to a variable called list
  var newitem = document.createElement("li"); // creates a list element (<li>) and sets it equal to newitem
  newitem.innerHTML = text; // sets newitem equal to text
  list.appendChild(newitem); // appends newitem to the end of the ordered list,
};                           // which generates the next number on the list with the corresponding text


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li'); // gets the items with the <li> tag and sets them to a variable called listitems
  listitems[n].remove(); // removes the nth item in the ordered list,
};                       // then each number on the ordered list changes correspondingly


var red = function() { // sets a variable red equal to a new function
  var items = document.getElementsByTagName("li"); // gets the items with the <li> tag and sets them to a variable called items
  for(var i = 0; i < items.length; i++) { // for loop iterates from zero to the end of the ordered list
    items[i].classList.add('red'); // ??
  }
};


var stripe = function() { // sets a variable stripe equal to a new function
  var items = document.getElementsByTagName("li"); // gets the items with the <li> tag and sets them to a variable called items
  for(var i = 0; i < items.length; i++) { // for loop iterates from zero to the end of the ordered list
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};


//insert your implementations here for...
// FIB
function fib(n) {
  if (n == 0) {
      return 0;
  } if (n == 1) {
      return 1;
  } return (fib(n - 1) + fib(n - 2));
}
console.log("\nRETURNING FIB...");
console.log(fib(0));
console.log(fib(1));
console.log(fib(5));


// FAC
function fac(n) {
  if (n < 2) {
      return 1;
  } return (n * fac(n - 1));
}
console.log("RETURNING FACT...");
console.log(fac(1));
console.log(fac(3));
console.log(fac(5));


// GCD
// is this greatest common denominator or greatest common divisor?
function gcd(a, b) {
  if (a == 0 || b == 0) {
    return 0;
  }
  if (a == 1 || b == 1) {
    return 1;
  } return; // ??
}


// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const myFxn = (param1, param2) => {
  // body
  return retVal;
};


