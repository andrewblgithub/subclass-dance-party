var makeBlinkyDancer = class makeBlinkyDancer extends makeDancer {

  step () {
    super.step();
    this.$node.toggle();
  }
};