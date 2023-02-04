function add(number1, number2) {
  console.log(number1, number2);
  var sum = number1 + number2;
  console.log(sum);
  return sum;
  console.log("I need more code");
  return 15;
  return "hello done";
}

add(45, 15);

var total = add(80, 20);

console.log("total", total);

function bringSingara(money) {
  var singraPrice = 10;
  var quantity = money / singraPrice;
  return quantity;
}

var myTaka = 155;
var singras = bringSingara(myTaka);
console.log("Eating Singaras:", singras);

function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const avarage = total / 3;
  return avarage;
}

const assignment1 = 60;
const assignment2 = 59;
const assignment3 = 60;

var myAverage = getAverage(assignment1, assignment2, assignment3);

// var myAverage = getAverage(60, 59, 60);

var mun = myAverage.toFixed(2);
const myPaseInt = parseInt(myAverage);
const myFloatingnum = parseFloat(myAverage);
console.log("my average so far", myAverage);
console.log(mun);
console.log("My paseint", myPaseInt);
console.log("My Floting Number", myFloatingnum);
