const { Router } = require('express');
const {
  getAllProducts,
  getAllCategories,
  uploadImageAuth,
  updateProduct,
  deleteProduct,
  newProduct,
} = require('../controllers/Products');

const { Authorization } = require('../middlewares/Authorization');

const router = Router();

router.get('/', getAllProducts);
router.get('/category', getAllCategories);
router.get('/image-auth', uploadImageAuth);
router.post('/new-product', Authorization, newProduct);
router.put('/update-product', Authorization, updateProduct);
router.delete('/delete-product/:id', Authorization, deleteProduct);

module.exports = router;
