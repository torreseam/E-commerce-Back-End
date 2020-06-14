// THIS FILE will serve as a means to collect all of the API routes 
// and package them up-dependancies from Product,Category and Tag.js folders

const router = require('express').Router();

const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
