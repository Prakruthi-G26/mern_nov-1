const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const itemRoutes=require('./routes/itemRoutes');
dotenv.config();
const app=express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/trainer',{useNewUrlParser:true,useUnifiedTopology:true,serverSelectionTimeoutMS: 50000,  // Increase if necessary (5 seconds)
socketTimeoutMS: 45000,})
.then(()=>console.log('connected to mongoDB'))
.catch((error)=>console.error('MongoDB connetion error:',error));
app.use(express.json()); // Middleware

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));

app.use('/api/items', itemRoutes); // Example for using itemRouter

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});