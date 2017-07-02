describe("Deck", function() {
  var Deck = require('../../lib/Deck');
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });

  it("case", function() {
    expect("string").toEqual("string");
  });
});
