describe("Game", function() {
  var Game = require('../lib/Game');
  var game;

  beforeAll(function() {
    var numPlayers = 2;

    game = new Game(numPlayers);
  });

  

  it("should allow more than two players", function() {
    // expect();
  });
});
