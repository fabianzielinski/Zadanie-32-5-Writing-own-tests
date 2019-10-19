module.exports = {
  calculateDistancePoints: function calculateDistancePoints(
    distance,
    hillSize,
    kPoint
  ) {
    const meterValue = this.meterValue(hillSize);
    const basePionts = this.basePoints(hillSize);
    const distancePoints = basePionts + (distance - kPoint) * meterValue;
    return distancePoints;
  },
  meterValue,
  basePoints,
};

function meterValue(hillSize) {
  const meterValue = 2;
  if (hillSize >= 110 && hillSize < 185) {
    return 1.8;
  }
  if (hillSize >= 185) {
    return 1.2;
  }
  return meterValue;
}

function basePoints(hillSize) {
  const basePoints = 60;
  if (hillSize >= 185) {
    return 120;
  }
  return basePoints;
}