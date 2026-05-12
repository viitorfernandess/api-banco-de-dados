const { Router } = require('express')
const productsController = require('./controllers/products-controllers')

const router = Router()

router.get('/products', productsController.index)
router.get('/products/:id', productsController.show)
router.post('/products', productsController.create)

module.exports = router