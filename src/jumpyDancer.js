var makeJumpyDancer = class makeJumpyDancer extends makeDancer {

  step () {
    super.step();
    this.$node.addClass('patrick');
    if (!this.$node.hasClass('wumbo')) {
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
    } else {
      this.$node.animate({
        top: 800
      }, 600, function() {
        // Animation complete.
      });
      this.$node.animate({
        top: 900
      }, 600, function() {
        // Animation complete.
      });
    }
  }
};