//backend-logic

function pizzaOrder(size, toppings, delivery, price) {
  this.size = size;
  this.toppings = toppings;
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


//user-interface-logic
//getting the values of ordersize, toppings, delivery type

$(document).ready(function() {
  $("form#orderselection").submit(function(event) {
    event.preventDefault();
    var sizeSelected = $("#pizzasize").val();
    var toppingSelected = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingSelected.push($(this).val());
    });

    var deliveryChoice = $("input:radio[name=delivery]:checked").val();

    //alert(deliveryChoice);
  });
});
