describe("Game", function() {
  var Game = require('../lib/Game');
  var Deck = require('../lib/Deck');
  var game;

  beforeEach(function() {
    var numPlayers = 2;

    game = new Game(numPlayers);
  });

  it("deck should be split evenly among players", function() {
    var numCards;

    game.getPlayers().forEach(function(player) {
      numCards += player.getCards().length;
    });

    var deck = new Deck();

    expect(game.getPlayers().length).toEqual(numPlayers);

    expect(numCards).toEqual(deck.getSize());

    expect(game.getDeck().getSize()).toEqual(0);
  });
/*
  describe("when there are more than two players", function() {
    beforeEach(function() {
      var numPlayers = 3;

      more_than_two_game = new Game(numPlayers);
    });
  }); */
});
