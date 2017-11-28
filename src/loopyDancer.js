var makeloopyDancer = class makeloopyDancer extends makeDancer {

  step () {
    super.step();
    this.$node.addClass('spongebob');
  }
};