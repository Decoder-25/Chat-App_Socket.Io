const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const chats = require("./data/data");
const connectDB = require('./config/db');
const userRouts = require("./routes/userRoutes");
const { registerUser } = require('./controllers/userControllers');


const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Api is running")
});

app.use('/api/user', registerUser);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`.blue.bold));