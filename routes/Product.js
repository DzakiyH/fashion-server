const { Router } = require('express');
const { getAllProducts, getAllCategories } = require('../controllers/Products');

const router = Router();

router.get('/', getAllProducts);
router.get('/category', getAllCategories);

module.exports = router;
