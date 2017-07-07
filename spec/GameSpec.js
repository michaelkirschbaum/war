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
      numCards += player.numCards();
    });

    expect(game.getPlayers()[0].numCards()).toEqual(game.getPlayers()[1].numCards());
    expect(numCards).toEqual((new Deck()).getSize());
  });

  describe("when there are more than two players", function() {
    beforeEach(function() {
      numPlayers = 3;
      game = new Game(numPlayers);
    });

    it("should allocate cards to each player", function() {
      expect(game.numPlayers().toEqual(numPlayers));
    });
  });

  it("should be able to play a round", function() {});

  describe("when a player runs out of cards", function() {});

  describe("when all but one player runs out of cards", function() {});

  describe("when all players run out of cards", function() {});
});
