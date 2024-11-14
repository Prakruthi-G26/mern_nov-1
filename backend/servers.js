const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const itemRoutes = require('./routes/itemRoutes');
const TrainerRoutes = require('./routes/trainerRoutes');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json());//MiddleWare
app.use(cors());
// const corsOptions = {
//     origin: 'http://www.flipkart.com', 
// };
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (allowedOrigins.includes(origin) || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// };
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
			.catch((error) => console.error('MongoDB connection error:', error));
//app.use('/api/items', itemRoutes);
app.use('/api/trainers', TrainerRoutes);
// app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});