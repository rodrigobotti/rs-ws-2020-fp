// funções que recebem funções como parâmetro ou que retornam funções (ou ambos)

// std lib
// - arrays
const double = x => 2 * x

const isEven = x => x % 2 === 0

const numbers = [1, 2, 3, 4, 5]

const add = (x, y) => x + y

const sumOfAll = numbers.reduce(add, 0)

console.log(numbers.map(double))

console.log(numbers.filter(isEven))

console.log(sumOfAll)

// - promises
const asynComputation = () => Promise.resolve(1)

asynComputation()
  .then(double)
  .then(console.log)

// usos
// decorators

const withLog = fn =>
  (...args) => {
    console.log('arguments: ', args)
    const result = fn(...args)
    console.log('result: ', result)
    return result
  }

const loggedMax = withLog(Math.max)

loggedMax(666, -1000, 2020)
