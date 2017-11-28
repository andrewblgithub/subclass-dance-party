var wumbify = function(dancer) {
  dancer.$node.addClass('wumbo');
  dancer.$node.css('top', '800px');
};

var soundCheck = function(dancer) {
  if (dancer.$node.hasClass('spongebob')) {
    audio.setAttribute('src', './sounds/Bring it around.mp3');
    audio.volume = 0.5;
  } else if (dancer.$node.hasClass('patrick')) {
    audio.setAttribute('src', './sounds/lee-leedle.mp3');
    audio.volume = 1;
  } else if (dancer.$node.hasClass('krabby')) {
    audio.setAttribute('src', './sounds/krabby_patty.mp3');
    audio.volume = 1;
  } else if (dancer.$node.hasClass('plankton')) {
    audio.setAttribute('src', './sounds/All Mine.mp3');
    audio.volume = 0.6;
  }
};

var collisionCheck = function(left, top) {
  var plankLeft = left;
  var plankTop = top;
  window.dancers.forEach((dancer, index) => {
    var dancerLeft = dancer.$node.css('left');
    dancerLeft = dancerLeft.slice(0, dancerLeft.length - 2);
    dancerLeft = parseInt(dancerLeft);
    var dancerTop = dancer.$node.css('top');
    dancerTop = dancerTop.slice(0, dancerTop.length - 2);
    dancerTop = parseInt(dancerTop);
    if (!dancer.$node.hasClass('plankton')) {
      if (Math.abs(plankLeft - dancerLeft) <= 80 && Math.abs(plankTop - dancerTop) <= 80) {
        explosion.play();
        dancer.$node.css('background-image', 'url("http://bestanimations.com/Military/Explosions/explosion-animation-1.gif")');
        setTimeout(() => {
          $('#' + dancer.$node.attr('id')).remove();
        }, 500);
        window.dancers.splice(index, 1);
      }
    }
  });
};

var music = document.createElement('audio');
var audio = document.createElement('audio');
var explosion = document.createElement('audio'); 

var plankton = null;
var lastDancer = null;
var counter = 0;

$(document).ready(function() {
  window.dancers = [];

  explosion.setAttribute('src', './sounds/Explosion+3.mp3');
  explosion.volume = 0.3;
  music.loop = true;
  music.setAttribute('src', './sounds/SpongeBob SquarePants - The Rake Hornpipe.mp3');
  music.volume = 0.6;
  music.play();

  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(dancer => wumbify(dancer));
    music.setAttribute('src', './sounds/SpongeBob Squarepants - Wumbo.mp3');
    music.loop = false;
    music.volume = 1;
    audio.pause();
    music.play();
    music.addEventListener('ended', function() {
      music.currentTime = 0;
      music.setAttribute('src', './sounds/SpongeBob SquarePants - The Rake Hornpipe.mp3');
      music.loop = true;
      music.volume = 0.6;
      music.play();
    });
  });

  $('.dancefloor').click(function(event) {
    if (lastDancer) {
      var dancer = new lastDancer(event.pageY, event.pageX, Math.random() * 1000);
      soundCheck(dancer);
      window.dancers.push(dancer);
      audio.play();
      dancer.$node.attr('id', counter++);
      $('.dancefloor').append(dancer.$node);
    }
  });
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    

    var dancer = new dancerMakerFunction(
      $('.dancefloor').height() * Math.random(),
      $('.dancefloor').width() * Math.random(),
      Math.random() * 1000
    );

    soundCheck(dancer);
     
    if (!plankton && dancer.$node.hasClass('plankton')) {
      plankton = dancer;
    } else if (plankton && dancer.$node.hasClass('plankton')) {
      return;
    }

    if (!dancer.$node.hasClass('plankton')) {
      lastDancer = dancerMakerFunction;
    }
    window.dancers.push(dancer);
    audio.play(); 
    dancer.$node.attr('id', counter++);
    $('.dancefloor').append(dancer.$node);
  });

  $(document).keydown(function(event) {
    if (plankton) {
      var top = plankton.$node.css('top');
      top = top.slice(0, top.length - 2);
      top = parseInt(top);
      var left = plankton.$node.css('left');
      left = left.slice(0, left.length - 2);
      left = parseInt(left);
      if (event.keyCode === 37) {
        //left
        left -= 10;
        plankton.$node.css('left', left.toString() + 'px');
        collisionCheck(left, top);
      } else if (event.keyCode === 38) {
        //up
        top -= 10;
        plankton.$node.css('top', top.toString() + 'px');
        collisionCheck(left, top);
      } else if (event.keyCode === 39) {
        //right
        left += 10;
        plankton.$node.css('left', left.toString() + 'px');
        collisionCheck(left, top);
      } else if (event.keyCode === 40) {
        //down
        top += 10;
        plankton.$node.css('top', top.toString() + 'px');
        collisionCheck(left, top);
      }
    }
  });
});
