describe("Player", function() {
  var Player = require('../lib/Player');
  var Card = require('../lib/Card');
  var player;

  beforeEach(function() {
    var player = new Player();
  });

  it("should be able to play a card", function() {
    expect(typeof(player.play())).toEqual("Card");
  });

  it("should be able to play war", function() {
    
  });

  describe("when player is out of cards", function() {
    beforeEach(function() {

    });

    it("should throw an exception when playing", function() {

    });
  });

  describe("when player has one card", function() {
    beforeEach(function() {

    });

    it("should thrown an exception if drawing during war", function() {

    });
  });

  it("should be able to add won cards to hand", function() {

  });
});
