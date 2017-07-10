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

  it("should throw an exception when play requires war", function() {
    var [player1, player2] = game.getPlayers();

    player1.add([new Card("Ace", "Spades")]);
    player2.add([new Card("Ace", "Spades")]);

    for (var i = 0; i < player1.numCards() - 1; i++)
      player1.play();

    for (var j = 0; j < player2.numCards() - 1; j++)
      player2.play();

    expect(function() {
      game.play();
    }).toThrowError("play requires war");
  });

  it("should be able to play a round", function() {
    var winner = null;

    while (winner == null) {
      try {
        winner = game.play();
      } catch (e) {
        game = new Game(numPlayers);
      }
    }

    // expect();
  });
});
