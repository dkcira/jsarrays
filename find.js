// find: similar to filter but stops as soon as it finds one 
//       element that passes the test. filter instead will still
//       iterate over the whole array

const users = [
	{id: 'af35', name: 'john'},
	{id: '6gbe', name: 'mary'},
	{id: '932j', name: 'gary'},
];

const user = users.find( user => user.id === '6gbe');
console.log(user);