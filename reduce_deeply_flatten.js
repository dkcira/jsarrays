// use reduce + recursion
function flatDeep(arr){
	return arr.reduce( (flattenArray, element) => {
		return Array.isArray(element)
		? [...flattenArray, ...flatDeep(element)]
		: [...flattenArray, element]
	}, [])
};

nestedArray=[1, 2, 3, [4, [[[5, [6, 7]]]], 8]];
console.log(nestedArray);
console.log(flatDeep(nestedArray)); // [1, 2, 3, 4, 5, 6, 7, 8]
