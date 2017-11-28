var makeJumpyDancer = class makeJumpyDancer extends makeDancer {

  step () {
    super.step();
    this.$node.addClass('patrick');
    this.$node.animate({
      top: 100
    }, 600, function() {
      // Animation complete.
    });
    this.$node.animate({
      top: 900
    }, 600, function() {
      // Animation complete.
    });
  }
};