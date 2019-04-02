// slice: take portion or copy array
// N.B.: slice performs shallow copy, just like the spread operator

const numbers = [1, 2, 3, 4, 5];
const copy = numbers.slice();
console.log(copy);

// replace a loop with slice

// // loop over some messages
// const nbMessages = messages.length < 5 ? messages.length : 5;
// let messagesToShow = [];
// for (let i = -; i < nbMessages; i++){
// 	 messagesToShow.psh(posts[i])
// }

// // replace loop with slice
// const messagesToShow = messages.slide(0, 5);