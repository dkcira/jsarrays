// take an array of values and reduce to one value
// two parameters and one callback function, the reducer

const numbers = [37,12,28,4,9];

// parameters:
// - accumulator (total)
// - current value of the array (optional, would be initial value of 'total' in this case)
// - current index (n)
// - array reduce was called upon (numbers)
const total = numbers.reduce((total, n) => total + n );
console.log(numbers, total); // 90


// use an initial value of -1 for 'total'
const othertotal = numbers.reduce((total, n) => total + n, -1);
console.log(numbers, othertotal);

// map implementation with reduce
// use initial empty array [], populate it with the transformed element as you go
const myMap = (arr, fn) => {
	return arr.reduce( (mappedArr,  element) => {
		return [...mappedArr, fn(element)]
	}, [])
};

console.log(myMap([1,2,3,4], n => n + 1)); // [2,3,4,5]

// filter implementation with reduce
const myFilter = (arr, fn) => {
	return arr.reduce( (filteredArr, element) => {
		return fn(element) ? [...filteredArr] : [...filteredArr, element]; // add element depending on whether fn(element) == true
	}, [])
};

console.log(myFilter([1,2,3,4,5,6], n => n%2 === 0)); // [1,3,5]
