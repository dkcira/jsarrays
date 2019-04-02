// ES2019 flatten an array
const numbers = [1, 2, [3, 4, [5, [6, 7]], [[[[8]]]]]]

const numbersflattenOnce = numbers.flat()
console.log(numbersflattenOnce) // [1, 2, 3, 4, Array[2], Array[1]]

const numbersflattenTwice = numbers.flat(2)
console.log(numbersflattenTwice) // [1, 2, 3, 4, 5, Array[2], Array[1]]

const numbersFlattenInfinity = numbers.flat(Infinity)
console.log(numbersFlattenInfinity) // [1, 2, 3, 4, 5, 6, 7, 8]