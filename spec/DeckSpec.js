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

    it("should throw an exception when drawing", function() {
      expect(function() {
        deck.draw();
      }).toThrowError("the deck is empty");
    });

    it("should be able to create new deck", function() {
      deck.new();

      expect(deck.getSize().toEqual(52));
    });
  });

  it("should not be able to create new deck until all cards have been dealt", function() {
    expect(function() {
      deck.new();
    }).toThrowError("there are still cards left in the deck");
  });

  it("should be able to shuffle", function() {
    var cards = JSON.stringify(deck.getCards());
    var cards_string = JSON.stringify(cards);

    deck.shuffle();

    expect(cards_string).not.toEqual(JSON.stringify(deck.getCards()));
  });
});
