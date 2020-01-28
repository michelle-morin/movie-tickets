function Ticket(title, time, age) {
  this.title = title;
  this.time = time;
  this.age = age;
}

Ticket.prototype.assignedPrice = function() {
  var price;
  if (this.title == "1917") {
    price = 15
  } else if (this.title == "Lord of the Rings") {
    price = 12
  } else if (this.title == "King Kong (1933") {
    price = 10
  }
  if (this.time == "Matinee") {
    price = price - 2;
  } else if (this.time == "Nighttime") {
    price = price + 1;
  }
  if (this. age <= 15 || this.age >= 60) {
    price = price - 2;
  } else {
    price = price;
  }
  return price;
} 

//Front-end logic

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userMovie = $("#movie-title").val();
    var userShowTime = $("#showtime").val();
    var userAge = parseInt($("input#user-age").val());
    var userQuantity = parseInt($("#movie-time").val());

    var userTicket = new Ticket(userMovie, userShowTime, userAge);

    if (userAge) {
      var pricePerTicket = userTicket.assignedPrice();
      var totalPrice = pricePerTicket * userQuantity;
      $(".movie-title").html(userMovie);
      $(".showtime").html(userShowTime);
      $(".quantity").html(userQuantity);
      $(".total-price").html(totalPrice);
      $("#ticket-review").show();
    } else {
      alert("Please enter your age.");
    }

    $("button#purchase").click(function() {
      $("form").hide();
      $("#ticket-review").hide();
      $("#ticket-confirmation").show();
    });
  });
});

