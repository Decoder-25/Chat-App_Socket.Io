const express = require('express');
const dotenv = require('dotenv');
const chats = require("./data/data")

const app = express();
dotenv.config();

app.get('/', (req,res) => {
    res.send("Api is running")
});

app.get('/api/chat', (req,res) => {
    res.send(chats)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`listening on port ${PORT}`));