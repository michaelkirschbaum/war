describe("Deck", function() {
  var Deck = require('../lib/Deck');
  var Card = require('../lib/Card');
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });

  it("should be a standard size deck", function() {
    expect(deck.getSize()).toEqual(64);
  });

  it("should be able to return a card", function() {
    expect(typeof(deck.draw())).toEqual("Card");
  });

  describe("when all cards have been dealt", function() {
    
  })
});
