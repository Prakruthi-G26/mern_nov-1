const mongoose=require('mongoose');
const itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{type:Number,default:1},
    price:{type:Number,required:true}
});

module.exports=mongoose.model('Item',itemSchema);