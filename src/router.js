const { Router } = require('express')
const productsController = require('./controllers/products-controllers')

const router = Router()

router.get('/products', productsController.index)

router.post('/products', productsController.create)

module.exports = router