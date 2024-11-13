const product = require('../model1/module/product');
exports.createProduct=async(req,res)=>{
    try{
        const p=new product(req.body);
        const savedProduct=await p.save();
        res.status(201).json(savedProduct);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};