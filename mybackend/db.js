const mongoose=require("mongoose");
const url="mongodb://localhost:27017/trainer";
const userSchema=new mongoose.Schema({
    name:String,
    age:Number
});
const User=mongoose.model('user',userSchema);
async function main(){
    try{
        await mongoose.connect(url,{userNewUrlParser:true,userUnifiedTopology:true});
        console.log('connected to mongodb');
        //first user
        const user=new User({name:"alice",age:20});
        await user.save();
        console.log("user saved: ",user);
        const users=await User.find({});
        console.log("Found users: ",users);
        //second user
        const user1=new User({name:"emily",age:25});
        await user1.save();
        console.log("user saved: ",user1);
        const users1=await User1.find({});
        console.log("Found users: ",users1);
        //third user
        const user2=new User({name:"john",age:40});
        await user2.save();
        console.log("user saved: ",user2);
        const users2=await User2.find({});
        console.log("Found users: ",users2);
    }
    finally{
        
    }
}