const express=require('express')
const Product=require('../models/productModel');
const { getProducts, getProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const router=express.Router();

//get all products
router.get('/', getProducts)

//get a product by ID
router.get('/:id', getProduct)

//update data in database
router.put('/:id', updateProduct)

//delete data in database
router.delete('/:id', deleteProduct)



router.post('/', async (req, res) => {
try {
    const product=await Product.create(req.body)
    res.status(200).json(product);
} catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
}
})

module.exports=router
