const express = require('express');
const cors = require('cors'); 
const artistsData = require("./artists.json")

const app = express();
app.use(cors());
app.use(express.json())   

// app.get('/', (req, res) => {
//     res.send("Welcome");
// })

app.get('/painting-recognition', (req, res) => {
    res.send(artistsData)
})



module.exports = app