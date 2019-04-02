// similar to 'some' but tests if all elements pass condition

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

const hasAllReadPermission = users.every(
		user => user.permissions.includes('read')
	);

console.log(hasAllReadPermission); // false