//backend-logic

var yourPizzaOrder = function pizzaOrder(size, toppings, delivery, price) {
  this.size = pizzasize;
  this.toppings = toppingspick;
  this.delivery = delivery;
  this.price = 0;
}

pizzaOrder.prototype.price = function() {
  if (this.size === "small") {
    this.price += 7;
  } else if (this.size === "medium") {
    this.price += 9;
  } else if (this.size === "large") {
    this.price += 11;
  } else if (this.size === "X-large") {
    this.price +=13;
  }
}

if (this.delivery === "delivery") {
  this.price += 2;
}
