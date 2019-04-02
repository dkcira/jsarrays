// findIndex: same as find except that it returns the index of the
//            first element found instead of the element itself
//            takes as element a callback function that returns
//            true of false (just like find)
//            use indexOf for array of primitive values
//            use findIndex for array of complex elements

const users = [
	{id: 'af35', name: 'john'},
	{id: '6gbe', name: 'mary'},
	{id: '932j', name: 'gary'},
];

const user = users.findIndex( user => user.id === '6gbe');
console.log(user); // 1