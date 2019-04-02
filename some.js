// at least one element of the array fulfills a condition

const users = [
		{
			id: 'fe34',
			permissions: ['read', 'write']
		},
		{
			id: 'a198',
			permissions: []
		},
		{
			id: '18aa',
			permissions: ['delete', 'read', 'write']
		},
];

const hasDeletePermission = users.some(
		user => user.permissions.includes('delete')
	);

console.log(hasDeletePermission); // true