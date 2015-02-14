$(document).ready(function(){
  var position1 = $('#player1_strip td').first();
  var position2 = $('#player2_strip td').first();
  var player1Counter = 0;
  var player2Counter = 0;

  $(document).on('keyup', function(e) {
    if (e.keyCode == 219) {
      position1.next('#player1_strip td').addClass("active").fadeIn();
      position1 = position1.next();
      player1Counter++;
      if (player1Counter === 16) {
        alert("Player 1 wins");
        location.reload();
      };
    } else if (e.keyCode == 221) {
      position2.next('#player2_strip td').addClass("active");
      position2 = position2.next();
      player2Counter++;
      if (player2Counter === 16) {
        alert("Player 2 wins");
        location.reload();
      };
    }
  });

  $('.restart').click(function () {
    location.reload();
  })

  $('.start').click(function() {
    var player1 = prompt("What is player one's name?");
    var player2 = prompt("What is player two's name?");
    $('#player1_strip td').first().before("<h1 style='display:none'>" + player1 + "</h1>");
    $('#player2_strip td').first().before("<h1 style='display:none'>" + player2 + "</h1>");
    $('h1').show('slow');
    $('h1').effect('slide', 500);
  });

})
