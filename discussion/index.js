// Mini Activity 1
function getShirtColor(day) {
    // Stretch Goal
    if (typeof day !== "string") {
      console.log("Invalid Input. Please input a string.");
      return;
    }
  
    const lowerCaseDay = day.toLowerCase();
  
    switch (lowerCaseDay) {
      case "monday":
        console.log(`Today is Monday, Wear Black`);
        break;
      case "tuesday":
        console.log(`Today is Tuesday, Wear Green`);
        break;
      case "wednesday":
        console.log(`Today is Wednesday, Wear Yellow`);
        break;
      case "thursday":
        console.log(`Today is Thursday, Wear Red`);
        break;
      case "friday":
        console.log(`Today is Friday, Wear Violet`);
        break;
      case "saturday":
        console.log(`Today is Saturday, Wear Blue`);
        break;
      case "sunday":
        console.log(`Today is Sunday, Wear White`);
        break;
      default:
        console.log("Invalid Input. Enter a valid day of the week.");
        break;
    }
  }
  
  // Output
  getShirtColor("Monday"); 
  getShirtColor("tuesday"); 
  getShirtColor("WeDNesday"); 
  getShirtColor("tHuRsDaY"); 
  getShirtColor("friday");
  getShirtColor("SATURDAY"); 
  getShirtColor("sunday");  
  getShirtColor("April");
  // Stretch Goal 
  getShirtColor(12345); 

// Mini Activity 2
function gradeEvaluator(grade) {
    let letterDistinction;

    switch (true) {
    case grade >= 90:
        letterDistinction = "A";
        break;
    case grade >= 80:
        letterDistinction = "B";
        break;
    case grade >= 71:
        letterDistinction = "C";
        break;
    case grade <= 70:
        letterDistinction = "F";
        break;
    default:
        letterDistinction = "Invalid";
        break;
    }

    return letterDistinction;
}

let letterDistinction1 = gradeEvaluator(85);
let letterDistinction2 = gradeEvaluator(90);
let letterDistinction3 = gradeEvaluator(70);
let letterDistinction4 = gradeEvaluator(71);

console.log(letterDistinction1);
console.log(letterDistinction2);
console.log(letterDistinction3);
console.log(letterDistinction4);

// Ternary Operator
/*
  Ternary Operator
  - a shorthand way of writing if-else statement

  syntax:
  condition ? if-statemenet : else-statement

  */

  /*
  Let price = 5000;

  if (price > 1000) {
    console.log('Price is over 1000')
  } else {
    console.log('Price is less than 1000')
  }
  */

let price = 100
price > 1000 ? console.log('Price is over 1000') : console.log('Price is less than 1000')

let hero = 'Anpan Man';
hero === 'Vegeta' ? console.log('You are the Prince of all Saiyans') : console.log('You are not even royalty');

// else statement in ternary operation is required

let villain = 'Harvey Dent';
villain == 'Harvey Dent' 
? console.log('You are supposed to be the chose one') 
: console.log('Not quite villainous yet')

/* 
Ternary Operators are not meant for complex if-else trees. However, its advantage
with our regular if else, is not that it's short but also, ternary operation implicity returns
or it can return without the return keyword
*/

let robin = 'Dick Grayson';
let currentRobin = 'Tim Drake';

let isFirstRobin = currentRobin === robin
? true
:false;
console.log(isFirstRobin);

// else if with ternary operator
let a = 7;

a === 5
? console.log('A')
: (a === 10 ? console.log('A is 10'): console.log('A is not  or 10') )