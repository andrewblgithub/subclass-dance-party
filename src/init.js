$(document).ready(function() {
  window.dancers = [];
  
  music.loop = true;
  music.setAttribute('src', './sounds/SpongeBob SquarePants - The Rake Hornpipe.mp3');
  music.play();


  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(dancer => wumbify(dancer));
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    soundCheck(dancer);
    audio.play();
    
    $('body').append(dancer.$node);
  });
});

function wumbify(dancer) {
  dancer.$node.addClass('wumbo');
  dancer.$node.css('top', '800px');
}

function soundCheck(dancer) {
  if (dancer.$node.hasClass('spongebob')) {
    audio.setAttribute('src', './sounds/Bring it around.mp3');
  } else if (dancer.$node.hasClass('patrick')) {
    audio.setAttribute('src', './sounds/lee-leedle.mp3');
  } else if (dancer.$node.hasClass('krabby')) {
    audio.setAttribute('src', './sounds/krabby_patty.mp3');
  }
}

var music = document.createElement('audio');
var audio = document.createElement('audio');