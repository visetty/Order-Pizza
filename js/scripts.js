//backend-logic

function pizzaOrder(size, toppings, delivery) {
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

//prototype to know pizza price
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
    //variable to get value of pizza selected
    var sizeSelected = $("#pizzasize").val();
    //alert to select pizza size
    if (sizeSelected === "selected") {
      return alert("select valid size option");
    }
    //array for selected toppings
    var toppingSelected = [];
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingSelected.push($(this).val());
    });

    //variable to get delivery option input
    var deliveryChoice = $("input:radio[name=delivery]:checked").val();
    //alert if delivery options not selected
    if (deliveryChoice !== "Delivery" && deliveryChoice !== "Pick-up") {
      return alert("select delivery option");
    }



    var order = new pizzaOrder(sizeSelected, toppingSelected, deliveryChoice);

    //if customer selected delivery ad delivery option
    if (deliveryChoice === "Delivery") {
      $("#customeraddress").show();
    } else {
      $("#customeraddress").hide();
      $("form#orderselection").hide();
      $("#ordersummary").show();
      $(".sizeoforder").html( sizeSelected);
      $(".yourtoppings").html( toppingSelected.toString()); //method .toString added to toppingSelected to have them divided by comma
      $(".totalcost").html('$'+order.total());
      $(".yourdeliverytype").html(deliveryChoice);
      $("#ordersummary").show();
    }
    //customer addredd .submit function
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


    //confirmorder click leads to the following
    $("#confirmorder").click(function(event) {
      event.preventDefault();
      $("#ordersummary").hide();

      if (deliveryChoice === "Delivery") {
        $("#customer-delivery").show();
      } else {
        $("#customer-pickup").show();
      }

    //$("#changeorder").click(function(event) {
    //  event.preventDefault();
    //  $("#customer-delivery").hide();
    //  $("#customer-pickup").hide();
    //  $("#orderselection").show();
    //});


    });

    //$("#ordersummary").reset();
    //$("#customeraddress").reset();
    //$("#orderselection").reset();


  });
});
