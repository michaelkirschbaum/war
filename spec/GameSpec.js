describe("Game", function() {
  var Game = require('../lib/Game');
  var Deck = require('../lib/Deck');
  var game;

  beforeAll(function() {
    var numPlayers = 2;

    game = new Game(numPlayers);
  });

  it("a deck should be evenly split among players", function() {
    var numCards;

    game.getPlayers().forEach(function(player) {
      numCards += player.getCards().length;
    });

    var deck = new Deck();

    expect(numCards).toEqual(deck.getSize());
  });

  it("should allow more than two players", function() {
    // expect();
  });
});
