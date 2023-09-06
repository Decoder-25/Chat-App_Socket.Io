const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const chats = require("./data/data");
const connectDB = require('./config/db');
const userRouts = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Api is running")
});

app.use('/api/user', userRouts);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`.blue.bold));