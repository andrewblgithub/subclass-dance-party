var makeBlinkyDancer = class makeBlinkyDancer extends makeDancer {

  step () {
    super.step();
    this.$node.addClass('krabby');

    if (this.$node.hasClass('wumbo')) {
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
    } else {
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
  }
};