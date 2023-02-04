var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mourse: 1,
  pen: 25,
};

// when you know the property name, use dot notation
var perCount = shoppingCart.pen;
// alternative system
// when you know the specific  property name, use dot notation
var perCount2 = shoppingCart["pen"];

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);

console.log(shoppingCart);
console.log(propertiesValues);
console.log(properties);
console.log(perCount, perCount2);

set property value
shoppingCart.log(shoppingCart);
shoppingCart["mourse"] = 29;
console.log(shoppingCart);

shoppingCart[propertyName]
