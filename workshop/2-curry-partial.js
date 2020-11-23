// função que recebe múltiplos argumentos um de cada vez

const add = x => y => x + y

add(3)(4)

const increment = add(1)

console.log(increment(665))

// partial application
// Now imagine that extended to function of N arguments where any number of them can be partially applied. This is partial application.
// A partial application is a function which has been applied to some, but not yet all of its arguments.
// In other words, it’s a function which has some arguments fixed inside its closure scope.
// A function with some of its parameters fixed is said to be partially applied
const R = require('ramda')

const add3 = R.curry((x, y, z) =>
  x + y + z
)

console.log(
  add3(1)(2)(3),
  add3(1, 2)(3),
  add3(1)(2, 3),
  add3(1, 2, 3)
)

const curry = (fn, n) => {
  const arity = n || fn.length
  return (...params) =>
    params.length >= arity
      ? fn(...params)
      // eslint-disable-next-line no-unused-vars
      : curry(
        (...rest) => fn(...params, ...rest),
        arity - params.length
      )
}

const a3 = curry((x, y, z) =>
  x + y + z
)

console.log(
  a3(1)(2)(3),
  a3(1, 2)(3),
  a3(1)(2, 3),
  a3(1, 2, 3)
)
