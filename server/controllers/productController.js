const Product=require('../models/productModel')


//get all products
const getProducts =async(req, res) => {
    try {
        const products=await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//get a product by ID

const getProduct =async(req, res)=>{
    try {
        const {id}=req.params
        const product=await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//update data in database

const updateProduct= async(req, res)=>{
    try {
        const {id}=req.params
        const product=await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: 'cannot find any product with ID ${id}'})
        }
        res.status(500).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//delete data in database

const deleteProduct=async(req, res)=>{
    try {
        const {id}=req.params
        const product=await Product.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).json({message: 'cannot find any product with ID ${id}'})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports={
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}