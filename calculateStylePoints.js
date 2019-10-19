// Style notes have to be array

const calculateStylePoints = styleNotes => {
  const stylePoints = styleNotes;

  const minValueIndex = stylePoints.findIndex(
    i => i == Math.min(...stylePoints)
  );
  stylePoints.splice(minValueIndex, 1);

  const maxValueIndex = stylePoints.findIndex(
    i => i == Math.max(...stylePoints)
  );
  stylePoints.splice(maxValueIndex, 1);

  const totalStylePoints = stylePoints.reduce((a, b) => a + b);

  return totalStylePoints;
};

module.exports = calculateStylePoints;