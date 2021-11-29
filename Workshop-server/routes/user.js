const { createAdmin, adminDashboard, signin, adminAuth, addProduct, verifyToken, getProducts } = require('../controllers/user');
const authorization = require('../middleware/jwt-auth');
const { requireAdmin, requireClient } = require('../middleware/userAuth');
const router = require('express').Router();


router.post('/admin/signup', createAdmin);
router.post('/signin', signin);
router.post('/admin/verify', adminAuth);
router.post('/products/create', authorization, requireAdmin, addProduct);
router.get('/products/', getProducts);
router.get('/admin/dashboard', authorization, adminDashboard);
router.get('/verify', authorization, verifyToken);

module.exports = router;