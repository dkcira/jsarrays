
// returns true (keep it) or false (discard it)

// keep a class of numbers from the array
const numbers = [1,2,3,4,5,6];
const oddNumbers = numbers.filter(n => n%2 !== 0);
console.log(oddNumbers);

// remove a particular item
const participants= [
	{id: 'a3f47', username: 'john'},
	{id: 'fek28', username: 'mary'},
	{id: 'n3j44', username: 'sam'},
];

function removeParticipant(participants, id){
	return participants.filter(participant => participant.id !== id);
}

console.log(removeParticipant(participants, 'a3f47'));
