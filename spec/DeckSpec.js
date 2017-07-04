describe("Deck", function() {
  var Deck = require('../lib/Deck');
  var Card = require('../lib/Card');
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });

  it("should be a French deck", function() {
    expect(deck.getSize()).toEqual(52);
  });

  it("should be able to return a card", function() {
    expect(typeof(deck.draw())).toEqual("Card");
  });

  describe("when all cards have been dealt", function() {
    beforeEach(function() {
      for (var i = 0; i < deck.getSize(); i++)
        deck.draw();
    });

    it("should throw an exception when drawing and create new deck", function() {
      expect(function() {
        deck.draw();
      }).toThrowError("the deck is empty");

      expect(deck.getSize().not.toEqual(0));
    });
  });

  it("should be able to shuffle", function() {
    deck.shuffle();
  });
});
