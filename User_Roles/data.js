const ROLE = {
	ADMIN: 'admin',
	BASIC: 'basic'
};

module.exports = {
	ROLE: ROLE,
	users: [
		{id: 1, name: "Omar", role:ROLE.ADMIN},
		{id: 2, name: "Angela", role:ROLE.BASIC},
		{id: 3, name: "Nelan", role:ROLE.BASIC}
	],
	projects: [
		{id: 1, name: "Omar's Project", userId: 1},
		{id: 2, name: "Angela's Project", userId: 2},
		{id: 3, name: "Nelan's Project", userId: 3}
	]
};
