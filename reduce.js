// take an array of values  and reduce to one alue

const numbers = [37,12,28,4,9];

// parameters:
// - accumulator (total)
// - current value of the array (n)
// - current index
// - array reduce was called upon (numbers)
const total = numbers.reduce((total, n) => total + n );
console.log(total); // 90
