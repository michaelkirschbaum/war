describe("Player", function() {
  var Player = require('../lib/Player');
  var Card = require('../lib/Card');
  var Deck = require('../lib/Deck');
  var player;

  beforeEach(function() {
    var player = new Player();
    var deck = new Deck();
    var card;

    for (var i = 0; i < deck.getSize() / 2; i++) {
      card = deck.draw();
      player.add(card);
    }
  });

  it("should be able to play a card", function() {
    expect(player.play() instanceof Card).toEqual("Card");
  });

  it("should be able to play war", function() {
    var cards = player.war();

    expect(cards.length).toEqual(2);

    var [card1, card2] = cards;

    expect(card1 instanceof Card).toBeTruthy();
    expect(card2 instanceof Card).toBeTruthy();
  });

  describe("when player is out of cards", function() {
    beforeEach(function() {
      for (var i = 0; i < player.numCards(); i++)
        player.play();
    });

    it("should throw an exception when playing", function() {
      expect(function() {
        player.play();
      }).toThrowError("player is out of cards");
    });

    it("should thrown an exception when playing war", function() {
      expect(function() {
        player.war();
      }).toThrowError("player is out of cards");
    });
  });

  describe("when player has one card", function() {
    beforeEach(function() {
      for (var i = 0; i < player.numCards() - 1; i++)
        player.play();
    });

    it("should thrown an exception if drawing during war", function() {
      expect(function() {
        player.war();
      }).toThrowError("player doesn't have enough cards");
    });
  });

  describe("when player wins a round", function() {
    var player2;
    var cards;

    beforeEach(function() {
      player2 = new Player();

      for (var i = 0; i < deck.getSize() / 2; i++) {
        card = deck.draw();
        player2.add(card);
      }

      var drawn_cards = [];
      var player_cards = [];
    });

    it("should be able to add cards to hand", function() {
      cards.push(player.play());
      cards.push(player.play());
      cards.push(player.play());
      cards.push(player.play());

      player2.add(cards);

      for (var i = 0; i < player2.numCards(); i++)
        player_cards.push(player2.play());

      expect(JSON.stringify(player_cards.slice(player_cards.length - cards.length, player_cards.length))).toEqual(JSON.stringify(cards));
    });
  });
});
