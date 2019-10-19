const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('totalDistancePionts', () => {
  const testValues = {
    // distancePoints: [distance, hillSize, kPoint];
    153: [227.5, 225, 200],
    121.2: [201, 225, 200],
    86: [111, 109, 98],
    77: [106.5, 109, 98],
    85.2: [134, 134, 120],
    55.5: [117.5, 134, 120],
  };

  Object.entries(testValues).forEach(entry => {
    const distancePoints = entry[0];
    const args = entry[1];
    const distance = args[0];
    const hillSize = args[1];
    const kPoint = args[2];

    it(`should return distance points: ${distancePoints} for:
    hill size: ${hillSize}, K-Point: ${kPoint}, distance: ${distance}`, () => {
      const actual = calculateDistancePoints.calculateDistancePoints(
        distance,
        hillSize,
        kPoint
      );

      const expected = distancePoints;

      assert.equal(actual, expected);
    });
  });
});