
function ticket(movie, age, time, discount)  {
  this.movie = movie;
  this.age = age;
  this.time= time;
  this.discount= discount;
};



ticket.prototype.newTicket =  (function() {
  return this.movie + this.age + this.time + this.discount
});

$(function() {

  $("#moviestuff").submit(function(event)  {
    var inputtedDiscount = parseInt($("#discount").val());
    var inputtedTime = parseInt($("#time").val());
    var inputtedAge= parseInt($("#age").val());
    var inputtedMovie= parseInt($("#movie").val());
    //console.log(parseInt($("#movie").val()));
    var ticketFinal = new ticket (inputtedAge, inputtedTime, inputtedDiscount,inputtedMovie);

    $(".results").text(ticketFinal.newTicket());
    console.log(ticketFinal.newTicket())

    event.preventDefault();
  });
});
