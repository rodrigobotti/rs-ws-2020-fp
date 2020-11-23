// composicao

// h = f . g
// h(x) = f( g(x) )
// em JS: const h = compose(f, g)

// f = f1 . f2 . (...) . fN
// em pseudo-código: f(x) = f1( f2( ... fN(x) ... ) )
// em pseudo-código: const f = compose(f1, f2, ..., fN)

// note que a ordem de execução é da direita pra esquerda

const compose = (...fns) => x =>
  fns.reduceRight((y, f) => f(y), x)

// algo que pode ser mais fácil de ler: pipe
// h = f |> g
// h(x) = g( f(x) )
// f = f1 |> f2 |> (...) |> fN
// f(x) = fN( ... f2( f1(x) ) ... )
// execução da esquerda pra direita: próxima função no pipe recebe o retorno da função anterior e assim sucessivamente

const pipe = (...fns) =>
  x => fns.reduce((v, f) => f(v), x)

// ---
// Problema
// Lista de users:
/*
{
  admin: Boolean,
  age: Number,
  // ... omitindo por simplicidade
}
*/

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

// array manipulation + utils

const map = curry((mapper, xs) =>
  xs.map(mapper)
)

const filter = curry((predicate, xs) =>
  xs.filter(predicate)
)

const reduce = curry((reducer, initial, xs) =>
  xs.reduce(reducer, initial)
)

const add = curry((x, y) => x + y)

// domain

const User = (age, admin) => ({
  age,
  admin,
})

const isAdmin = user =>
  user.admin

const getAge = user =>
  user.age

// somente os admin
// as idades
// somar os valores
const sumAges = pipe(
  filter(isAdmin),
  map(getAge),
  reduce(add, 0)
)

// podemos melhorar
// abstrair acesso a propriedades
// extrair somar todos numeros num array como uma função

const prop = curry((field, object) =>
  object[field]
)

const isAdmin = prop('admin')

const getAge = prop('age')

const sum = reduce(add, 0)

const sumAges = pipe(
  filter(isAdmin),
  map(getAge),
  sum
)

// alternativas imperativas

const sumAgeAdmins = (users) => {
  let sum = 0
  for (const user of users) {
    if (user.admin) {
      sum += user.age
    }
  }
  return sum
}

// ou pior

const sumAgeAdmins = (users) => {
  let sum = 0
  for (let i = 0; i < users.length; i ++) {
   const user = users[i]
   if (user.admin) {
      sum += user.age
    }
  }
  return sum
}

// "fluent" functional

const sumAgeAdmin = users =>
  users
    .filter(user => user.admin)
    .map(user => user.age)
    .reduce((acc, curr) => acc + curr, 0)

// ou ("materializando" as funções anonimas)

const sumAgeAdmin = users =>
  users
    .filter(isAdmin)
    .map(getAge)
    .reduce(add, 0)


// Facilidade de adicionar features: composição

const log = curry((tag, value) => {
  console.log(`[${tag}]`, value)
  return value
})
