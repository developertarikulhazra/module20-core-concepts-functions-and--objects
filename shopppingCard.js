var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
};

// When you know the specific property name, use dot notation
var penCount = shoppingCart.pen;
// alternative System
// When you know the specific property name, use dot notation
var penCount2 = shoppingCart["pen"];

var propertyName = "books";
var propertyVlue = shoppingCart[propertyName];
// console.log(propertyName, propertyVlue);

var properties = Object.keys(shoppingCart);
var propertiesVlues = Object.values(shoppingCart);

console.log(properties);
console.log(propertiesVlues);
console.log(shoppingCart);

// set property vlues
shoppingCart.mouse = 15;
shoppingCart["mouse"] = 29;
shoppingCart[propertyName] = 89;
console.log(shoppingCart);
