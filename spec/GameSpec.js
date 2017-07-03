describe("Game", function() {
  var Game = require('../lib/Game');
  var game;

  beforeAll(function() {
    var numPlayers = 2;

    game = new Game(numPlayers);
  });

  it("a deck should be evenly split among players", function() {
    game.getPlayers();
  });

  it("should allow more than two players", function() {
    // expect();
  });
});
