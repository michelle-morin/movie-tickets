function Ticket(title, time, age) {
  this.title = title,
  this.time = time,
  this.age = age,
  this.price = 0
}

Ticket.prototype.assignedPrice = function(quantity) {
  if (this.title == "1917") {
    this.price += 15
  } else if (this.title == "Lord of the Rings") {
    this.price += 12
  } else if (this.title == "King Kong (1933)") {
    this.price += 10
  }
  if (this.time == "Matinee") {
    this.price -= 2;
  } else if (this.time == "Nighttime") {
    this.price += 1;
  }
  if (this. age <= 15 || this.age >= 60) {
    this.price -= 2;
  } else {
    this.price = this.price;
  }
  this.price *= quantity;
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
      userTicket.assignedPrice(userQuantity);
      $(".movie-title").html(userMovie);
      $(".showtime").html(userShowTime);
      $(".quantity").html(userQuantity);
      $(".total-price").html(userTicket.price);
      $("#ticket-review").show();
    } else {
      alert("Please enter your age.");
    }

    var confirmationNumber = (Math.random() * 1000000).toFixed(0);

    $("button#purchase").click(function() {
      $("form").hide();
      $("#ticket-review").hide();
      $("#ticket-confirmation").show();
      $(".confirmation-number").html(confirmationNumber);
    });
  });
});

