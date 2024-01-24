const express = require('express');
const cors = require('cors'); 
const artistsData = require("./artists.json")

console.log(artistsData)


const app = express();
app.use(cors());
app.use(express.json()) 

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/painting-recognition', (req, res) => {
    res.send(artistsData)
})



module.exports = app