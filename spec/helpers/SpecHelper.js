beforeEach(function () {
  jasmine.addMatchers({
    instanceOf: function() {
      return {
        compare: function (actual, expected) {
          return {
            pass: actual instanceof expected
          };
        }
      };
    },

    withinRange: function() {
      return {
        compare: function (actual, expected, range) {
          return {
            pass: expected >= actual - range && expected <= actual + range
          };
        }
      };
    }
  });
});
