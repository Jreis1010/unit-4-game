  
 var score = 0
 var wins = 0 
 var losses = 0 
 var total = 0

 function startGame() {

        $('#randomNumber').html[Math.floor((Math.random()*100)+1)];

        total = 0;

 }

// generate a random number after every round

 function increaseScore(number) {
    score = score + number;
 
    if (score === total ) {
      alert('USER WON!');
      reset(score);
      reset(total);
      wins++;
      $('wins').html(wins);
      /// restart game and randomnumber after round ends
      // add a point to wins but, IF loss a point to the losses 
    } 
    else  {
        reset(score);
        reset(total); 
        losses++;
        $('losses').html(losses);
    }

    $('#score').html(score);
  }

function reset() {
    if (wins++) {
    $('#score').reset();
}

 }


  $('#crystal-img1').on('click', function(e) {
    e.preventDefault();

    increaseScore(4);
    
  })

  $('#crystal-img2').on('click', function(e) {
    e.preventDefault();

    increaseScore(7);
  })

  $('#crystal-img3').on('click', function(e) {
    e.preventDefault();

    increaseScore(2);
  })

  $('#crystal-img4').on('click', function(e) {
    e.preventDefault();

    increaseScore(1);
  })

})
})