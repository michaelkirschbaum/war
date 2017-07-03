describe("Player", function() {
  var Player = require('../lib/Player');
  var player;

  beforeEach(function() {
    var player = new Player();
  });

  it("should be able to play a card", function() {
    expect(true).toEqual(false);
  });

  it("should be able to play war", function() {
    expect(true).toEqual(false);
  });

  describe("when player is out of cards", function() {
    beforeEach(function() {
      expect(true).toEqual(false);
    });

    it("should throw an exception when playing", function() {
      expect(true).toEqual(false);
    });
  });

  describe("when player has one card", function() {
    beforeEach(function() {
      expect(true).toEqual(false);
    });

    it("should thrown an exception if drawing during war", function() {
      expect(true).toEqual(false);
    });
  });

  it("should be able to add won cards to hand", function() {
    expect(true).toEqual(false);
  });
});
