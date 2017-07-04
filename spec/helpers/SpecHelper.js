beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }

    instanceOf: function() {
      return {
        compare: function (actual, expected) {
          return
            pass: actual instanceof expected
          }
        }
      };
    }
  });
});
