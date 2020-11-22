const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const data = require('./data')

// config

const config = {
  api: {
    port: process.env.PORT,
  },
}

// utils

const errorResponse = (status, code, message) => ({
  status,
  body: {
    status,
    code,
    message,
  },
})

const setResponse = (ctx, { status, body }) => {
  ctx.status = status
  ctx.body = body
  return ctx
}

const buildSuccessResponse = body => ({
  status: 200,
  body,
})

const errorMiddleware = (ctx, next) =>
  next()
    .catch(error => {
      console.error(error)
      setResponse(ctx, errorResponse(500, 'INTERNAL_SERVER_ERROR', error.message))
    })

// products

const categoriesHandler = ctx => {
  const categories = data.listCategories()
  const response = buildSuccessResponse(categories)
  return setResponse(ctx, response)
}

const productsHandler = ctx => {
  const categoryId = ctx.params.id
  const cursor = parseInt(ctx.request.query.cursor, 10)
  const products = data.listProducts(categoryId, cursor)
  const response = buildSuccessResponse(products)
  return setResponse(ctx, response)
}

const productDetailHandler = ctx => {
  const productId = ctx.params.id
  const product = data.getProduct(productId)
  const response = buildSuccessResponse(product)
  return setResponse(ctx, response)
}

// app

const router = new Router()
const app = new Koa()

router.use(errorMiddleware)
router.get('/api/categories', categoriesHandler)
router.get('/api/categories/:id/products', productsHandler)
router.get('/api/products/:id', productDetailHandler)

app.use(bodyParser())
app.use(router.routes())

// start

app
  .listen(config.api.port)
  .on('listening', () => console.log(`Api ready in port ${config.api.port}`))
  .once('error', error => {
    console.error(error, 'Shutting down server')
    process.exit(1)
  })
