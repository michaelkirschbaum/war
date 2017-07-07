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

  it("should be able to play a round", function() {
    var winner = game.play();
  });

  it("should not be able to play a round while in war", function() {});

  it("should be able to play war", function() {});

  it("should not be able to war while not in match", function() {});

  describe("when a player has no cards left", function() {});

  describe("when all but one player has no cards left", function() {
    it("should be able to start a new game", function() {});
  });

  describe("when all players have no cards left", function() {});
});
j
