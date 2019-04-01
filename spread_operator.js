const numbers = [1, 2, 3];
const numbersCopy = [...numbers]; // shallow copy
console.log(numbersCopy);

const otherNumbers = [4, 5, 6];
const numbersConcatenated = [...numbers, ...otherNumbers];
console.log(numbersConcatenated);