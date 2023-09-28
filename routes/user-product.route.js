const express = require('express');
const router = express.Router();

const userProductController = require('../controllers/user-product.controller');

router.get('/', userProductController.findAll);
router.get('/:username', userProductController.findOne);
router.get('/stats1', userProductController.stats1);
router.post('/', userProductController.addProduct);
router.patch('/:username', userProductController.updateProduct);
router.delete('/:username/products/:id', userProductController.deleteProduct );


module.exports = router;