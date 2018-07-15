//backend-logic

function pizzaOrder(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

pizzaOrder.prototype.total = function() {
  this.price=0;
  if (this.size === "small") {
    this.price += 7;
  } else if (this.size === "medium") {
    this.price += 9;
  } else if (this.size === "large") {
    this.price += 11;
  } else if (this.size === "X-large") {
    this.price +=13;
  }

  if (this.delivery === "Delivery") {
  this.price += 2;
  }

  this.price += this.toppings.length * 1;
  return this.price;
}



//user-interface-logic
//getting the values of ordersize, toppings, delivery type

$(document).ready(function() {
  $("form#orderselection").submit(function(event) {
    event.preventDefault();

    var sizeSelected = $("#pizzasize").val();
    if (sizeSelected === "selected") {
      return alert("select valid size option");
    }
    var toppingSelected = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingSelected.push($(this).val());
    });


    var deliveryChoice = $("input:radio[name=delivery]:checked").val();
    //alert if delivery options not selected
    if (deliveryChoice !== "Delivery" || deliveryChoice !== "Pick-up") {
      return alert("select delivery option");
    }



    var order = new pizzaOrder(sizeSelected, toppingSelected, deliveryChoice);


    if (deliveryChoice === "Delivery") {
      $("#customeraddress").show();
    } else {
      $("#customeraddress").hide();
      $("form#orderselection").hide();
      $("#ordersummary").show();
      $(".sizeoforder").html( sizeSelected);
      $(".yourtoppings").html( toppingSelected);
      $(".totalcost").html('$'+order.total());
      $(".yourdeliverytype").html(deliveryChoice);
      $("#ordersummary").show();
    }

    $("form#customeraddress").submit(function(event) {
      event.preventDefault();
      var name=$("input#customername").val();
      var street=$("input#street").val();
      var city=$("input#city").val();
      var state=$("input#state").val();
      var zipcode=$("input#zipcode").val();
      $(".name").text(name);
      $(".street").text(street);
      $(".city").text(city);
      $(".state").text(state);
      $(".zipcode").text(zipcode);
      //$("#customeraddress").hide();
      $("#ordersummary").show();
      $(".sizeoforder").html( sizeSelected);
      $(".yourtoppings").html( toppingSelected);
      $(".totalcost").html('$'+order.total());
      $(".yourdeliverytype").html(deliveryChoice);
      $("#customeraddress").hide();
      $("form#orderselection").hide();
    });

    $("#ordersummary").click(function(event) {
      event.preventDefault();
      $("#ordersummary").hide();

      if (deliveryChoice === "Delivery") {
        $("#customer-delivery").show();
      } else {
        $("#customer-pickup").show();
      }
    });

    //$("#ordersummary").reset();
    //$("#customeraddress").reset();
    //$("#orderselection").reset();


  });
});
