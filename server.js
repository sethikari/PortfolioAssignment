require('dotenv').config(); // Load .env variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./backend/routes/contactRoutes');
const userRoutes = require('./backend/routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Default Route
app.get('/', (req, res) => {
    res.send('Welcome to DressStore Application.');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
