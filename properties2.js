//array vs objects

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mourse: 1,
  pen: 25,
  shoes: 2,
};

var shoppingitems = ["books", "sunglass", "shoes", "pen"];
var friendAge = [12, 45, 12, 32, 14];

var friendAge = {
  rahim: 12,
  samad: 78,
  karim: 89,
  jamal: 23,
  robi: 32,
  kazi: 13,
};

const keys = Object.keys(shoppingCart);
console.log(keys);
