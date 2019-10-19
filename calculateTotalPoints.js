const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (
  distance,
  hillSize,
  kPoint,
  styleNotes,
  windFactor,
  gateFactor
) => {
  const distancePoints = calculateDistancePoints.calculateDistancePoints(
    distance,
    hillSize,
    kPoint
  );
  const stylePoints = calculateStylePoints(styleNotes);
  const totalPoints = distancePoints + stylePoints + windFactor + gateFactor;
  return totalPoints.toFixed(1);
};

module.exports = calculateTotalPoints;