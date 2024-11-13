const express=require('express');
const router=express.Router();
const ProductController=require('../controllers/productControllers');
router.post('/',ProductController.createProduct);
module.exports=router;