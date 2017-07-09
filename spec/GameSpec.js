describe("Game", function() {
  var Game = require('../lib/Game');
  var Deck = require('../lib/Deck');
  var Card = require('../lib/Card')
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

  it("should throw an exception when play requires war", function() {
    var [player1, player2] = game.getPlayers();
    player1.add([new Card("Ace", "Spades")]);
    player2.add([new Card("Ace", "Spades")]);

    for (var i = 0; i < player1.numCards() - 1; i++) {
      player1.play();
      player2.play();
    }

    expect(function() {
      game.play();
    }).toThrowError("players must war");
  });

  describe("when not in a war", function() {
    it("should be able to play a round", function() {
      var winner = null;
      var loser = null;
      var numCards = game.getPlayers()[0].numCards();

      expect(numCards).toEqual(game.getPlayers()[1].numCards());

      try {
        winner = game.play();
      } catch (e) {
        while (winner == null) {
          try {
            winner = game.war();
          } catch (e) {
            break;
          }
        }
      }

      // identify loser
      game.getPlayers().forEach(function(player) {
        if (player != winner)
          loser = player;
      });

      // cards are allocated after play
      if (winner) {
        expect(winner.numCards()).toBeGreaterThan(numCards);
        expect(winner.numCards() - numCards).toEqual(numCards - loser.numCards());
      }
    });

    it("should not be able to play war", function() {
      expect(function() {
        game.war();
      }).toThrowError("players are not currently in a war");
    });

    describe("when a player has no cards left", function() {
      var player;

      beforeEach(function() {
        player = game.getPlayers()[0];

        for (var i = 0; i < player.numCards(); i++)
          player.play();
      });

      it("should be removed from the game", function() {
        game.play();

        expect(game.getPlayers()).not.toContain(player);
      });
    });

    describe("when all but one player has no cards left", function() {
      var players;
      var winner;

      beforeEach(function() {
        players = game.getPlayers();
        winner = players[0];

        players.slice(1, players.length).forEach(function(player) {
          for (var i = 0; i < player.numCards(); i++) {
            player.play();
          }
        });
      });

      it("should return the winner", function() {
        expect(game.play()).toEqual(winner);
      });

      it("should be able to start a new game", function() {
        var numPlayers = players.length;

        game.play();
        expect(game.getPlayers().length).toEqual(1);

        game.new();
        expect(game.getPlayers().length).toEqual(numPlayers);
      });
    });

    describe("when all players have no cards left", function() {
      beforeEach(function() {

      });

      it("should not return", function() {

      });

      it("should be able to start a new game", function() {

      });
    });
  });

  describe("when in a war", function() {
    beforeEach(function() {});

    it("should not be able to play a round", function() {

    });

    it("should be able to play war", function() {

    });

    describe("when a player has one card left", function() {
      it("should be removed from the game", function() {

      });

      it("should be removed from the game with no cards left", function() {

      });
    });

    describe("when all but one player has no cards left", function() {
      it("the remaining player should win the war", function() {

      });
    });

    describe("when all players have no cards left", function() {
      it("the cards should go to the players with the next highest card", function() {

      });
    })
  });
});
