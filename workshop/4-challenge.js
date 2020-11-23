const R = require('ramda')
const axios = require('axios')
const pMap = require('p-map')

// utils

const concatAll = R.reduce(R.concat, [])

const concurrently = R.curry((concurrency, mapper, xs) =>
  pMap(xs, mapper, { concurrency })
)

const append = R.curry((xs, x) =>
  xs.concat([x])
)

const serially = R.curry((mapper, xs) =>
  xs.reduce(
    (promise, x) => promise.then(acc => mapper(x).then(append(acc))),
    Promise.resolve([])
  )
)

const delay = time =>
  new Promise(resolve => setTimeout(resolve, time))

const delayed = R.curry((time, value) =>
  delay(time).then(R.always(value))
)

const then = R.andThen

// ---
// requests

// categories

const categoryRequestConfig = {
  method: 'get',
  url: 'http://localhost:3001/api/categories',
}
const listCategoryIds = R.pipe(
  R.always(categoryRequestConfig),
  axios,
  then(R.prop('data')),
  then(R.map(R.prop('id')))
)

// products

const listProductIdsRequestConfig = ({ categoryId, cursor }) => ({
  method: 'get',
  url: `http://localhost:3001/api/categories/${categoryId}/products`,
  params: { cursor },
})

const listProdutIdsRequest = R.pipe(
  listProductIdsRequestConfig,
  axios,
  then(R.prop('data'))
)

const listAllProductIds = (productIds, { categoryId, cursor }) =>
  R.isNil(cursor)
    ? Promise.resolve(productIds)
    : listProdutIdsRequest({ categoryId, cursor })
      .then(({ result, nextCursor }) => {
        const ids = result.map(R.prop('id'))
        // eslint-disable-next-line no-unused-vars
        return listAllProductIds(productIds.concat(ids), { categoryId, cursor: nextCursor })
      })

const listProductIds = categoryId =>
  listAllProductIds([], { categoryId, cursor: 0 })

// product details

const getProductRequestConfig = productId => ({
  method: 'get',
  url: `http://localhost:3001/api/products/${productId}`,
})

const getProductRequest = R.pipe(
  getProductRequestConfig,
  axios,
  then(R.prop('data'))
)

const getProductDetails = R.pipe(
  delayed(100),
  then(getProductRequest)
)

// save product
const logSize = R.pipe(
  R.prop('length'),
  console.log.bind(console, 'Size:')
)

const saveProducts = R.tap(console.log)

// process

const process = R.pipe(
  listCategoryIds,
  then(concurrently(2, listProductIds)),
  then(concatAll),
  then(serially(getProductDetails)),
  then(saveProducts),
  then(R.tap(logSize))
)

process()
