const express = require('express');
const cors = require('cors');
const artistsData = require("./data/artists.json");

// Import static mock data for Picasso
const picassoData = require('./data/artist-bios/pablo-picasso.json');

const app = express();
app.use(cors());
app.use(express.json())


/* 
    Endpoint methods
*/

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get(
    '/artist-bio',
    (req, res) => {
        // Return static mock data for Picasso
        res.send(picassoData);
    }
)

app.get('/painting-recognition', (req, res) => {
    res.send(artistsData)
})


module.exports = app