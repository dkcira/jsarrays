// execute something for each array element
// takes function as parameter
// the function itself has 3 parameters:
// 1. the current value
// 2. the index
// 3. the array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(console.log)
// current value index array
// 1 0 [ 1, 2, 3, 4, 5 ]
// 2 1 [ 1, 2, 3, 4, 5 ]
// 3 2 [ 1, 2, 3, 4, 5 ]
// 4 3 [ 1, 2, 3, 4, 5 ]
// 5 4 [ 1, 2, 3, 4, 5 ]

numbers.forEach( (v, i, arr) => {
	console.log(v);
});
// 1
// 2
// 3
// 4
// 5