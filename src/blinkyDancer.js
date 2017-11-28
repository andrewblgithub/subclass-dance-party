var makeBlinkyDancer = class makeBlinkyDancer extends makeDancer {

  step () {
    super.step();
    this.$node.addClass('krabby');
    this.$node.animate({
      backgroundSize: '80%'
    }, 600, function() {
      // Animation complete.
    });
    this.$node.animate({
      backgroundSize: '40%'
    }, 600, function() {
      // Animation complete.
    });
  }
};