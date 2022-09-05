const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.post('/', productController.postProduct)
// router.put('/:id', productController.putProduct)
module.exports = router;
