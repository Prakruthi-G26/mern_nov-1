const product = require('../model1/module/product');
const createProduct=async(req,res)=>{
    try{
        const p=new product(req.body);
        const savedProduct=await p.save();
        res.status(201).json(savedProduct);
    }catch(error){
        res.status(400).json({message:error.message});
    }
};
exports.getAllItems = async (req, res) => {
			try {
				const items = await product.find();
				res.status(200).json(items);
			} catch (error) {
	    res.status(500).json({ message: error.message });   
    }
};
module.exports = createProduct;