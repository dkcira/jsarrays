// concat -> merge two or more arrays
const numbers = [1, 2, 3];
const otherNumbers = [4, 5, 6];

const numbersConcatenated = numbers.concat(otherNumbers);
console.log(numbersConcatenated); // [1, 2, 3, 4, 5, 6]

// merge many arrays
function concatAll(arr, ...arrays){
	return arr.concat(...arrays);
};


console.log(concatAll([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]));