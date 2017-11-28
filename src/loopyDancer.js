var makeloopyDancer = class makeloopyDancer extends makeDancer {

  step () {
    super.step();
    if (!this.$node.hasClass('wumbo')) {
      this.$node.addClass('spongebob');
    } else {
      this.$node.removeClass('spongebob');
      this.$node.addClass('wumbobob')
      this.$node.stop();
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