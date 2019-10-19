const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('totalStylePoints', () => {
  const testValues = {
    // stylePoints: [note1, note2, note3, note4, note5];
    55: [18.0, 18.5, 17.5, 18.5, 18.5],
    55.5: [18.5, 18.5, 18.5, 18.0, 18.5],
    52: [17.5, 17.5, 17.5, 17.0, 17.0],
    51.5: [17.0, 17.0, 17.5, 17.0, 17.5],
  };

  Object.entries(testValues).forEach(entry => {
    const stylePoints = entry[0];
    const notes = entry[1];

    it(`should return total style points: ${stylePoints} for notes: ${notes}`, () => {
      const actual = calculateStylePoints(notes);

      const expected = stylePoints;

      assert.equal(actual, expected);
    });
  });
});