describe("Game", function() {
  var Game = require('../lib/Game');
  var Deck = require('../lib/Deck');
  var Card = require('../lib/Card')
  var game;

  beforeEach(function() {
    var numPlayers = 3;
    game = new Game(numPlayers);
  });

  it("should not allow less than or more than ? players", function() {

  });

  it("deck should be split evenly among players", function() {
    var numCards;

    game.getPlayers().forEach(function(player) {
      numCards += player.numCards();
      expect(player.numCards()).withinRange(game.getPlayers()[0].numCards(), 1);
    });

    expect(numCards).toEqual((new Deck()).getSize());
  });

  it("should throw an exception when play requires war", function() {
    var [player1, player2] = game.getPlayers();
    player1.add([new Card("Ace", "Spades")]);
    player2.add([new Card("Ace", "Spades")]);

    for (var i = 0; i < player1.numCards() - 1; i++) {
      player1.play();
    }

    for (var j = 0; j < player2.numCards() - 1; j++) {
      player2.play();
    }

    expect(function() {
      game.play();
    }).toThrowError("players must war");
  });

  describe("when not in a war", function() {
    it("should be able to play a round", function() {

    });

    it("should not be able to play war", function() {

    });

    describe("when a player has no cards left", function() {
      beforeEach(function() {

      });

      it("should be removed from the game", function() {

      });
    });

    describe("when all but one player has no cards left", function() {
      beforeEach(function() {

      });

      it("should return the winner", function() {

      });

      it("should be able to start a new game", function() {

      });
    });

    describe("when all players have no cards left", function() {
      beforeEach(function() {

        });
      });

      it("should not return", function() {

      });

      it("should be able to start a new game", function() {

      });
    });
  });

  describe("when in a war", function() {
    beforeEach(function() {

    });

    it("should not be able to play a round", function() {

    });

    it("should be able to play war", function() {

    });

    describe("when a player has one card left", function() {
      beforeEach(function() {

      });

      it("should be removed from the game", function() {

      });

      it("should be removed from the game with no cards left", function() {

      });
    });

    describe("when all but one player has no cards left", function() {
      beforeEach(function() {

      });

      it("the remaining player should win the war", function() {

      });
    });

    describe("when all players have no cards left", function() {
      beforeEach(function() {

      });

      it("the cards should go to the players with the next highest card", function() {

      });
    })
  });
});
