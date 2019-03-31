
// modify elements
const numbers = [1,2,3,4];
const numbersPlusOne = numbers.map(n => n + 1); // adds one to every element
console.log(numbersPlusOne);

// keep only parts of an object
const allActivities = [
  {title: 'My activity', coordinates: [50.123, 3.291]},
  {title: 'Another activity', coordinates: [1.238, 4.292]}
  // etc
];
const allCoordinates = allActivities.map(activity => activity.coordinates);
console.log(allCoordinates);