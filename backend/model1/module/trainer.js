const mongoose=require('mongoose');
const trianerSchema=new mongoose.Schema({
    trainer_name:{type:String,required:true},
    trainer_location:{type:String,required:true},
    trainer_skills:{type:String,required:true},
    trainer_phoneNumber:{type:Number,required:true}
});

module.exports=mongoose.model('Trainer',trianerSchema);