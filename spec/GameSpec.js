describe("Game", function() {
  var Game = require('../lib/Game');
  var Deck = require('../lib/Deck');
  var numPlayers;

  beforeEach(function() {
    numPlayers = 3
    var game = new Game(numPlayers);
  });

  it("should be evenly split among players", function() {
    numPlayers = 4;
    game = new Game(numPlayers);

    var numCards = 0;
    game.getPlayers().forEach(function(player) {
      numCards += player.numCards();
      expect(player.numCards()).toEqual((new Deck(numPlayers)).size() / 4);
    });
  });
});
