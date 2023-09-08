const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const colors = require('colors');
const path = require("path");
const chats = require("./data/data");
const connectDB = require('./config/db');
const userRouts = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const app = express();
dotenv.config();
connectDB();

app.use(cors());

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Api is running")
});

app.use('/api/user', userRouts);
app.use('/api/chat', chatRoutes);
app.use("/api/message", messageRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`listening on port ${PORT}`.blue.bold));