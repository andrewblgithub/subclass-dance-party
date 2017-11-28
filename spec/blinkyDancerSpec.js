describe('dancer', function() {

  // spec being used for all dancers

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  // removed because blinkyDancer's behavior has changed
  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(blinkyDancer.$node, 'toggle');
  //   blinkyDancer.step();
  //   expect(blinkyDancer.$node.toggle.called).to.be.true;
  // });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
  describe('loopyDancer', function() {
    it('should apply wumbo animations to loopyDancer lineup button is pressed', function() {
      let loopyDancer = new makeloopyDancer(10, 20, timeBetweenSteps);
      wumbify(loopyDancer);
      expect(loopyDancer.$node.hasClass('wumbo')).to.be.true;
    });
  });
  describe('jumpyDancer', function() {
    it('should apply wumbo animations to jumpyDancer lineup button is pressed', function() {
      let jumpyDancer = new makeJumpyDancer(10, 20, timeBetweenSteps);
      wumbify(jumpyDancer);
      expect(jumpyDancer.$node.hasClass('wumbo')).to.be.true;
    });
  });
});
