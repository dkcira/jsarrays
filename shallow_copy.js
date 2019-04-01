// during shallow copy with spread operator (...) objects are copied by reference not by value

const arr = ['foo', 42, { name: 'Thomas' }];
let copy = [...arr];

copy[0] = 'bar'

console.log(arr);  // has not changed
console.log(copy); // foo -> bar


copy[2].name = 'Hello'; // copy[2] is a reference to arr[2] so it also changes the original object

console.log(arr);  // Thomas -> Hello
console.log(copy); // Thomas -> Hello
