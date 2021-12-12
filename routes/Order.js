const { Router } = require('express');
const { setNewOrder, setAddress } = require('../controllers/Order');
const { Authorization } = require('../middlewares/Authorization');

const router = Router();

router.post('/new-order', Authorization, setNewOrder);
router.post('/address', Authorization, setAddress);

module.exports = router;
