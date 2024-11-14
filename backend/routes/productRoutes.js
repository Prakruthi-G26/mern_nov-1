const express=require('express');
const router=express.Router();
const createProduct=require('../controllers/productControllers');
const getAllItems=require("../controllers/productControllers")
router.post('/',createProduct);
//router.get('/',createProduct.getAllItems);
module.exports=router;