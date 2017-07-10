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
    }
  });
});
